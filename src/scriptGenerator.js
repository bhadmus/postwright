const fs = require('fs').promises;
const path = require('path');

let variables = {};
let itemCounter = 0;

async function loadVariables() {
  const variablesFilePath = path.join(process.cwd(), 'variables.json');
  try {
    const data = await fs.readFile(variablesFilePath, 'utf8');
    variables = JSON.parse(data);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.error('Error loading variables:', error);
    }
  }
}

async function saveVariables() {
  const variablesFilePath = path.join(process.cwd(), 'variables.json');
  await fs.writeFile(variablesFilePath, JSON.stringify(variables, null, 2), 'utf8');
}

function replaceVariables(text) {
  return text.replace(/{{(.+?)}}/g, (_, key) => variables[key] || _);
}

function convertPreRequestScript(script) {
  if (!script) return '';
  
  let convertedScript = '  // Pre-request Script\n';
  const lines = script.split('\n');
  
  lines.forEach(line => {
    if (line.includes('pm.variables.set') || line.includes('pm.environment.set') || line.includes('pm.globals.set')) {
      const match = line.match(/set$$"(.+?)",\s*(.+?)$$/);
      if (match) {
        const [, key, value] = match;
        convertedScript += `  variables['${key}'] = ${value};\n`;
      }
    } else {
      convertedScript += `  ${line}\n`;
    }
  });

  return convertedScript;
}

function convertPostResponseScript(script) {
  if (!script) return '';

  let convertedScript = '  // Post-response Script (Tests)\n';
  const lines = script.split('\n');
  let insideTest = false;
  let currentTestName = '';

  lines.forEach(line => {
    if (line.includes('pm.test(')) {
      insideTest = true;
      const match = line.match(/pm\.test\("(.+?)"/);
      if (match) {
        currentTestName = match[1];
        convertedScript += `\n  // ${currentTestName}\n`;
      }
    } else if (insideTest && line.includes('});')) {
      insideTest = false;
    } else if (insideTest) {
      if (line.includes('pm.response.to.have.status')) {
          convertedScript += `  expect(response.status()).toBe(${currentTestName.match(/\d+/)[0]});`;
      } else if (line.includes('= pm.response.json()')) {
      } else if (line.includes('pm.expect(responseData).to.be.an(\'array\').that.is.not.empty')) {
        convertedScript += `  expect(Array.isArray(responseBody)).toBeTruthy();\n  expect(responseBody.length).toBeGreaterThan(0);`;
      } else if (line.includes('pm.expect(responseData).to.be.an(\'array\')')) {
        convertedScript += `  expect(Array.isArray(responseBody)).toBeTruthy();\n`;
      } else if (line.includes('pm.expect(pm.response.responseTime).to.be.below')) {
        convertedScript += `  expect(responseTime).toBeLessThan(${line.match(/\d+/)[0]});\n`;
      } else if (line.trim() !== '') {
        convertedScript += ``;
      }
    }
  });

  return convertedScript;
}

function generatePlaywrightTest(item, folderPath) {
  const { name, request, event } = item;
  const { method, url, header, body } = request;

  let preRequestScript = '';
  let postResponseScript = '';

  if (event) {
    const preRequestEvent = event.find(e => e.listen === 'prerequest');
    const testEvent = event.find(e => e.listen === 'test');

    if (preRequestEvent && preRequestEvent.script) {
      preRequestScript = convertPreRequestScript(preRequestEvent.script.exec.join('\n'));
    }

    if (testEvent && testEvent.script) {
      postResponseScript = convertPostResponseScript(testEvent.script.exec.join('\n'));
    }
  }

  let requestOptions = {};
  if (header && header.length > 0) {
    requestOptions.headers = header.reduce((acc, h) => ({ ...acc, [h.key]: replaceVariables(h.value) }), {});
  }
  if (body && body.mode === 'raw') {
    try {
      requestOptions.data = JSON.parse(replaceVariables(body.raw));
    } catch {
      requestOptions.data = replaceVariables(body.raw);
    }
  }

  return `
import { test, expect } from '@playwright/test';
import { variables } from '../variables';

test('${name}', async ({ request }) => {
${preRequestScript}
  const startTime = Date.now();

  const response = await request.${method.toLowerCase()}('${replaceVariables(url.raw)}'${Object.keys(requestOptions).length > 0 ? `, ${JSON.stringify(requestOptions, null, 2)}` : ''});
  const responseTime = Date.now() - startTime;

  const responseBody = await response.json();
${postResponseScript}
});
`;
}

async function processItem(item, parentPath = '') {
  const itemNumber = String(itemCounter++).padStart(3, '0');
  
  if (item.item) {
    // This is a folder
    const folderPath = path.join(parentPath, `${itemNumber}_${item.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`);
    await fs.mkdir(folderPath, { recursive: true });
    
    for (const subItem of item.item) {
      await processItem(subItem, folderPath);
    }
  } else if (item.request) {
    // This is a request
    const testScript = generatePlaywrightTest(item, parentPath);
    const fileName = `${itemNumber}_${item.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.spec.js`;
    await fs.writeFile(path.join(parentPath, fileName), testScript);
  }
}

async function processCollection(collection, outputDir) {
  await loadVariables();

  if (collection.variable) {
    collection.variable.forEach(v => {
      variables[v.key] = v.value;
    });
  }

  itemCounter = 0;
  for (const item of collection.item) {
    await processItem(item, outputDir);
  }

  await saveVariables();
}

module.exports = { processCollection };