describe("Launch the browser for the scroll bar", function () {

/*   beforeEach(function () {
    cy.visit('https://trytestingthis.netlify.app/')
  })
 */
  it("To Test scrollbar", function () {
    cy.repeat(5, () => {
         cy.visit('https://trytestingthis.netlify.app/')

      // Set the range input value to 100 and trigger input
      cy.get('[type="range"]')
        .invoke('val', '100')
        .trigger('input')
        .should('have.value', '100')

    })
  })

})