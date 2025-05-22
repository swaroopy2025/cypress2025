// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// Alternatively you can use CommonJS syntax:
// require('./commands')

//To Use cypress xpath
require('cypress-xpath');
//Inport the Shadow DOM to indentufy the hidden element 
import 'cypress-shadow-dom';
//To Generate mochawesome report
import 'cypress-mochawesome-reporter/register';

//Handle cypress file upload
//import("cypress-file-upload");

//Handle Drag and Drop functionality
require('@4tw/cypress-drag-drop') ;

//load this module from the support file or at the top of the spec file if not using the support file. 
// You import the registration function and then call it:
//--const registerCypressGrep = require('@cypress/grep')
//--registerCypressGrep()
//(OR) Load and Register the grep feature using "require" function
require('@cypress/grep')()

//Disable the Fetch and XHR logs
before(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
});

  

  