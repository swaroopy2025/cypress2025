const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',

  //If you want one report per spec file, modify cypress.config.js.Each spec file gets its own report.Files won’t be replaced
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,          // IMPORTANT
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  
  e2e: {

    //For Recording(by default it is false).Open Cypress with npx cypress open.Open a test file.You’ll see the “Add Command” button in the runner
    //experimentalStudio: true

    //AutoRun Stop By default its TRUE
    //watchForFileChanges:false,

    setupNodeEvents(on, config) {
      // implement node event listeners here

      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
  // Set the preferred editor
  env: {
    CYPRESS_INTERNAL_ENV: 'development'
  }
});
