describe("To perform the Toggle and scroll bar functions", function () {
 
    beforeEach(function(){
 
               // To Launch Orange HRM Application
               cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
               cy.get('[name="username"]').type("Admin")
               cy.get('[name="password"]').type("admin123")
               cy.get('[type="submit"]').click()
    })
 
    it("To perform Toggle function", function () {
 
        cy.get('[href="/web/index.php/leave/viewLeaveModule"]').click()
        cy.get('[class="oxd-switch-input oxd-switch-input--active --label-right"]').click()
    })
 
})