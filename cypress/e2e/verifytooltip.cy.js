/* Cypress .trigger('mouseover') does NOT always activate pure CSS :hover behavior.

It triggers a JS event, but CSS :hover is handled by the browser UI engine — not by JS events alone.

Instead of .trigger('mouseover'), use: the javascript
cy.get('.tooltip').realHover()

But this requires installing:Install cypress-real-events
npm install cypress-real-events

Then add this inside cypress/support/e2e.js:
import "cypress-real-events/support";

 // Real hover (works with CSS hover)
    cy.get('.tooltip').realHover()

Alternative (Without Installing Anything)

If you don’t want to install realHover, you can force the CSS manually:

cy.get('.tooltip .tooltiptext')
  .invoke('css', 'visibility', 'visible')

cy.get('.tooltip .tooltiptext')
  .should('be.visible')
  .and('have.text', 'This is your sample Tooltip text')

  But this is NOT real user behavior — just a workaround.

*/

describe('Verify the tooltip', function () {

    it('Verifying the tooltip text', function () {
        cy.visit('https://trytestingthis.netlify.app/')

        // Real hover (works with CSS hover)
        cy.get('.tooltip')
            .realHover()

        // Verify tooltip text
        cy.get('.tooltip .tooltiptext')
            .should('be.visible')
            .and('have.text', 'This is your sample Tooltip text')

        /* cy.visit('https://trytestingthis.netlify.app/')

        // Trigger mouseover on tooltip container
        cy.get('.tooltip')
            .trigger('mouseover')

        // Verify tooltip text is visible and correct
        cy.get('.tooltip .tooltiptext')
            .should('be.visible')
            .and('have.text', 'This is your sample Tooltip text') */
    })

})