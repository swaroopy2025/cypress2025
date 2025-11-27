///First step of Cypress
//We have to initialize the intellisemce

///<reference types="cypress"/>

//Test Suite
describe("this test suite, using describe block",function(){

    //it block- nothing but test case
    it("TC1",function(){
        //How to launch the website
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.get('span.oxd-text.oxd-text--span.oxd-main-menu-item--name').contains('PIM').click();
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('be.visible')
    })
    it("tc2",function(){


    })
    it("tc3",function(){

    })
    it("tc4",function(){

    })

})



