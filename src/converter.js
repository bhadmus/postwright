const fs = require('fs');
const path = require('path');
const { sanitizeFileName } = require('./utils');
const { generatePlaywrightScript } = require('./script_generator');

function convertPostmanToPlaywright(postmanCollectionPath, outputDir = process.cwd()) {
  try {
    const postmanCollection = JSON.parse(fs.readFileSync(postmanCollectionPath, 'utf-8'));
    const requests = postmanCollection.item || [];

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    requests.forEach((request, index) => {
      const requestName = sanitizeFileName(request.name || `request_${index}`);
      try {
        const playwrightScript = generatePlaywrightScript(request);
        const outputPath = path.join(outputDir, `${index + 1}_${requestName}.spec.js`);
        fs.writeFileSync(outputPath, playwrightScript);
      } catch (error) {
        console.error(`Failed to generate script for request ${index + 1}:`, error.message);
      }
    });
    console.log('Conversion complete. Playwright scripts have been generated.');
  } catch (error) {
    console.error('Error converting Postman collection:', error.message);
    process.exit(1);
  }
}

module.exports = { convertPostmanToPlaywright };
