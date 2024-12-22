const fs = require("fs").promises;
const path = require("path");
const { processCollection } = require("./scriptGenerator.js");

async function convertPostmanToPlaywright(
  postmanCollectionPath,
  outputDir = path.join(process.cwd(), 'test'),
  format = "js"// Default to 'js' (JavaScript)
) {
  try {
    const postmanCollection = JSON.parse(
      await fs.readFile(postmanCollectionPath, "utf-8")
    );

    await fs.mkdir(outputDir, { recursive: true });

    let itemCounter = 0;
        await processCollection(postmanCollection, outputDir, format);
        await createPackageJson(outputDir);

    // Create tsconfig.json if TypeScript is chosen
    if (format === "ts") {
      await createTsConfig(outputDir);
    }

    console.log(
      `Conversion complete. Playwright scripts have been generated in ${outputDir}`
    );
  } catch (error) {
    console.error("Error converting Postman collection:", error.message);
    process.exit(1);
  }
}

async function createTsConfig(outputDir) {
  const tsConfigContent = {
    compilerOptions: {
      target: "ES6",
      module: "CommonJS",
      strict: true,
      esModuleInterop: true,
      skipLibCheck: true,
      forceConsistentCasingInFileNames: true,
    },
    include: ["**/*.ts"],
  };

  const tsConfigPath = path.join(outputDir, "tsconfig.json");

  await fs.writeFile(
    tsConfigPath,
    JSON.stringify(tsConfigContent, null, 2),
    "utf8"
  );
  console.log("tsconfig.json created.");
}

async function createPackageJson(outputDir){
  const packageJsonPath = path.join(outputDir, 'package.json');

  const packageJsonContent = {
    "name": "postman-to-playwright",
    "version": "1.0.0",
    "description": "Converts postman collection to playwright scripts",
    "main": "index.js",
    "scripts": {
      "test": "npx playwright test"
    },
    "devDependencies": {
      "playwright": "latest",
      "@playwright/test": "latest"
    }

  }

  await fs.writeFile(
    packageJsonPath,
    JSON.stringify(packageJsonContent, null, 2),
    "utf8"
  );
  console.log("package.json created.");
}

module.exports = { convertPostmanToPlaywright };
