describe("Launch the browser for the scroll bar", function () {
 
    beforeEach(function () {
 
        cy.visit('https://trytestingthis.netlify.app/')
    })
 
    it("To Test scrollbar", function () {
 
        cy.get('[type="range"]').invoke('val', '70').trigger('input)').should('have.value', '70')
        // to get the url of the page
        cy.url().then(function (curl) {
 
            cy.log(curl)
        })
        // to get the title of the url
        cy.title().then(function (cTitle) {
 
            cy.log(cTitle)
        })
 
    })
 
})