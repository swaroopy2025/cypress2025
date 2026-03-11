describe("Handle web tables", function () {
    //Pre-Condition
    beforeEach(() => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.url().should('eq', 'https://testautomationpractice.blogspot.com/')
    })
    it("Verifying the price value if text matched expected value", function () {
         cy.get('table >tbody> tr>td:nth-child(3)').each(($el, index) => {
            const text = $el.text();
            if (text.includes("Javascript")) {
                cy.get('table >tbody> tr>td:nth-child(4)').eq(index).then(function(price) {
                    var p = price.text();
                    cy.log('Javascript with price 300 found')
                    expect(p.trim()).to.equal('300')
                    expect(p.trim()).not.to.equal('1000')
                    //expect(jsPrices).to.have.members(['300', '1000'])
                })
            }



        }) ;
        /* cy.get('table tbody tr').each(($row) => {

            cy.wrap($row).within(() => {

                cy.get('table tbody tr td').eq(2).invoke('text').then((subject) => {

                    if (subject.trim() === 'Javascript') {

                        cy.get('table tbody tr td').eq(3).invoke('text').then((price) => {

                            if (price.trim() === '300') {
                                cy.log('Javascript with price 300 found')
                                expect(price.trim()).to.equal('300')
                            }

                        })

                    }

                })

            })

        })*/
    }) 

})