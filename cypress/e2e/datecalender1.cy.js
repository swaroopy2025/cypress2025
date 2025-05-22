/// <reference types="cypress" />

//Date calander not able to inspect, single window
//Suite Name
describe('Select a date test', () => {
    beforeEach(() => {
      // Replace with your local or hosted URL if applicable
      cy.visit('https://trytestingthis.netlify.app/'); 
    });
  
    it('should select a specific date from the date input', () => {
      // Select the date input by ID and type in a date
      cy.get('input#day')
        .should('have.attr', 'type', 'date') // Verify it's a date input
        .type('2025-05-15') // Enter a date in yyyy-mm-dd format
        .should('have.value', '2025-05-15'); // Confirm the value was set
    });
  });
  