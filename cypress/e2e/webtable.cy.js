//IntelliSense is available for Cypress. It offers intelligent code suggestions directly in your IDE while writing tests.
///<reference types="cypress"/>


//Create Test Suite
describe("Handle web tables",function(){
    //Pre-Condition
    beforeEach(()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.url().should('eq','https://testautomationpractice.blogspot.com/')
    })
    //Test Case 1 verifying the column heder
    
    it("Handling Web Tables TC 1",function(){
        cy.log("Test Case 1")
        cy.get('[name="BookTable"]').contains('td','Javascript').should('have.text','Javascript')
        // cy.get('[name="BookTable"]').then(()=>{
        //     cy.xpath('//th[normalize-space()="BookName"]').should('have.text','BookName')
        // })
    })
    
    //Test Case 2 verifying the specific value in a table
    it("Handling Web Tables TC 2",function(){
        cy.log("Test Case 2")
        cy.get('tbody>tr:nth-child(6)>td:nth-child(4)').should('have.text','2000')
        cy.get('tbody>tr:nth-child(6)>td:nth-child(4)').should('contain','2000')        
    })
    
    //Test Case 3 verifying the data in Row 4 and column 4
    it("Handling Web Tables TC 3",function(){
        cy.log("Test Case 3")
        cy.xpath("(//td[contains(text(),'300')])[2]").contains('td','300').should('have.text','300')
        
    })

    it("Handling Web Tables TC 4",function(){
        cy.xpath('//table[@name="BookTable"]').contains('td','Javascript').should('have.text','Javascript')

        cy.get('#taskTable').contains('tr td','0.48 MB/s').eq('0').click()
        
    })
    it("Handling Web Tables TC",function(){
        cy.get('table tbody tr td ').each((text)=>{
            cy.wrap(text).contains('Selenium').should('have.text','Selenium')

        })
    })
    it.only("Handling Web Tables TC",function(){
        cy.get('table tbody tr').each(($row, index) => {
            cy.wrap($row).within(() => {
                cy.get('td').eq(2).then(($cell) => { // Checking 'Subject' column (Index 2)
                    if ($cell.text().trim() === 'Selenium') {
                        cy.log(`Selenium found in row index: ${index + 1}`);
                    }
                });
            });
        });
    })


})