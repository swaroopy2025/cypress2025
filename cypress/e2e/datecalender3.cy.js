/// <reference types="cypress" />

//Date calander able to inspect, Multi window in table format
//Suite Name
describe('Select a date test', () => {
    beforeEach(() => {
      // Replace with your local or hosted URL if applicable
      cy.visit('https://qa-practice.netlify.app/'); 
    });
  
    it('should select a specific date from the date input', () => {
        cy.get('[href="/calendar"]').click()
        cy.get('#range-date-calendar').click()
        // Ensure the calendar is visible
        cy.get('.daterangepicker').should('be.visible');
                
        //click on 23 available date from left side calender
        cy.xpath("(//td[contains(text(),'23')])[1]").click()
        //click on 25 available date from left side calender
        cy.get('.drp-calendar.left .calendar-table td.available').contains(/^25$/).click();

        //
        // (Optional) Click apply if needed
        cy.get('.drp-buttons .applyBtn').click();

        // Assert the selected value includes '25'
        cy.get('input[name="daterange"]').should('contain.value', '25');
      
    });
    it("hadle date picker single window",()=>{
        cy.get('.datepicker-days table>tbody>tr:nth-child(2)>td:nth-child(3)').click()
        cy.get('.datepicker-days table>tbody>tr:nth-child(2)').contains('6').click()
    })
  });