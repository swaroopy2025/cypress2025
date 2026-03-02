describe("verifying the tooltips", function () {
    beforeEach("Precondition of your testcase", function () {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get('[class="title"]').eq(0).invoke('text').then((t) => {

            expect(t.trim()).to.equals('Automation Testing Practice');
            cy.log("Browser is launched successfully");
        })
    })
    //By default cypress will handle the simple alerts by click on OK button.
    // This is will happen in the backend and will not be visible during the execution.
    it("verifying the simple alert message", function () {
        cy.log("Test scenario execution is started");
        //Click on button.alert popup is getting
        cy.get('[id="alertBtn"]').click();
        //handling window alert by using fire event method ON
        cy.on('window:alert', (t) => {
            //explicit assertions
            expect(t).to.contains('I am an alert box!');
        })


    })
    //Confirmation alert cypress by default handles the OK button in alert message
    it('verifying the conformation alerts', function () {
        cy.log("Performing the button action")
        //Click on confirm button
        cy.get('[id="confirmBtn"]').click();
        //handle the conformation alert message by click on OK button
        cy.on('window:confirm', (t) => {
            expect(t).to.equal('Press a button!');
            expect(t).to.contains('Press a button!');

        })
        cy.log("OK button clicked successfully in confirmation popup message")

    });

    it("validating the confirm alert by clicking on Cancel button on alert message", function () {
        cy.log("Performing the button action")

        // Handle confirm alert BEFORE clicking
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('Press a button!');
            return false; // Clicks Cancel
        });

        // Click on confirm button
        cy.get('#confirmBtn').click();

        // Verify result (use contain instead of exact match)
        //cy.get('#result')
          //  .should('be.visible')
           // .and('contain', 'Cancel');
    })

    it("Verifying the prompt alerts",function(){
        cy.window().then((test)=>{
            cy.stub(test,'prompt').returns("I am prompt alert")
        })
        //clicking on button 
        cy.get('[id="promptBtn"]').click()

    })

});