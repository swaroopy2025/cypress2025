//import {faker} from '@faker-js/faker'
describe("faker TEST SUITE", function () {
   it("faker test case", function () {
      //const firstName = faker.person.firstName()
      //const email = faker.internet.email()
      cy.visit("https://testautomationpractice.blogspot.com/")
      //cy.get('#name').type(firstName)
      //cy.get('#email').type(email)
      cy.generateUser().then((user) => {
         cy.get('#name').type(user.firstName)
         cy.get('#email').type(user.email)

      })
   })


})