const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  e2e: {
    amazonUrl: 'https://www.amazon.com/',
    specPattern: 'cypress/e2e/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
    },
  },
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports/mochawesome",
    "overwrite": false,
    "html": false,
    "json": true
  }
})
