#!/usr/bin/env node

const { program } = require('commander');
const path = require('path');
const { convertPostmanToPlaywright } = require('./src/converter');
const packageJson = require('./package.json');

program
  .version(packageJson.version)
  .description('Convert Postman collections to Playwright test scripts');

program
  .command('convert <postmanCollectionPath>')
  .option('-o, --output <outputDir>', 'Output directory for Playwright scripts', process.cwd())
  .action((postmanCollectionPath, options) => {
    const outputDir = path.resolve(options.output);
    convertPostmanToPlaywright(postmanCollectionPath, outputDir);
  });

program.parse(process.argv);