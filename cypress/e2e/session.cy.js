
describe("handle session in cypress", function () {
    beforeEach("before it executes this", () => {
        cy.session("handle session", function () {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            cy.xpath('//input[@name="username"]').type("Admin")
            cy.xpath('//input[@name="password"]').type('admin123')
            cy.xpath('//button[text()=" Login "]').click()
            // Wait until login is complete
            cy.url().should('include', '/dashboard')
        })
        
        // 👇 Add this line to load the actual page after restoring session
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    })

    it('Test Case 1', function () {
        //Click on Admin in left menu
        cy.xpath('//span[text()="Admin"]').should('be.visible').click();
        //Click on 4th checkbox
        cy.xpath('(//i[@class="oxd-icon bi-check oxd-checkbox-input-icon"])[4]').click({force:true})
        //Click on edit icon
        cy.xpath('(//i[@class="oxd-icon bi-pencil-fill"])[4]').click()
        //click on checkbox in edit window
        cy.xpath('//i[@class="oxd-icon bi-check oxd-checkbox-input-icon"]').click({force:true})
        //Enter Password
        cy.xpath('(//input[@type="password"])[1]').type('admin123')
        //Enter confirm Password
        cy.xpath('(//input[@type="password"])[2]').type('admin123')
        //click on save button
        cy.xpath('//button[@type="submit"]').click()
        //verify error message
        cy.xpath('//div[@class="oxd-toast-container oxd-toast-container--bottom"]').should('be.visible')
    })
    it('TEst Case 2', function () {
        //click on PIM in left menu
        cy.xpath('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[2]').should('be.visible').click();
        //click on ADD button
        cy.xpath('(//button[@type="button"])[5]').click()
        //Enter First Name
        cy.xpath('//input[@name="firstName"]').type('Santhosh')
        //Enter Middle Name
        cy.xpath('//input[@name="middleName"]').type('Kovuru')
        //Enter Last Name
        cy.xpath('//input[@name="lastName"]').type('K')
        //Enter EMP ID 
        var eid = "1982"
        cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]').type(toString(eid) + 1)
        //check the toggle 'Create Login Details'
        cy.xpath('//span[@class="oxd-switch-input oxd-switch-input--active --label-right"]').click({force:true})
        //Enter Username
        cy.xpath('(//input[@class="oxd-input oxd-input--active"])[3]').type('Santhosh2026')
        //Enter Password
        cy.xpath('(//input[@type="password"])[1]').type('Santhosh@2026')
        //Enter confirm Password
        cy.xpath('(//input[@type="password"])[2]').type('Santhosh@2026')
        //Click on Save button
        cy.xpath('//button[@type="submit"]').click()
    })

})