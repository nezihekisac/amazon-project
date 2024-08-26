const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      on('file:preprocessor', cucumber());
      return config;
    },
    screenshotsFolder: 'cypress/screenshots',
    specPattern: 'cypress/e2e/electronics.feature',
    baseUrl: 'https://www.amazon.co.uk',
    supportFile: 'cypress/support/index.js',
    reporter: 'mochawesome',
    "reporterOptions": {
    "reportDir": "cypress/reports",
    "overwrite": true,
    "html": true,
    "json": true,
    "inline": true,
    "reportTitle": "Cypress Test Report"
  }

  },
});
