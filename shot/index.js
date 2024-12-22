#!/usr/bin/env node
const { program } = require('commander');
const path = require('path');
const { convertPostmanToPlaywright } = require('./src/converter.js');
const packageJson = require('./package.json');

// Define the main options
program
  .version(packageJson.version)
  .description('Convert Postman collections to Playwright test scripts')
  .option('-c, --convert <postmanCollectionPath>', 'Convert Postman collection to Playwright scripts')
  .option('-o, --output <outputDir>', 'Output directory for Playwright scripts', process.cwd())
  .option('-f, --format <format>', 'Format of the output scripts (js, ts)', 'js') // Added --format option
  .action((options) => {
    if (options.convert) {
      const postmanCollectionPath = path.resolve(options.convert);
      const outputDir = path.resolve(options.output);
      const format = options.format; // Get the format (js or ts)

      // Call the conversion function with the additional format parameter
      convertPostmanToPlaywright(postmanCollectionPath, outputDir, format);
    }
  });

// Define the 'convert' command for more granular control
program
  .command('convert <postmanCollectionPath>')
  .option('-o, --output <outputDir>', 'Output directory for Playwright scripts', process.cwd())
  .option('-f, --format <format>', 'Format of the output scripts (js, ts)', 'js') // Added --format option here as well
  .action((postmanCollectionPath, options) => {
    const outputDir = path.resolve(options.output);
    const format = options.format; // Get the format (js or ts)

    // Call the conversion function with the additional format parameter
    convertPostmanToPlaywright(postmanCollectionPath, outputDir, format);
  });

// Parse the command line arguments
program.parse(process.argv);

// If no arguments are provided, show help
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
