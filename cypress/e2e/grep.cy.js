/// <reference types="cypress" />

//Suite Name
describe("Softsol", function () {

    it("drag and drop",{tags:['@smoke','@regression']},function(){

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.wait(4000)
    })

    it("Cypress_File_upload",{tags:'@smoke'},function(){
        cy.log("This is First TEst Case")
    
        cy.visit('https://trytestingthis.netlify.app/')
        //cy.get('#myfile').attachFile('wewe.pdf')
    
    })
    
    it("faker test case",{tags:'@regression'}, function () {
        //const firstName = faker.person.firstName()
        //const email = faker.internet.email()
        cy.visit('https://testautomationpractice.blogspot.com/')
        //cy.get('#name').type(firstName)
        //cy.get('#email').type(email)
        cy.generateUser().then((user) => {
           cy.get('#name').type(user.firstName)
           cy.get('#email').type(user.email)
  
        })
    })
})