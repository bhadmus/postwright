const fs = require("fs").promises;
const path = require("path");
const { processCollection } = require("./scriptGenerator.js");

async function convertPostmanToPlaywright(
  postmanCollectionPath,
  outputDir = process.cwd(),
  format = "js"// Default to 'js' (JavaScript)
) {
  try {
    const postmanCollection = JSON.parse(
      await fs.readFile(postmanCollectionPath, "utf-8")
    );

    await fs.mkdir(outputDir, { recursive: true });

    let itemCounter = 0;
        await processCollection(postmanCollection, outputDir, format);

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

module.exports = { convertPostmanToPlaywright };
