describe("performing opreations on drag and drop", function () {

    beforeEach(function () {
        cy.visit("https://trytestingthis.netlify.app/")
        cy.wait(4000)
        cy.get('h1').should('have.text', "Your Website to practice Automation Testing");
    })

    it("Verifying the drag and drop operations", function () {
        cy.get('[id="drag1"]').drag('[id="div1"]')
        cy.log("Image droped at expected location successfully")
    })
})