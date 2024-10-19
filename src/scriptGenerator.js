const fs = require("fs").promises;
const path = require("path");
const crypto = require("crypto");

let variables = {};
let itemCounter = 0;
let convertedScripts = new Map();

async function loadVariables(outputDir) {
  if (!outputDir) {
    console.error("Output directory is undefined");
    return;
  }
  const variablesFilePath = path.join(outputDir, "variables.json");
  try {
    const data = await fs.readFile(variablesFilePath, "utf8");
    variables = JSON.parse(data);
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.error("Error loading variables:", error);
    }
  }
}

async function saveVariables(outputDir) {
  if (!outputDir) {
    console.error("Output directory is undefined");
    return;
  }
  const variablesFilePath = path.join(outputDir, "variables.json");
  await fs.writeFile(
    variablesFilePath,
    JSON.stringify(variables, null, 2),
    "utf8"
  );
}

function replaceVariables(text) {
  return text.replace(/{{(.+?)}}/g, (_, key) => variables[key] || _);
}

function convertPreRequestScript(script) {
  if (!script) return "";

  let convertedScript = "  // Pre-request Script\n";
  const lines = script.split("\n");

  lines.forEach((line) => {
    if (
      line.includes("pm.variables.set") ||
      line.includes("pm.environment.set") ||
      line.includes("pm.globals.set")
    ) {
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
  if (!script) return "";

  const scriptHash = crypto.createHash("md5").update(script).digest("hex");
  if (convertedScripts.has(scriptHash)) {
    return convertedScripts.get(scriptHash);
  }

  let convertedScript = "  // Post-response Script (Tests)\n";
  const lines = script.split("\n");
  let insideTest = false;
  let currentTestName = "";
  let jsonAssignmentFound = false;

  const assertionRegex =
    /pm\.expect\((.*?)\)\.to\.(be\.an?|have)(\.property)?\(['"](\w+)['"]\)/;
  const arrayAssertionRegex =
    /pm\.expect\((.*?)\)\.to\.be\.an\(['"]array['"]\)/;
  const startRegex = /pm\.expect\((.*?)\)/;
  const variableNameRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  lines.forEach((line) => {
    if (line.includes("pm.test(")) {
      insideTest = true;
      const match = line.match(/pm\.test\("(.+?)"/);
      if (match) {
        currentTestName = match[1];
        convertedScript += `\n  // ${currentTestName}\n`;
      }
    } else if (insideTest && line.includes("});")) {
      insideTest = false;
    } else if (insideTest) {
      if (line.includes("pm.response.to.have.status")) {
        convertedScript += `  expect(response.status()).toBe(${
          line.match(/\d+/)[0]
        });\n`;
      } else if (
        line.includes("pm.expect(pm.response.responseTime).to.be.below")
      ) {
        convertedScript += `  expect(responseTime).toBeLessThan(${
          line.match(/\d+/)[0]
        });\n`;
      } else if (line.includes("= pm.response.json()")) {
        jsonAssignmentFound = true;
      } 
      
    }
  });

  convertedScripts.set(scriptHash, convertedScript);
  return convertedScript;
}

function generatePlaywrightTest(item, folderPath, outputDir) {
  const { name, request, event } = item;
  const { method, url, header, body } = request;

  let preRequestScript = "";
  let postResponseScript = "";

  if (event) {
    const preRequestEvent = event.find((e) => e.listen === "prerequest");
    const testEvent = event.find((e) => e.listen === "test");

    if (preRequestEvent && preRequestEvent.script) {
      preRequestScript = convertPreRequestScript(
        preRequestEvent.script.exec.join("\n")
      );
    }

    if (testEvent && testEvent.script) {
      postResponseScript = convertPostResponseScript(
        testEvent.script.exec.join("\n")
      );
    }
  }

  let requestOptions = {};
  if (header && header.length > 0) {
    requestOptions.headers = header.reduce(
      (acc, h) => ({ ...acc, [h.key]: replaceVariables(h.value) }),
      {}
    );
  }
  if (body && body.mode === "raw") {
    try {
      requestOptions.data = JSON.parse(replaceVariables(body.raw));
    } catch {
      requestOptions.data = replaceVariables(body.raw);
    }
  }

  // Check if url and url.raw exist before using it
  const requestUrl = url && url.raw ? replaceVariables(url.raw) : "undefined_url";

  const relativePath = path.relative(folderPath, outputDir).replace(/\\/g, "/");
  const variablesImport = relativePath
    ? `import { variables } from '${relativePath}/variables.js';`
    : `import { variables } from './variables.js';`;

  return `
import { test, expect } from '@playwright/test';
${variablesImport}

test('${name}', async ({ request }) => {
${preRequestScript}
  const startTime = Date.now();

  const response = await request.${method.toLowerCase()}('${requestUrl}'${
    Object.keys(requestOptions).length > 0
      ? `, ${JSON.stringify(requestOptions, null, 2)}`
      : ""
  });
  const responseTime = Date.now() - startTime;
${postResponseScript}
});
`;
}


async function processItem(item, parentPath = "", outputDir) {
  if (!outputDir) {
    console.error("Output directory is undefined");
    return;
  }
  const itemNumber = String(itemCounter++).padStart(3, "0");

  if (item.item) {
    // This is a folder
    const folderPath = path.join(
      parentPath,
      `${itemNumber}_${item.name.replace(/[^a-z0-9]/gi, "_").toLowerCase()}`
    );
    await fs.mkdir(folderPath, { recursive: true });

    for (const subItem of item.item) {
      await processItem(subItem, folderPath, outputDir);
    }
  } else if (item.request) {
    // This is a request
    const testScript = generatePlaywrightTest(item, parentPath, outputDir);
    const fileName = `${itemNumber}_${item.name
      .replace(/[^a-z0-9]/gi, "_")
      .toLowerCase()}.spec.js`;
    const filePath = path.join(parentPath, fileName);
    await fs.writeFile(filePath, testScript);
  }
}

async function processCollection(collection, outputDir) {
  if (!outputDir) {
    throw new Error("Output directory is undefined");
  }
  console.log(`Processing collection. Output directory: ${outputDir}`);

  await loadVariables(outputDir);

  if (collection.variable) {
    collection.variable.forEach((v) => {
      variables[v.key] = v.value;
    });
  }

  itemCounter = 0;
  convertedScripts.clear(); // Clear the converted scripts before processing a new collection
  for (const item of collection.item) {
    await processItem(item, outputDir, outputDir);
  }

  await saveVariables(outputDir);

  // Create a variables.js file to export the variables
  const variablesJsContent = `export const variables = ${JSON.stringify(
    variables,
    null,
    2
  )};`;
  const variablesJsPath = path.join(outputDir, "variables.js");
  await fs.writeFile(variablesJsPath, variablesJsContent);
}

module.exports = { processCollection, generatePlaywrightTest };
