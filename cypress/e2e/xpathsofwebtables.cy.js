describe("practicing Xpaths for webtables",function(){
    it("Practicing the xpaths for Web Tables",function(){
        cy.visit("https://testautomationpractice.blogspot.com/#")

        //Selecting table 
        cy.xpath('//table[@name="BookTable"]').trigger('mousehover')
        //Selecting the all rows
        cy.xpath('//table//tr').trigger('mousehover')
        //Selecting the all cells
        cy.xpath('//table//tr//td').trigger('mousehover')
        //Select specific row (2nd row)
        cy.xpath('//table[@name="BookTable"]//tr[2]').trigger('mousehover')
        //Select specific column (1st column)
        cy.xpath('//table[@name="BookTable"]//tr//td[1]').trigger('mousehover')

        //Select specific cell (Row 2, Column 1)
        cy.xpath('//table[@name="BookTable"]//tr//td[1]').trigger('mousehover')
    
        /*** Dynamic XPath ***/

        //Find value based on text(Find Age of Swaroop)
        cy.xpath("//td[text()='Animesh']/following-sibling::td)[2]").trigger('mousehover')
        //Reverse case (find Name using Age)
        cy.xpath("(//td[text()='300']/preceding-sibling::td)[4]").trigger('mousehover')


    })
})