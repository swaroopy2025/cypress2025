describe("Handle web tables", function () {
    //Pre-Condition
    beforeEach(() => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.url().should('eq', 'https://testautomationpractice.blogspot.com/')
    })
    it("Handle the scrollbar",function(){
        //cy.get('//div[@id="slider-range"]').invoke('attr','style','left: 30%')
        cy.xpath('(//span[@class="ui-slider-handle ui-corner-all ui-state-default"])[1]').invoke('attr','style','left: 50%').trigger('input',{force:true})
        cy.xpath('(//span[@class="ui-slider-handle ui-corner-all ui-state-default"])[2]').invoke('attr','style','left: 90%').trigger('input',{force:true})
        cy.get('.ui-slider-range').invoke('attr','style','left: 50%; width: 40%;').trigger('change',{force:true});
    })

});