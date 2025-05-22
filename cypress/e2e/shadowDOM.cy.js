///<reference types="cypress"/>
describe("handle shadow", function () {
    beforeEach(() => {
        cy.visit('https://testautomationpractice.blogspot.com/')
    })
    it("handle shadow DOM", function () {
        cy.get('#shadow_host').shadow().find('input[type="text"]').type('Hello Shadow DOM!');

    })
})
