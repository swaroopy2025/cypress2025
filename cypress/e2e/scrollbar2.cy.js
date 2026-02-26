describe("Handle Slider", function () {

  beforeEach(() => {
    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.url().should('include', 'testautomationpractice')
  })



  /*Correct Way to Handle jQuery UI Slider in Cypress

You must simulate mouse drag events.

This website:

👉 https://testautomationpractice.blogspot.com/

Uses jQuery UI Slider (not normal <input type="range">).

In jQuery UI slider:

Value is controlled by JavaScript

Changing style="left: 50%" only moves UI

It does NOT update internal value

It does NOT trigger price calculation


*/

  it("Move the slider properly", function () {

    // Scroll to slider
    cy.get('#slider-range').scrollIntoView()

    // Move first handle
    cy.xpath('(//span[@class="ui-slider-handle ui-corner-all ui-state-default"])[1]')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { style: 10 })  // adjust value
      .trigger('mouseup', { force: true });

    // Move second handle
    cy.xpath('(//span[@class="ui-slider-handle ui-corner-all ui-state-default"])[2]')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 75 })  // adjust value
      .trigger('mouseup', { force: true });

  });

});