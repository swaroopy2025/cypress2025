//TO initialization the cypress commands
/// <reference types="cypress" />



//Suite Name
describe("Softsol", function () {


    /*it('Launch App', function () {
        cy.visit('https://trytestingthis.netlify.app/')
        cy.get('#option').eq(2).click()
        cy.contains('Option 3').should('be.visible')

        
    })*/
   /*it("Sample test",function(){
    cy.visit("https://www.parasoft.com/products/")
    cy.wait(5000)
    cy.get('[class="secondary"]').eq(2).click()

   })*/
  it("Cypress_File_upload",function(){
    cy.log("This is First TEst Case")

    cy.visit('https://trytestingthis.netlify.app/')
    //cy.get('#myfile').attachFile('wewe.pdf')

    cy.get('#myfile') .selectFile('cypress/fixtures/wewe.pdf')
    //cy.get('[type="range"]').invoke('value','80')
    // cy.get('input[type="range"]#a')
      cy.get('[type="range"]')
      .invoke('val', 80) // Set the value
      .trigger('input') // Trigger the input event to simulate user interaction
      .should('have.value', '80'); // Verify the value is updated
      cy.url().then(function(curl){


        cy.log(curl)
      })
      cy.url().should('eq','https://trytestingthis.netlify.app/')
      //How can u verify the title of the screen in cypress?
      //we have title() command in cypress. using that command we can verify the title
      cy.title().should('eq','Try Testing This')
      cy.wait(5000)
      
      cy.title().then(function(ashok){
        cy.log(ashok)


      })
  })

    

})
