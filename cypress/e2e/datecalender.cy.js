/// <reference types="cypress" />

//Date calander not able to inspect, single window
//Suite Name
describe("date calender",function(){
beforeEach(()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('[type="submit"]').click()
})    
it("handle single window calender",function(){

    //cy.get('(//i)[6]').click()
    //OR
    cy.xpath('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[5]').click()
    cy.xpath('(//i[@class="oxd-icon bi-calendar oxd-date-input-icon"])[1]').click()


})


})