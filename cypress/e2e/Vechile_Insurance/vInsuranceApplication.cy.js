//Create Intellisence
///<reference types="cypress"/>

//Vechile Insurance Apllication Test Suite
describe("vInsuranceApplication", function () {

    //Cypress Hooks
    beforeEach('Pre-conditions', function () {
        cy.fixture('vdata/vinsurancedata.json').then(function (vdata) {
            this.data = vdata;
            cy.LaunchApplication(this.data.url)
        });
    })
    //Testcase of Creating Quotation for Automobile
    it('Quote for AUTOMOBILE', function () {
        cy.QuoteForAutomobile(
            this.data.make,
            this.data.enginePerformance,
            this.data.dateOfMnf,
            this.data.seats,
            this.data.fuelType,
            this.data.price,
            this.data.lpn,
            this.data.mileage,
            this.data.firstName,
            this.data.lastName,
            this.data.dob,
            this.data.streetAddess,
            this.data.country,
            this.data.zipCode,
            this.data.city,
            this.data.occupation,
            this.data.website,
            this.data.startDate,
            this.data.insuranceSum,
            this.data.meritRating,
            this.data.damageInsurance,
            this.data.ccar,
            this.data.email,
            this.data.username,
            this.data.password,
            this.data.confirmpassword,
            this.data.comments);
    })
    //Testcase of Creating Quotation for TRUCK
    it("Quote for TRUCK", function () {
        cy.QuoteForTruck(
            this.data.make,
            this.data.enginePerformance,
            this.data.dateOfMnf,
            this.data.seats,
            this.data.fuelType,
            this.data.payload,
            this.data.totalWeight, 
            this.data.price, 
            this.data.lpn, 
            this.data.mileage, 
            this.data.firstName, 
            this.data.lastName, 
            this.data.dob, 
            this.data.streetAddess, 
            this.data.country, 
            this.data.zipCode, 
            this.data.city, 
            this.data.occupation, 
            this.data.website, 
            this.data.startDate, 
            this.data.insuranceSum, 
            this.data.damageInsurance, 
            this.data.email, 
            this.data.phone, 
            this.data.username, 
            this.data.password, 
            this.data.confirmpassword, 
            this.data.comments);
    })
    //Testcase of Creating Quotation for MOTORCYCLE
    it('Quote for MOTORCYCLE', function () {
        cy.QuoteForMotorcycle(
            this.data.make, 
            this.data.model, 
            this.data.cc, 
            this.data.enginePerformance, 
            this.data.dateOfMnf, 
            this.data.seats, 
            this.data.price, 
            this.data.mileage, 
            this.data.firstName, 
            this.data.lastName, 
            this.data.dob, 
            this.data.streetAddess, 
            this.data.country, 
            this.data.zipCode, 
            this.data.city, 
            this.data.occupation, 
            this.data.website, 
            this.data.startDate, 
            this.data.insuranceSum, 
            this.data.damageInsurance, 
            this.data.email, 
            this.data.username, 
            this.data.password, 
            this.data.confirmpassword, 
            this.data.comments);
    })
    //Testcase of Creating Quotation for CAMPER
    it('Quote for CAMPER', function () {
        cy.QuoteForCamper(
            this.data.make, 
            this.data.enginePerformance, 
            this.data.dateOfMnf, 
            this.data.seats, 
            this.data.fuelType, 
            this.data.payload, 
            this.data.totalWeight, 
            this.data.price, 
            this.data.lpn, 
            this.data.mileage, 
            this.data.firstName, 
            this.data.lastName, 
            this.data.dob, 
            this.data.streetAddess, 
            this.data.country, 
            this.data.zipCode, 
            this.data.city, 
            this.data.occupation, 
            this.data.website, 
            this.data.startDate, 
            this.data.insuranceSum, 
            this.data.damageInsurance, 
            this.data.email, 
            this.data.username, 
            this.data.password, 
            this.data.confirmpassword, 
            this.data.comments);
    })

})