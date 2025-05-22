const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    //AutoRun Stop By default its TRUE
    //watchForFileChanges:false,

    setupNodeEvents(on, config) {
      // implement node event listeners here

      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
});
