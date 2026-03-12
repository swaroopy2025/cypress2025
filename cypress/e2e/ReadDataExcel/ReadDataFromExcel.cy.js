//Create Intellisence
///<reference types="cypress"/>

//Create the test suite
describe("verifying e-com application", function () {

    it("Registering e-com application", function () {

        const filePath = "cypress/fixtures/ExcelTestData.xlsx";
        
        cy.task("parseExcel", { filePath }).then((excelData) => {

            excelData.forEach((row) => {
                cy.visit("https://rahulshettyacademy.com/client/#/auth/login")
                cy.xpath("//a[text()='Register']").click()
                /* cy.xpath('//input[@id="firstName"]').type("Ashok")
                cy.xpath('//input[@id="lastName"]').type("Kumar")
                cy.xpath('//input[@id="userEmail"]').type('ashokkumar2029@gmail.com')
                cy.xpath('//input[@id="userMobile"]').type('8790303698')
                cy.xpath('//select[@formcontrolname="occupation"]').select('Engineer')
                cy.xpath('(//input[@type="radio"])[1]').check({ force: true })
                cy.xpath('//input[@id="userPassword"]').type('Ashok@2029')
                cy.xpath('//input[@id="confirmPassword"]').type('Ashok@2029')
                cy.xpath('//input[@type="checkbox"]').check({ force: true })
                cy.xpath('//input[@id="login"]').click()

                cy.xpath('//h1[text()="Account Created Successfully"]', { timeout: 5000 })
                    .should('be.visible')
                    .and('have.text', 'Account Created Successfully');
                cy.xpath('//button[text()="Login"]').click()

                cy.xpath('//input[@id="userEmail"]').type('ashokkumar2029@gmail.com')
                cy.xpath('//input[@id="userPassword"]').type('Ashok@2029')
                cy.xpath('//input[@id="login"]').click()
                cy.xpath('(//button[@class="btn btn-custom"])[4]').click() */
                cy.xpath('//input[@id="firstName"]').type(row.FirstName)
                cy.xpath('//input[@id="lastName"]').type(row.LastName)
                cy.xpath('//input[@id="userEmail"]').type(row.Email)
                cy.xpath('//input[@id="userMobile"]').type(row.PhNum)
                cy.xpath('//select[@formcontrolname="occupation"]').select('Engineer')
                cy.xpath('(//input[@type="radio"])[1]').check({ force: true })
                cy.xpath('//input[@id="userPassword"]').type(row.Password)
                cy.xpath('//input[@id="confirmPassword"]').type(row.ConfirmPassword)
                cy.xpath('//input[@type="checkbox"]').check({ force: true })
                cy.xpath('//input[@id="login"]').click()

                cy.xpath('//h1[text()="Account Created Successfully"]', { timeout: 5000 })
                    .should('be.visible')
                    .and('have.text', 'Account Created Successfully');
                cy.xpath('//button[text()="Login"]').click()

                cy.xpath('//input[@id="userEmail"]').type(row.userEmail)
                cy.xpath('//input[@id="userPassword"]').type(row.userPassword)
                cy.xpath('//input[@id="login"]').click()
                cy.xpath('(//button[@class="btn btn-custom"])[4]').click()

            })
        })

    })
})