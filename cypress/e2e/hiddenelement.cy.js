///<reference types="cypress"/>
//Test Suite
describe('handle hidden elements',function(){
    //Create the per-conditions using cookies
    beforeEach(()=>{
        cy.visit('https://www.amazon.in/')
    })

    //Create Test Case
    it('Handle hidden elements',()=>{
        cy.get('[id="nav-link-accountList"]').invoke('show')
        cy.contains('Sign in').click({force: true})
    })
    it('Handle hidden elements',()=>{
        cy.get('[id="nav-link-accountList"]').trigger('mouseover')
        cy.get('[class="nav-action-inner"]').should('contain','Sign in')
        cy.contains('Sign in').click({force: true})
    })
})