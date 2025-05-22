///<reference types="cypress"/>
//Create a test suite
describe("handle alerts",function(){
    beforeEach(()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
    })

    it("hadle simple alert",function(){
        //click on 'Simple Alert' button
        cy.get('[id="alertBtn"]').click()
        //Alerts handle using cypress events  method ON
        cy.on('window:alert',(t)=>{
            //Assertions
            expect(t).to.contains('I am an alert box!')
            
        })
        
    })

    it("Handle Confirm Alert",function(){
        //Click on Button
        cy.get('[id="confirmBtn"]').click()
       
        cy.on('window:confirm',(click)=>{
            expect(click).to.equal('Press a button!')
            return true;

        })

        cy.get('[id="confirmBtn"]').click()
        cy.on('window:confirm',(click)=>{
            expect(click).to.equal('Press a button!')
            return false;

        })


    })

    
    it.only("Handle Prompt Alert",function(){
        
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('I am Happy');
        })
        cy.get('[id="promptBtn"]').click()
        cy.contains('Prompt').click();
        cy.get('#demo').should('contain', 'I am Happy');
        

    })
})