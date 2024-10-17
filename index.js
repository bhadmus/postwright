#!/usr/bin/env node
const { program } = require('commander');
const path = require('path');
const { convertPostmanToPlaywright } = require('./src/converter.js');
const packageJson = require('./package.json');

program
  .version(packageJson.version)
  .description('Convert Postman collections to Playwright test scripts')
  .option('-c, --convert <postmanCollectionPath>', 'Convert Postman collection to Playwright scripts')
  .option('-o, --output <outputDir>', 'Output directory for Playwright scripts', process.cwd())
  .action((options) => {
    if (options.convert) {
      const postmanCollectionPath = path.resolve(options.convert);
      const outputDir = path.resolve(options.output);
      convertPostmanToPlaywright(postmanCollectionPath, outputDir);
    }
  });

program
  .command('convert <postmanCollectionPath>')
  .option('-o, --output <outputDir>', 'Output directory for Playwright scripts', process.cwd())
  .action((postmanCollectionPath, options) => {
    const outputDir = path.resolve(options.output);
    convertPostmanToPlaywright(postmanCollectionPath, outputDir);
  });

program.parse(process.argv);

// If no arguments are provided, show help
if (!process.argv.slice(2).length) {
  program.outputHelp();
}