describe("practicing the implicit and explicit assertions", function () {

    beforeEach(function () {
        cy.log("Initiating the borwser launching")
        cy.visit("https://trytestingthis.netlify.app/")
    })

    it("Practicing the Assertions", function () {
        cy.get('h2').eq(0).invoke('text').then((text) => {
            //explicit Assertion
            expect(text).to.contains('This is your layout one');
        })

        //Implicit Assertion
        cy.get('h2').eq(0).should("have.text", "This is your layout one")
        cy.log("Bowser launched successfully");
        //Verify the current url
        cy.url().should('eql', "https://trytestingthis.netlify.app/")
    })

})