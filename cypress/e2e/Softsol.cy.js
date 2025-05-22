//TO initialization the cypress commands
/// <reference types="cypress" />


//Suite Name
describe("Softsol", function () {

    beforeEach(function () {
        //Launch App
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('[name="username"]').type('Admin')
        cy.get('[type="password"]').type('admin123')
        //cy.xpath('//a[normalize-space()="Create a New TAR"]').click()
        cy.get('[type="submit"]').click()

    })
    afterEach(function () {
        cy.get('[class="oxd-userdropdown-name"]').click()
        cy.wait(5000)
        cy.get('[href="/web/index.php/auth/logout"]').click()
        cy.wait(5000)

    })

    it('Launch App', function () {

        cy.xpath('(//a[@href="/web/index.php/admin/viewAdminModule"])[1]').click()
       
        cy.xpath('(//button[@type="button"])[6]').click()
        cy.xpath('(//div[@class="oxd-select-text oxd-select-text--active"])[1]').click().type('{downarrow}{enter}')
        //cy.get('.buttons button').eq(2).should('have.text', 'Submit');
        cy.get('[placeholder="Type for hints..."]').type('Amelia  Brown')
        //cy.get('[placeholder="Type for hints..."]').type('{downarrow}{enter}')
        cy.wait(5000)
        cy.xpath('(//div[@class="oxd-select-text-input"])[2]').click().type('{downarrow}{enter}')
        cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]').type('YSREDDY')
        cy.xpath('(//input[@type="password"])[1]').type('swaroop123')
        cy.xpath('(//input[@type="password"])[2]').type('swaroop123')
        cy.get('[type="submit"]').click()

    })

    it('Launch App', function () {

        cy.xpath('(//a[@href="/web/index.php/admin/viewAdminModule"])[1]').click()
        cy.xpath('(//button[@type="button"])[6]').click()
        //cy.xpath('(//div[@class="oxd-select-text oxd-select-text--active"])[1]').eq(0).should('have.text','Admin');
        cy.xpath('(//div[@class="oxd-select-text oxd-select-text--active"])[1]').click().type('{downarrow}{enter}')
        //cy.get('.buttons button').eq(2).should('have.text', 'Submit');
        cy.get('[placeholder="Type for hints..."]').type('Amelia  Brown')
        //cy.get('[placeholder="Type for hints..."]').type('{downarrow}{enter}')
        cy.wait(5000)
        cy.xpath('(//div[@class="oxd-select-text-input"])[2]').click().type('{downarrow}{enter}')
        cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]').type('YSREDDY')
        cy.xpath('(//input[@type="password"])[1]').type('swaroop123')
        cy.xpath('(//input[@type="password"])[2]').type('swaroop123')
        cy.get('[type="submit"]').click()

    })
    it('Launch App', function () {
        cy.xpath('(//a[@href="/web/index.php/admin/viewAdminModule"])[1]').click()
        cy.xpath('(//button[@type="button"])[6]').click()
        //cy.xpath('(//div[@class="oxd-select-text oxd-select-text--active"])[1]').eq(0).should('have.text','Admin');
        cy.xpath('(//div[@class="oxd-select-text oxd-select-text--active"])[1]').click().type('{downarrow}{enter}')
        //cy.get('.buttons button').eq(2).should('have.text', 'Submit');
        cy.get('[placeholder="Type for hints..."]').type('Amelia  Brown')
        //cy.get('[placeholder="Type for hints..."]').type('{downarrow}{enter}')
        cy.wait(5000)
        cy.xpath('(//div[@class="oxd-select-text-input"])[2]').click().type('{downarrow}{enter}')
        cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]').type('YSREDDY')
        cy.xpath('(//input[@type="password"])[1]').type('swaroop123')
        cy.xpath('(//input[@type="password"])[2]').type('swaroop123')
        cy.get('[type="submit"]').click()

    })

})
