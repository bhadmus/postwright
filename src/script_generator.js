function generatePlaywrightScript(request) {
  if (!request || !request.request) {
    throw new Error("Invalid request format");
  }

  const method = request.request.method ? request.request.method.toLowerCase() : "get";
  const url = request.request.url ? request.request.url.raw : "";
  const headers = request.request.header
    ? request.request.header.map((header) => `'${header.key}': '${header.value}'`).join(", ")
    : "";
  const body = request.request.body && request.request.body.raw
    ? `JSON.stringify(${request.request.body.raw})`
    : "";

  // Convert Postman test scripts to Playwright test scripts
  const tests = request.event
    ? request.event
        .filter((event) => event.listen === "test" && event.script && event.script.exec)
        .map((event) => convertPostmanTestScript(event.script.exec.join("\n")))
        .join("\n")
    : "";

  return `
    const { test, expect } = require('@playwright/test');

    test('${request.name || "Unnamed Test"}', async ({ request }) => {
      const response = await request.${method}('${url}', {
        ${headers ? `headers: { ${headers} },` : ""}
        ${body ? `data: ${body},` : ""}
      });

      // Test assertions
      const responseBody = await response.json();
      ${tests}
      expect(response.ok()).toBeTruthy();
    });
  `;
}

function convertPostmanTestScript(script) {
  if (typeof script !== "string") {
    throw new Error("Test script must be a string");
  }

  // Extract Postman test cases and convert to Playwright format
  let convertedScript = "";
  const testRegex = /pm\.test\("([^"]+)"\s*,\s*function\s*\(\)\s*{\s*([\s\S]*?)\s*}\);/g;
  let match;

  while ((match = testRegex.exec(script)) !== null) {
    const testBody = match[2].trim();
    convertedScript += convertPostmanTestBody(testBody) + "\n";
  }

  return convertedScript;
}

function convertPostmanTestBody(body) {
  // Replace common Postman assertions with Playwright equivalents
  body = body
    .replace(/pm\.response\.to\.have\.status\((\d+)\);/g, `expect(response.status()).toBe($1);`)
    .replace(/pm\.response\.to\.have\.json\(([^)]+)\);/g, `expect(await response.json()).toMatchObject($1);`)
    .replace(/pm\.response\.to\.have\.header\("([^"]+)"\s*,\s*"([^"]+)"\);/g, `expect(response.headers()['$1']).toBe('$2');`)
    .replace(/pm\.response\.to\.have\.body\(([^)]+)\);/g, `expect(await response.text()).toContain($1);`)
    .replace(/pm\.expect\(([^)]+)\)\.to\.be\(([^)]+)\);/g, `expect($1).toBe($2);`)
    .replace(/pm\.expect\(([^)]+)\)\.to\.deep\.equal\(([^)]+)\);/g, `expect($1).toEqual($2);`)
    .replace(/pm\.expect\(([^)]+)\)\.to\.be\.true\(\);/g, `expect($1).toBe(true);`)
    .replace(/pm\.expect\(([^)]+)\)\.to\.be\.false\(\);/g, `expect($1).toBe(false);`)
    .replace(/pm\.expect\(([^)]+)\)\.to\.be\.null\(\);/g, `expect($1).toBeNull();`)
    .replace(/pm\.expect\(([^)]+)\)\.to\.be\.undefined\(\);/g, `expect($1).toBeUndefined();`)
    .replace(/pm\.expect\(([^)]+)\)\.to\.have\.length\((\d+)\);/g, `expect($1).toHaveLength($2);`)
    .replace(/pm\.expect\(([^)]+)\)\.to\.match\(([^)]+)\);/g, `expect($1).toMatch($2);`)
    .replace(/pm\.expect\(([^)]+)\)\.to\.contain\(([^)]+)\);/g, `expect($1).toContain($2);`)
    .replace(/pm\.expect\(([^)]+)\)\.to\.be\.greater\(([^)]+)\);/g, `expect($1).toBeGreaterThan($2);`)
    .replace(/pm\.expect\(([^)]+)\)\.to\.be\.less\(([^)]+)\);/g, `expect($1).toBeLessThan($2);`);

  // Extract json response part for further assertions
  const jsonResponseRegex = /pm\.expect\(pm\.response\.json\(\)\.([^)]+)\)\.to\.(?:eql|equal|deep\.equal|contain)\(([^)]+)\);/g;
  let responseBodyAssertion = "";
  let match;

  while ((match = jsonResponseRegex.exec(body)) !== null) {
    const property = match[1];
    const value = match[2];
    responseBodyAssertion += `expect(responseBody.${property}).toBe(${value});\n`;
  }

  return responseBodyAssertion;
}

module.exports = { generatePlaywrightScript };
