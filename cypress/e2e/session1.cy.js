describe("handle session in cypress", () => {
    beforeEach(() => {
        cy.session("handle session", function () {
            cy.log("session started")
            cy.visit("https://testautomationpractice.blogspot.com/");
            cy.xpath('//button[@name="start"]').should('be.visible');
        });

        cy.visit("https://testautomationpractice.blogspot.com/");
    });

    it("Enter data into GUI Elements", () => {
        cy.xpath('//input[@id="name"]').type("Softsol");
        cy.xpath('//input[@id="email"]').type("softsol@gmail.com");
        cy.xpath('//input[@id="phone"]').type('7894561230');
        cy.xpath('//textarea[@id="textarea"]').type('FRMONT');
    });

    it("Enter pending values", () => {
        cy.xpath('//input[@id="male"]').check();
        cy.xpath('//input[@id="sunday"]').check();
    });
});
