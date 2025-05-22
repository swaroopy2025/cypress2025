/// <reference types="cypress" />

//Date calander not able to inspect, single window
//Suite Name
describe("date calender", function () {
    beforeEach(() => {
        cy.visit("https://www.goibibo.com/")
        cy.get('.logSprite').click()

    })
    it("handle double window calender", function () {

        cy.get('.sc-12foipm-4.czGBLf.fswWidgetTitle').eq(0).click({ force: true })
        cy.get('.DayPicker-Month').eq(0).find('.fsw__date').each((e1) => {

            const data = e1.text()
            cy.log(data)
            if (data === '25') {
                cy.wrap(e1).click({ force: true })
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // You can log the error or check its message
                    if (err.message.includes('Script error')) {
                        return false; // prevents Cypress from failing the test
                    }
                });

            }
        })


    })


})