/// <reference types="cypress" />

//Suite Name
describe("Softsol", function () {
    it("drag and drop",function(){

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.wait(4000)
       // cy.xpath('//div[@id="draggable"]').drag('[class="ui-widget-header ui-droppable"]')
        
        cy.xpath('//div[@id="draggable"]').drag('[id="droppable"]',{force:true})
        cy.get('[id="slider-range"]').invoke('style="left: 50%;"')


    })



})