
describe("Handling the Multitab", function () {
    beforeEach("Peecondition for every test execution", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");

    })

    //Test Case 1 removing the target attr  -but there is no target attribute to handle multitab in HTML code 
    it("Approach 1 - Removing the target attribute", function () {

        // Remove target="_blank" to open in same tab
        cy.contains("button", "New Tab")
            .invoke("removeAttr", "target")
            .click();

        // Validate navigation happened
        //cy.url().should("include", "sdetqa");

        // Validate page content
        cy.contains("SDET-QA Blog").should("be.visible");

    });

    it.only("Handle New Tab button", () => {

        // Stub window.open
        cy.window().then((win) => {
            cy.stub(win, "open").as("windowOpen");
        });

        // Click button
        cy.contains("button", "New Tab").click();

        // Verify window.open was called with correct URL
        cy.get("@windowOpen").should("be.calledWith", "https://www.pavantestingtools.com/");

        // Now manually visit the URL in same tab
        cy.visit("https://www.pavantestingtools.com/");
        cy.wait(3000)
        // Validate navigation
        //cy.url().should("contain", "pavantestingtools");
        //cy.url().should("eq","https://www.pavantestingtools.com/")

        /* 
        When i ask chatGPT and Copilot. its suggested to install xpath plug in. already i installed, 
        still i am getting the some issue in test runner. at finally we use CSS selector in place of XPATH now its works fine 
        Avoid XPath (use CSS selectors only). If you don’t want the plugin, rewrite the selector using cy.get():*/

        /* cy.origin('https://www.pavantestingtools.com', () => {
            Cypress.require('cypress-xpath'); // ensure xpath is available in origin
            cy.xpath('(//h2[@class="title"])[2]').should('contain.text', 'Search This Blog');

        }); */


        cy.origin('https://www.pavantestingtools.com', () => { 
            cy.get('h2.title').eq(1) // eq(1) = second element 
              .should('contain.text', 'Search This Blog'); 
            });
    });
})