describe("Handling hidden emementsin amazon.com",function(){
    beforeEach("preconditon of every test case",function(){
        cy.visit("https://www.amazon.com/")

    }) 

    it("Verify the hidden elements in cypress",function(){

        cy.get('[id="nav-link-accountList-nav-line-1"]').trigger('mouseover')
        //Using jQuery method show to handle hidden element
        cy.get('[id="nav-link-accountList-nav-line-1"]').invoke('show')
        //Click on hidden element
        cy.contains('Sign in').click();
    })
})