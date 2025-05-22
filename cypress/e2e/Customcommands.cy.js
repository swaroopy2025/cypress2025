/// <reference types="cypress" />

//Date calander not able to inspect, single window
//Suite Name
describe("date calender",function(){
beforeEach(()=>{
    cy.handleApplicationLogin();
})    
it("handle single window calender",function(){

    //cy.get('(//i)[6]').click()
    //OR
    cy.verifyAfterLogin();


})


})