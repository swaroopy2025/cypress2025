// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/*** import statements must be at the top of the file.***/
/*If you want to use the elements from your Page Object class inside Cypress Custom Commands, the process is:

1️⃣ Import the Page Object
2️⃣ Create object of the class
3️⃣ Call its methods inside Cypress.Commands.add() */
import VInsurancePageObjects from "../support/classobjects.js";
//Created the object of the class
const vinsurance = new VInsurancePageObjects()

import { faker } from '@faker-js/faker';
import { timeout } from 'rxjs';

Cypress.Commands.add("generateUser", () => {
    return {
        firstName: faker.person.firstName(),
        email: faker.internet.email(),
    };

})


/*Launching eTAR Application*/
Cypress.Commands.add("LauncheTARApplication", () => {
    cy.log("Launching Application")
    //Open Application
    cy.visit("http://sysdev.softsol.com/")
    //Verifying Login Button
    cy.get('input[value="Login"]').should('be.visible')
    //Clicking Login Button
    cy.get('input[value="Login"]').click()
    //Clicking "Medical Services" link
    cy.get('#MedicalService').click()
    cy.wait(3000)
    //Verifying TAR Menu Title On Screen
    cy.get('tbody tr td h2').should('be.visible')

})
/*Clicking Create A New TAR Link*/
Cypress.Commands.add("ClickOnCreatingANEWTARLink", () => {
    //Clicking "Creating a NEW TAR" link On Screen
    cy.get("tbody>tr:nth-child(2)>td>ul>li:nth-child(1)>a").click()
    cy.wait(3000)
})
/*Providing Provider Information*/
Cypress.Commands.add("ProvidingProviderInformationScreen", () => {
    /*Providing data into Provider Information Screen*/

    //Verifying Providing Information Title On Screen
    cy.get('tbody tr td h2').should('have.text', 'Provider Information')
    //Enter data into "TAR Completed By" field
    cy.get('input[name="txtTARCompBy"]').type("Srinivas")
    //Clicking Continue Button
    cy.get('input[name="Submit"]').click()
    cy.wait(3000)
})
/*Providing Patient Information*/
Cypress.Commands.add("ProvidingPatientInformationScreen", () => {
    /*Providing data into Patient Information Screen*/

    //Verifying Title of Patient Information screen
    cy.get('div h2').should('have.text', 'Patient Information ')
    //Enter data into Recipient ID# field
    cy.get('input[name="MedicalID"]').type('19871987S')
    //Enter data into Patient Last Name field
    cy.get('input[name="PatLstNme"]').type("Karthick")
    //Enter data into Patient First Name field
    cy.get('input[name="PatFrstNme"]').type("Panda")
    //Enter data into DOB field in MMDDYYYY format
    cy.get('input[name="PatDOB"]').type('12121987')
    //Select  Male Radio Button
    cy.get("input[value='M'][name='Gender']").first().check()
    //Clicking on Continue button in Patient Information Screen
    cy.get('input[name="Submit"]').click()
    cy.wait(3000)
    //Verifying the "TAR Servcies" screen
    cy.get("div div h2").should('have.text', 'TAR Services ')
})
/*Providing Service Code*/
Cypress.Commands.add("ProvidingServiceCodeInTARServicesScreen", () => {
    /*Enter Service Code In TAR Services Screen*/

    //Enter data into Service Code Field
    cy.get('input[name="ServiceCode"]').type('2')
    //Clicking on "Find Service Category(s)" button
    cy.get('input[type="button"]').click()
    cy.wait(3000)
    //Verifying Title of the screen in Inpatient Services screen
    cy.get('tbody tr td h2').should('have.text', 'Inpatient Services')
})
/*Providing Service Information*/
Cypress.Commands.add("ProvidingDataIntoServiceInformationScreen", () => {
    /*Providing data into Service Information Screen*/

    //Verifying the Prepopulated value on Servcie Code Field
    cy.get('Input[alt="Service Code"]').should('have.value', '2')
    //cy.get('Input[alt="Service Code"]').contains('2')
    //Enter Total Units on Units field
    cy.get('Input[alt="Total Units"]').type('10')
    //Enter From Date in MMDDYYYY format
    cy.get('Input[alt="From Date"]').type('10102009')
    //Enter Through Date in MMDDYYYY format
    cy.get('Input[alt="Through Date"]').type('11102009')
    //Enter Admit Date in MMDDYYYY format
    cy.get('Input[alt="Admit Date"]').type('10102009')
    //Enter Discharge Date in MMDDYYYY format
    cy.get('Input[alt="Discharge Date"]').type('11152009')
    //Select ICD-CM Type in a dopdown field
    cy.get('select[name="Serv_ICDCodeType"]').select('ICD-10')
    //Enter ICD Code with decimal 
    cy.get('input[alt="I C D 9 Code"]').type('A98.8')
    //Enter Date Of Onset Date in MMDDYYYY format
    cy.get('input[alt="Date of Onset"]').type('10102009')
    //Clicking Continue button in Service Information screen
    cy.get('input[alt="Continue"]').click()
    cy.wait(4000)

})
/*Clicking Submit TAR Link*/
Cypress.Commands.add("ClickingOnSubmitTARLinkInTARServiceScreen", () => {
    //Verify the screen redirecting to TAR Services screen
    cy.get("div div h2").should('have.text', 'TAR Services ')
    //Clicking the Submit TAR link in TAR Services screen
    cy.xpath("//a[@href='http://sysdev.surge.com/cgi-forte/forteisapi.dll??serviceName=softsolwebservice&templateName=SetAttachmentsInd.htm&CurrentPage=Serv_Sel']").click()
    cy.wait(4000)
})
/*Handling Uncaught Exception*/
Cypress.Commands.add("HandlingUncaughtExceptionAfterClickingOnSubmitTARLink", () => {
    cy.on('uncaught:exception', (err, runnable) => {
        expect(err.message).to.include('Redirect is not defined')

        // using mocha's async done callback to finish
        // this test so we prove that an uncaught exception
        // was thrown
        //done()

        // return false to prevent the error from
        // failing this test
        return false

    })
})
/*Submit TAR*/
Cypress.Commands.add("SubmitTARInAttachmentsSubmissionScreen", () => {
    //Select the Radio button for Attachment(s) Submission
    cy.xpath("//input[@value='2']").check()
    //Clicking on Continue button in "Treatment Authorization Request" screen for Attachment(s) Submission
    cy.get('#submit1').click()
    cy.wait(3000)
})
/*Verify TAR Status and Success Label Message*/
Cypress.Commands.add("VerifyingTARStatusAndSuccessLabelMessage", () => {
    //Verify the success label message in "Treatment Authorization Request" screen
    cy.get('tbody p:nth-child(1) span:nth-child(1)').should('have.text', 'Thank You! Your TAR has been successfully submitted.')
    //Veryfying the Status of TAR
    //cy.get('body > div:nth-child(3) > div:nth-child(2) > form:nth-child(6) > table:nth-child(9) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(10) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(3) > span:nth-child(1)').should('have.text', 'In Review')
})
/*Adding Another service*/
Cypress.Commands.add("AddingAnotherServiceCodeInTARServicesScreen", () => {
    //Enter data into Service Code Field
    cy.get('input[name="ServiceCode"]').type('3')
    //Clicking on "Find Service Category(s)" button
    cy.get('input[type="button"]').click()
    cy.wait(3000)
})
/*Adding Another Service into Service Information Screen*/
Cypress.Commands.add("AddingAnotherServiceIntoServiceInformationScreen", () => {

    //Verifying the Prepopulated value on Servcie Code Field
    cy.get('Input[alt="Service Code"]').should('have.value', '3')
    //Enter Total Units on Units field
    cy.get('Input[alt="Total Units"]').type('10')
    //Enter From Date in MMDDYYYY format
    cy.get('Input[alt="From Date"]').type('10102009')
    //Enter Through Date in MMDDYYYY format
    cy.get('Input[alt="Through Date"]').type('11102009')
    //Enter Admit Date in MMDDYYYY format
    cy.get('Input[alt="Admit Date"]').type('10102009')
    //Enter Discharge Date in MMDDYYYY format
    cy.get('Input[alt="Discharge Date"]').type('11152009')
    //Select ICD-CM Type in a dopdown field
    cy.get('select[name="Serv_ICDCodeType"]').select('ICD-10')
    //Enter ICD Code with decimal 
    cy.get('input[alt="I C D 9 Code"]').type('A98.8')
    //Enter Date Of Onset Date in MMDDYYYY format
    cy.get('input[alt="Date of Onset"]').type('10102009')
    //Clicking Continue button in Service Information screen
    cy.get('input[alt="Continue"]').click()
    cy.wait(3000)
    //Verify the screen redirecting to TAR Services screen
    cy.get("div div h2").should('have.text', 'TAR Services ')
})
/*Capturing Service Indicator, code and Tar Number*/
Cypress.Commands.add("CaptureServiceAndTAR", () => {
    cy.get(':nth-child(9) > tbody > :nth-child(2) > [width="40%"] > .content').then((ele) => {
        cy.xpath("//td[@valign='top']//span[@class='subtitle']").then((tar) => {
            cy.get('tbody> :nth-child(2)> [width="20%"]> .content').then((no) => {
                // Extract text from 'ele' and 'tar
                var text = ele.text();
                var tarText = tar.text();
                var code = no.text();
                //Trim the spaces
                var trimtar = tarText.trim()
                var scode = code.trim()
                // Get the substring of 'ele' and use 'tar' as is(substring() is a JavaScript string method that extracts part of a string)
                //string.substring(startIndex, endIndex)
                let sindicator = text.substring(0, 13);
                // Log both values for debugging purposes
                cy.log("Service_Indicator: " + sindicator);
                cy.log("TARID: " + trimtar);
                cy.log("service code", +scode);
                // Write both 'oNum' and 'tarText' in a single line separated by a space
                //cy.writeFile("orderNumbers.txt", oNum + "" + tarText + "\n", { flag: 'a+' });
                //cy.writeFile("orderNumbers.txt", oNum + "\n", { flag: 'a+' })
                //By using template literals writing into txt file
                cy.writeFile("orderNumbers.txt", `${sindicator}, ${scode}, ${trimtar}\n`, { flag: 'a+' });
            })
        })
    });

})

//Just Practice
Cypress.Commands.add("handleApplicationLogin", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('[type="submit"]').click()
})
//Just Practice
Cypress.Commands.add("verifyAfterLogin", () => {
    cy.xpath('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[5]').click()
    cy.xpath('(//i[@class="oxd-icon bi-calendar oxd-date-input-icon"])[1]').click()
})

/***************************Vechile Insurance******************************** *//
/*If you want to use the elements from your Page Object class inside Cypress Custom Commands, the process is:

1️⃣ Import the Page Object
2️⃣ Create object of the class
3️⃣ Call its methods inside Cypress.Commands.add() */

/****  Launch Vehicle Insurance Application  ****/
Cypress.Commands.add("LaunchApplication", (url) => {
    cy.visit(url)
})
/***** Creating Quotation for Automobile  *****/
Cypress.Commands.add("QuoteForAutomobile", (
    make,
    enginePerformance,
    dateOfMnf,
    seats,
    fuelType,
    price,
    lpn,
    mileage,
    firstName,
    lastName,
    dob,
    streetAddess,
    country,
    zipCode,
    city,
    occupation,
    website,
    startDate,
    insuranceSum,
    meritRating,
    damageInsurance,
    ccar,
    email,
    username,
    password,
    confirmpassword) => {
    /*******click on AUTOMOBILE from Main Menu ******/
    //cy.get('#nav_automobile').click()
    vinsurance.clickAutomobileMainMenu().click()
    //selecting the Make value from the Dropdown
    //cy.xpath('//select[@id="make"]').select(make)
    vinsurance.selectMakeValue().select(make)
    //Enter Engine Performance[Kw] must be 1 to 2000
    //cy.xpath('//input[@id="engineperformance"]').type(enginePerformance)
    vinsurance.enterEnginePerformance().type(enginePerformance)
    //Verifying the Engine Performance[Kw] error message if user enters more than 2000
   // cy.xpath('//span[text()="Must be a number between 1 and 2000"]').should('not.be.visible')
    vinsurance.verifyEnginePerformance().should('not.be.visible')
    //Enter Date of Manufacture
    //cy.xpath('//input[@id="dateofmanufacture"]').type(dateOfMnf)
    vinsurance.enterDateOfManf().type(dateOfMnf)
    //Select No of Seats
    //cy.xpath('//select[@id="numberofseats"]').select(seats)
    vinsurance.enterNoOfSeats().select(seats)
    //Select Fuel Type
    //cy.xpath('//select[@id="fuel"]').select(fuelType)
    vinsurance.selectFuelType().select(fuelType)
    //Enter List Price[$] between 500 to 100000
    //cy.xpath('//input[@id="listprice"]').type(price)
    vinsurance.enterListPrice().type(price)
    //Enter License Plate Number below 10 characters
    //cy.xpath('//input[@id="licenseplatenumber"]').type(lpn)
    vinsurance.enterLicensePlateNumber().type(lpn)
    //Enter Annual Mileage [mi] between 100 to 100000
    //cy.xpath('//input[@id="annualmileage"]').type(mileage)
    vinsurance.enterAnnualMileage().type(mileage)
    // To navigate t0 the Enter the insurance data block
    //cy.xpath('//button[@id="nextenterinsurantdata"]').click()
    vinsurance.clickOnNextButton().click()
    // To enter the Customer First Name
    //cy.xpath('//input[@id="firstname"]').type(firstName)
    vinsurance.enterFirstName().type(firstName)
    // To enter the customer Last Name
    //cy.xpath('//input[@id="lastname"]').type(lastName)
    vinsurance.enterLastName().type(lastName)
    // To provide the customer date of birth
    //cy.xpath('//input[@id="birthdate"]').type(dob)
    vinsurance.enterDateOfBirth().type(dob)
    // To select the gender of the customer
    //cy.xpath('//input[@id="genderfemale"]').click({ force: true })
    vinsurance.selectGender().click({ force: true })
    // To add the street address of the customer
    //cy.xpath('//input[@id="streetaddress"]').type(streetAddess)
    vinsurance.enterStreetAddress().type(streetAddess)
    // To select the country of the customer
    //cy.xpath('//select[@id="country"]').select(country)
    vinsurance.enterCountry().select(country)
    // To enter the Zip code
    //cy.xpath('//input[@id="zipcode"]').type(zipCode)
    vinsurance.enterZipCode().type(zipCode)
    // To enter the city of the customer
    //cy.xpath('//input[@id="city"]').type(city)
    vinsurance.entercity().type(city)
    // To know the select the occupation
    //cy.xpath('//select[@id="occupation"]').select(occupation)
    vinsurance.selectOccupation().select(occupation)
    // to know the Hobbies of the customer
    //cy.xpath('//input[@id="cliffdiving"]').click({ force: true })
    vinsurance.checkHobbies().click({ force: true })
    // To enter the website
    //cy.xpath('//input[@id="website"]').type(website)
    vinsurance.enterWebSite().type(website)
    /// To navigate to the Product data page
    //cy.xpath('//button[@id="nextenterproductdata"]').click()
    vinsurance.clickOnNextButtonProduct().click()
    // To enter the start date of the Vehicle
    //cy.xpath('//button[@id="openstartdatecalender"]').type(startDate)
    vinsurance.enterStartDate().type(startDate)
    // to select the insurance amount
    //cy.xpath('//select[@id="insurancesum"]').select(insuranceSum)
    vinsurance.selectInsuranceAmount().select(insuranceSum)
    //  To select the Merit Rating
    //cy.xpath('//select[@id="meritrating"]').select(meritRating)
    vinsurance.selectMeritRating().select(meritRating)
    // To cover the damage insurance
    //cy.xpath('//select[@id="damageinsurance"]').select(damageInsurance)
    vinsurance.selectDamageInsurance().select(damageInsurance)
    // To select the Optional Products
    //cy.xpath('//input[@id="LegalDefenseInsurance"]').click({ force: true })
    vinsurance.selectOptionalProducts().click({ force: true })
    // to select the Courtesy Car
    //cy.xpath('//select[@id="courtesycar"]', { timeout: 8000 }).select(ccar)
    vinsurance.selectCourtesyCar().select(ccar)
    /// To navigate to the Price
    //cy.xpath('//button[@id="nextselectpriceoption"]').click({ force: true })
    vinsurance.clickOnNextButtonPrice().click({ force: true })
    //To select the option
    //cy.xpath('(//span[@class="ideal-radio"])[4]').click({ force: true })
    vinsurance.selectPriceOption().click({ force: true })
    /// To Navigate to the Send Quote
    //cy.xpath('//button[@id="nextsendquote"]').click({ force: true })
    vinsurance.clickOnNextButtonSendQuote().click({ force: true })
    // To Enter the Email Id
    //cy.xpath('//input[@id="email"]').type(email, { force: true })
    vinsurance.enterEmailID().type(email, { force: true })
    //To enter the Username
    //cy.xpath('//input[@id="username"]').type(username, { force: true })
    vinsurance.enterUserName().type(username, { force: true })
    //To enter the password
    //cy.xpath('//input[@id="password"]').type(password, { force: true })
    vinsurance.enterPassword().type(password, { force: true })
    // To re-enter the password
    //cy.xpath('//input[@id="confirmpassword"]').type(confirmpassword, { force: true })
    vinsurance.enterRepassword().type(confirmpassword, { force: true })
    // To enter the comments
    //cy.xpath('//textarea[@id="comments"]',{timeout:8000}).type(comments, { force: true })
    // To send the application
    //cy.xpath('//button[@id="sendemail"]').click({ force: true })
    vinsurance.clickOnSendButton().click({ force: true })
    //Verify the popup message
    //cy.xpath('//h2[text()="Sending e-mail success!"]', { timeout: 15000 }).should('be.visible')
    vinsurance.verifyPopupMessage().should('be.visible')
    //Click on OK button in popup message
    //cy.xpath('//button[@class="confirm"]').click({ force: true })
    vinsurance.clickOKInPopupMsg().click({ force: true })
    //Back to main menu (Main page)
    //cy.xpath('//a[@id="backmain"]').click({ force: true })
    vinsurance.clickOnBackMainMenu().click({ force: true })
})
/*********Creating Quotation for TRUCK******/
Cypress.Commands.add("QuoteForTruck", (
    make,
    enginePerformance,
    dateOfMnf,
    seats,
    fuelType,
    payload,
    totalWeight,
    price,
    lpn,
    mileage,
    firstName,
    lastName,
    dob,
    streetAddess,
    country,
    zipCode,
    city,
    occupation,
    website,
    startDate,
    insuranceSum,
    damageInsurance,
    email,
    phone,
    username,
    password,
    confirmpassword,
    comments) => {
    /*******  click on TRUCK from Main Menu *********/
    //cy.xpath('(//a[@id="nav_truck"])[1]').click()
    vinsurance.clickTruckMainMenu().click()
    //Verifying the screen after click on TRUCK from Main Menu
    //cy.xpath('//Span[@id="selectedinsurance"]').should("be.visible")
    vinsurance.verifyTruckNavigate().should("be.visible")

    ///Enter VECHILE DATA
    //selecting the Make value from the Dropdown
    //cy.xpath('//select[@id="make"]').select(make)
    vinsurance.selectMakeValue().select(make)
    //Enter Engine Performance[Kw] must be 1 to 2000
    //cy.xpath('//input[@id="engineperformance"]').type(enginePerformance)
    vinsurance.enterEnginePerformance().type(enginePerformance)
    //Verifying the Engine Performance[Kw] error message if user enters more than 2000
    //cy.xpath('//span[text()="Must be a number between 1 and 2000"]').should('not.be.visible')
    vinsurance.verifyEnginePerformance().should('not.be.visible')
    //Enter Date of Manufacture
    //cy.xpath('//input[@id="dateofmanufacture"]').type(dateOfMnf)
    vinsurance.enterDateOfManf().type(dateOfMnf)
    //Select No of Seats
    //cy.xpath('//select[@id="numberofseats"]').select(seats)
    vinsurance.enterNoOfSeats().select(seats)
    //Select Fuel Type
    //cy.xpath('//select[@id="fuel"]').select(fuelType)
    vinsurance.selectFuelType().select(fuelType)
    //Enter Payload[kg] between 1 to 1000
    //cy.xpath('//input[@id="payload"]').type(payload)
    vinsurance.enterPayload().type(payload)
    //Enter Total Weight[kg] between 100 to 50000
    //cy.xpath('//input[@id="totalweight"]').type(totalWeight)
    vinsurance.enterTotalWeight().type(totalWeight)
    //Enter List Price[$] between 500 to 100000
    //cy.xpath('//input[@id="listprice"]').type(price)
    vinsurance.enterListPrice().type(price)
    //Enter License Plate Number below 10 characters
    //cy.xpath('//input[@id="licenseplatenumber"]').type(lpn)
    vinsurance.enterLicensePlateNumber().type(lpn)
    //Enter Annual Mileage [mi] between 100 to 100000
    //cy.xpath('//input[@id="annualmileage"]').type(mileage)
    vinsurance.enterAnnualMileage().type(mileage)
    //Click on NEXT button
    //cy.xpath('//button[@id="nextenterinsurantdata"]').click()
    vinsurance.clickOnNextButton().click()
    //Verify the sucessfully navigate to next page or not
    //cy.xpath('//label[text()="First Name"]').should('be.visible')
    vinsurance.verifyFirstName().should('be.visible')
    ///Enter INSURANCE DATA
    //Enter First Name
    //cy.xpath('//input[@id="firstname"]').type(firstName)
    vinsurance.enterFirstName().type(firstName)
    //Enter Last Name
    //cy.xpath('//input[@id="lastname"]').type(lastName)
    vinsurance.enterLastName().type(lastName)
    //Enter DOB
    //cy.xpath('//input[@id="birthdate"]').type(dob)
    vinsurance.enterDateOfBirth().type(dob)
    //Selec Gender Radio button
    //cy.xpath('//input[@id="gendermale" and @value="Male"]').check({ force: true })
    vinsurance.selectMaleGender().check({ force: true })
    //Enter the Street Address
    //cy.xpath('//input[@id="streetaddress"]').type(streetAddess)
    vinsurance.enterStreetAddress().type(streetAddess)
    //Select the Country filter list
    //cy.xpath('//select[@id="country"]').select(country)
    vinsurance.enterCountry().select(country)
    //Enter Zip code
    //cy.xpath('//input[@id="zipcode"]').type(zipCode)
    vinsurance.enterZipCode().type(zipCode)
    //Enter city
    //cy.xpath('//input[@id="city"]').type(city)
    vinsurance.entercity().type(city)
    //Select Occupation
    //cy.xpath('//select[@id="occupation"]').select(occupation)
    vinsurance.selectOccupation().select(occupation)
    //Check the Hobbies Checkbox
    //cy.xpath('//input[@id="speeding"]').check({ force: true })
    vinsurance.checkTruckHobbies().click({ force: true })
    //Enter web site URL
    //cy.xpath('//input[@id="website"]').type(website)
    vinsurance.enterWebSite().type(website)
    //Attach Picture
    //cy.xpath('//input[@id="picture"]').attachFile('swaroop.png')
    vinsurance.attachImage().attachFile('swaroop.png')
    //Click on Next button for product data
    //cy.xpath('//button[@id="nextenterproductdata"]').click()
    vinsurance.clickOnNextButtonProduct().click()
    //Verify the screen navigate to next screen or not
    //cy.xpath('//label[text()="Start Date"]').should('be.visible')
    vinsurance.verifyStartDate().should('be.visible')
    ///Enter Product Data
    //Enter Start Date
    //cy.xpath('//input[@id="startdate"]').type(startDate)
    vinsurance.enterStartDateForTruck().type(startDate)
    //Select Insurance Sum [$] from list
    //cy.xpath('//select[@id="insurancesum"]').select(insuranceSum)
    vinsurance.selectInsuranceSum().select(insuranceSum)
    //Select Damage Insurance from list
    //cy.xpath('//select[@id="damageinsurance"]').select(damageInsurance)
    vinsurance.selectDamageInsurance().select(damageInsurance)
    //Check the Optional Products checkbox
    //cy.xpath('//input[@id="EuroProtection"]').check({ force: true })
    vinsurance.selectOptionalProducts().check({ force: true })
    //Click on Next Button to navigate price table
    //cy.xpath('//button[@id="nextselectpriceoption"]').click()
    vinsurance.clickOnNextButtonPrice().click()
    //Verify the screen navigate to next screen or not
    //cy.xpath('//table[@id="priceTable"]').should('be.visible')
    vinsurance.verifyNavigatePriceTable().should('be.visible')

    ///Select Price option

    //Select Radio button (Silver, Gold, Platinum and Ultimate)
    //cy.xpath('//input[@id="selectgold"]').check({ force: true }).should('be.checked')
    vinsurance.selectPriceOptionGold().check({ force: true }).should('be.checked')
    //Download the Quote
    //cy.xpath('//a[@id="downloadquote"]', { timeout: 20000 }).click()
    //Verify the screen auto navigate to next screen
    // cy.xpath('//input[@id="email"]',{ timeout: 20000 }).should('be.visible')
    //Click on NEXT button
    //cy.xpath('//button[@id="nextsendquote"]').click({ force: true })
    vinsurance.clickOnNextButtonSendQuote().click({ force: true })
    ///Send quote to mail
    //Enter Email 
    //cy.xpath('//input[@id="email"]').type(email, { force: true })
    vinsurance.enterEmailID().type(email, { force: true })
    //Enter Phone Number
    //cy.xpath('//input[@id="phone"]').type(phone, { force: true })
    vinsurance.enterPhoneNumber().type(phone, { force: true })
    //Enter Username
    //cy.xpath('//input[@id="username"]').type(username, { force: true })
    vinsurance.enterUserName().type(username, { force: true })
    //Enter Password
    //cy.xpath('//input[@id="password"]').type(password, { force: true }, { log: false })
    vinsurance.enterPassword().type(password, { force: true }, { log: false })
    //Enter Confirm Password
    //cy.xpath('//input[@id="confirmpassword"]').type(confirmpassword, { force: true }, { log: false })
    vinsurance.enterRepassword().type(confirmpassword, { force: true }, { log: false })
    //Enter Comments
    //cy.xpath('//textarea[@id="comments"]',{timeout:5000}).type(comments, { force: true })
    //Click on Send button
    //cy.xpath('//button[@id="sendemail"]').click({ force: true })
    vinsurance.clickOnSendButton().click({ force: true })
    //Verify the popup message
    //cy.xpath('//h2[text()="Sending e-mail success!"]', { timeout: 15000 }).should('be.visible')
    vinsurance.verifyPopupMessage().should('be.visible')
    //Click on OK button in popup message
    //cy.xpath('//button[@class="confirm"]').click({ force: true })
    vinsurance.clickOKInPopupMsg().click({ force: true })
    //Back to main menu (Main page)
    //cy.xpath('//a[@id="backmain"]').click({ force: true })
    vinsurance.clickOnBackMainMenu().click({ force: true })
})
/******Creating Quotation for MOTORCYCLE*****/
Cypress.Commands.add("QuoteForMotorcycle", (
    make,
    model,
    cc,
    enginePerformance,
    dateOfMnf,
    seats,
    price,
    mileage,
    firstName,
    lastName,
    dob,
    streetAddess,
    country,
    zipCode,
    city,
    occupation,
    website,
    startDate,
    insuranceSum,
    damageInsurance,
    email,
    username,
    password,
    confirmpassword,
    comments) => {
    //Click on the MOTORCYCLE in main menu
    //cy.xpath('(//a[@id="nav_motorcycle"])[1]').click()
    vinsurance.clickMotorCycleMainMenu().click()
    // select the Make
    //cy.xpath('//select[@id="make"]').select(make)
    vinsurance.selectMakeValue().select(make)
    // To select the Model
    //cy.xpath('//select[@id="model"]').select(model)
    vinsurance.selectModel().select(model)
    // To enter the Cylinder Capacity
    //cy.xpath('//input[@id="cylindercapacity"]').type(cc)
    vinsurance.enterCylinderCapacity().type(cc)
    // To enter the Engine Performance
    //cy.xpath('//input[@id="engineperformance"]').type(enginePerformance)
    vinsurance.enterEnginePerformance().type(enginePerformance)
    // To Enter the date of manufacturer
    //cy.xpath('//button[@id="opendateofmanufacturecalender"]').type(dateOfMnf)
    vinsurance.dateOfManufactured().type(dateOfMnf)
    // To select the No. of Seats
    //cy.xpath('//select[@id="numberofseatsmotorcycle"]').select(seats)
    vinsurance.selectNoOfSeats().select(seats)
    // To enter the price
    //cy.xpath('//input[@id="listprice"]').type(price)
    vinsurance.enterListPrice().type(price)
    // To enter the Annaual Mileage
    //cy.xpath('//input[@id="annualmileage"]').type(mileage)
    vinsurance.enterAnnualMileage().type(mileage)
    // To navigate t0 the Enter the insurance data block
    //cy.xpath('//button[@id="nextenterinsurantdata"]').click()
    vinsurance.clickOnNextButton().click()
    // To enter the Customer First Name
    //cy.xpath('//input[@id="firstname"]').type(firstName)
    vinsurance.enterFirstName().type(firstName)
    // To enter the customer Last Name
    //cy.xpath('//input[@id="lastname"]').type(lastName)
    vinsurance.enterLastName().type(lastName)
    // To provide the customer date of birth
    //cy.xpath('//input[@id="birthdate"]').type(dob)
    vinsurance.enterDateOfBirth().type(dob)
    // To select the gender of the customer
    //cy.xpath('//input[@id="genderfemale"]').click({ force: true })
    vinsurance.selectGender().click({ force: true })
    //To add the street address of the customer
    //cy.xpath('//input[@id="streetaddress"]').type(streetAddess)
    vinsurance.enterStreetAddress().type(streetAddess)
    // To select the country of the customer
    //cy.xpath('//select[@id="country"]').select(country)
    vinsurance.enterCountry().select(country)
    // To enter the Zip code
    //cy.xpath('//input[@id="zipcode"]').type(zipCode)
    vinsurance.enterZipCode().type(zipCode)
    // To enter the city of the customer
    //cy.xpath('//input[@id="city"]').type(city)
    vinsurance.entercity().type(city)
    // To know the select the occupation
    //cy.xpath('//select[@id="occupation"]').select(occupation)
    vinsurance.selectOccupation().select(occupation)
    // to know the Hobbies of the customer
    //cy.xpath('//input[@id="cliffdiving"]').click({ force: true })
    vinsurance.checkHobbies().click({ force: true })
    // To enter the website
    //cy.xpath('//input[@id="website"]').type(website)
    vinsurance.enterWebSite().type(website)
    // To upload the customer vehicle image
    // cy.xpath('//button[@id="open"]').selectFile('cypress/fixtures/image.png')
    // To navigate to the Product data page
    //cy.xpath('//button[@id="nextenterproductdata"]').click()
    vinsurance.clickOnNextButtonProduct().click()
    // To enter the start date of the Vehicle
    //cy.xpath('//button[@id="openstartdatecalender"]').type(startDate)
    vinsurance.enterStartDate().type(startDate)
    // to select the insurance amount
    //cy.xpath('//select[@id="insurancesum"]').select(insuranceSum)
    vinsurance.selectInsuranceAmount().select(insuranceSum)
    // To cover the damage insurance
    //cy.xpath('//select[@id="damageinsurance"]').select(damageInsurance)
    vinsurance.selectDamageInsurance().select(damageInsurance)
    // To select the Optional Products
    //cy.xpath('//input[@id="LegalDefenseInsurance"]').click({ force: true })
    vinsurance.selectOptionalProducts().click({ force: true })
    // To navigate to the Price
    //cy.xpath('//button[@id="nextselectpriceoption"]').click({ force: true })
    vinsurance.clickOnNextButtonPrice().click({ force: true })
    //To select the price option
    //cy.xpath('(//span[@class="ideal-radio"])[4]').click()
    vinsurance.selectPriceOption().click()
    // To view quote
    // cy.xpath('//a[@id="viewquote"]').click()
    // To Navigate to the Send Quote
    //cy.xpath('//button[@id="nextsendquote"]').click({ force: true })
    vinsurance.clickOnNextButtonSendQuote().click({ force: true })
    // To Enter the Email Id
    //cy.xpath('//input[@id="email"]').type(email)
    vinsurance.enterEmailID().type(email)
    //To enter the Username
    //cy.xpath('//input[@id="username"]').type(username)
    vinsurance.enterUserName().type(username)
    //To enter the password
    //cy.xpath('//input[@id="password"]').type(password, { log: false })
    vinsurance.enterPassword().type(password, { log: false })
    // To re-enter the password
    //cy.xpath('//input[@id="confirmpassword"]').type(confirmpassword, { log: false })
    vinsurance.enterRepassword().type(confirmpassword, { log: false })
    // To enter the comments
    //cy.xpath('//textarea[@id="comments"]',{timeout:5000}).type(comments, { force: true })
    // To send the application
    //cy.xpath('//button[@id="sendemail"]').click({ force: true })
    vinsurance.clickOnSendButton().click({ force: true })
    //Verify the popup message
    //cy.xpath('//h2[text()="Sending e-mail success!"]', { timeout: 15000 }).should('be.visible')
    vinsurance.verifyPopupMessage().should('be.visible')
    //Click on OK button in popup message
    //cy.xpath('//button[@class="confirm"]').click({ force: true })
    vinsurance.clickOKInPopupMsg().click({ force: true })
    //Back to main menu (Main page)
    //cy.xpath('//a[@id="backmain"]').click({ force: true })
    vinsurance.clickOnBackMainMenu().click({ force: true })
})
/******Creating Quotation for CAMPER******/

Cypress.Commands.add("QuoteForCamper", (
    make, 
    enginePerformance, 
    dateOfMnf, 
    seats, 
    fuelType, 
    payload, 
    totalWeight, 
    price, 
    lpn, 
    mileage, 
    firstName, 
    lastName, 
    dob, 
    streetAddess, 
    country, 
    zipCode, 
    city, 
    occupation, 
    website, 
    startDate, 
    insuranceSum, 
    damageInsurance, 
    email, 
    username, 
    password, 
    confirmpassword, 
    comments) => {
    //Click on the CAMPER in main menu
    //cy.xpath('(//a[@id="nav_camper"])[1]').click()
    vinsurance.clickCamperMainMenu().click()
    // select the Make
    //cy.xpath('//select[@id="make"]').select(make)
    vinsurance.selectMakeValue().select(make)
    // To enter the Engine Performance
    //cy.xpath('//input[@id="engineperformance"]').type(enginePerformance)
    vinsurance.enterEnginePerformance().type(enginePerformance)
    // To Enter the date of manufacturer
    //cy.xpath('//button[@id="opendateofmanufacturecalender"]').type(dateOfMnf)
    vinsurance.dateOfManufactured().type(dateOfMnf)
    // To select the No. of Seats
    //cy.xpath('//select[@id="numberofseats"]').select(seats)
    vinsurance.enterNoOfSeats().select(seats)
    //Select Radio Button Right Hand Drive
    //cy.xpath('//input[@id="righthanddriveyes"]').check({ force: true })
    vinsurance.selectRadioButtonRightHandDrive().check({ force: true })
    //Select Fuel Type
    //cy.xpath('//select[@id="fuel"]').select(fuelType)
    vinsurance.selectFuelType().select(fuelType)
    //Enter Payload[kg] between 1 to 1000
    //cy.xpath('//input[@id="payload"]').type(payload)
    vinsurance.enterPayload().type(payload)
    //Enter Total Weight[kg] between 100 to 50000
    //cy.xpath('//input[@id="totalweight"]').type(totalWeight)
    vinsurance.enterTotalWeight().type(totalWeight)
    //Enter List Price[$] between 500 to 100000
    //cy.xpath('//input[@id="listprice"]').type(price)
    vinsurance.enterListPrice().type(price)
    //Enter License Plate Number below 10 characters
    //cy.xpath('//input[@id="licenseplatenumber"]').type(lpn)
    vinsurance.enterLicensePlateNumber().type(lpn)
    //Enter Annual Mileage [mi] between 100 to 100000
    //cy.xpath('//input[@id="annualmileage"]').type(mileage)
    vinsurance.enterAnnualMileage().type(mileage)

    ///Clicking on Enter Insurance Data TAB in header
    // To navigate t0 the Enter the insurance data block
    //cy.xpath('//button[@id="nextenterinsurantdata"]').click()
    vinsurance.clickOnNextButton().click()
    // To enter the Customer First Name
    //cy.xpath('//input[@id="firstname"]').type(firstName)
    vinsurance.enterFirstName().type(firstName)
    // To enter the customer Last Name
    //cy.xpath('//input[@id="lastname"]').type(lastName)
    vinsurance.enterLastName().type(lastName)
    // To provide the customer date of birth
    //cy.xpath('//input[@id="birthdate"]').type(dob)
    vinsurance.enterDateOfBirth().type(dob)
    // To select the gender of the customer
    //cy.xpath('//input[@id="genderfemale"]').click({ force: true })
    vinsurance.selectGender().click({ force: true })
    // To add the street address of the customer
    //cy.xpath('//input[@id="streetaddress"]').type(streetAddess)
    vinsurance.enterStreetAddress().type(streetAddess)
    // To select the country of the customer
    //cy.xpath('//select[@id="country"]').select(country)
    vinsurance.enterCountry().select(country)
    // To enter the Zip code
    //cy.xpath('//input[@id="zipcode"]').type(zipCode)
    vinsurance.enterZipCode().type(zipCode)
    // To enter the city of the customer
    //cy.xpath('//input[@id="city"]').type(city)
    vinsurance.entercity().type(city)
    // To know the select the occupation
    //cy.xpath('//select[@id="occupation"]').select(occupation)
    vinsurance.selectOccupation().select(occupation)
    // to know the Hobbies of the customer
    //cy.xpath('//input[@id="cliffdiving"]').click({ force: true })
    vinsurance.checkHobbies().click({ force: true })
    // To enter the website
    //cy.xpath('//input[@id="website"]').type(website)
    vinsurance.enterWebSite().type(website)
    // To upload the customer vehicle image
    // cy.xpath('//button[@id="open"]').selectFile('cypress/fixtures/image.png')

    ///Clicking on Enter Product Data TAB in header
    // To navigate to the Product data page
    //cy.xpath('//button[@id="nextenterproductdata"]').click()
    vinsurance.clickOnNextButtonProduct().click()
    // To enter the start date of the Vehicle
    //cy.xpath('//button[@id="openstartdatecalender"]').type(startDate)
    vinsurance.enterStartDate().type(startDate)
    // to select the insurance amount
    //cy.xpath('//select[@id="insurancesum"]').select(insuranceSum)
    vinsurance.selectInsuranceAmount().select(insuranceSum)
    // To cover the damage insurance
    //cy.xpath('//select[@id="damageinsurance"]').select(damageInsurance)
    vinsurance.selectDamageInsurance().select(damageInsurance)
    // To select the Optional Products
    //cy.xpath('//input[@id="LegalDefenseInsurance"]').click({ force: true })
    vinsurance.selectOptionalProducts().click({ force: true })
    ///Clicking on Select Price TAB in header
    // To navigate to the Price
    //cy.xpath('//button[@id="nextselectpriceoption"]').click({ force: true })
    vinsurance.clickOnNextButtonPrice().click({ force: true })
    //To select the option
    //cy.xpath('(//span[@class="ideal-radio"])[4]').click()
    vinsurance.selectPriceOption().click({ force: true })
    // To view quote
    // cy.xpath('//a[@id="viewquote"]').click()
    // Click on NEXT Button to navigate to Send Quote
    //cy.xpath('//button[@id="nextsendquote"]').click({ force: true })
    vinsurance.clickOnNextButtonSendQuote().click({ force: true })
    ///Naviagte to Send Quote 
    // To Enter the Email Id
    //cy.xpath('//input[@id="email"]').type(email)
    vinsurance.enterEmailID().type(email)
    //To enter the Username
    //cy.xpath('//input[@id="username"]').type(username)
    vinsurance.enterUserName().type(username)
    //To enter the password
    //cy.xpath('//input[@id="password"]').type(password, { log: false })
    vinsurance.enterPassword().type(password, { log: false })
    // To re-enter the password
    //cy.xpath('//input[@id="confirmpassword"]').type(confirmpassword, { log: false })
    vinsurance.enterRepassword().type(confirmpassword, { log: false })
    // To enter the comments
    //cy.xpath('//textarea[@id="Comments"]',{timeout:5000}).type(comments, { force: true })
    // To send the application
    //cy.xpath('//button[@id="sendemail"]').click()
    vinsurance.clickOnSendButton().click({ force: true })
    //Verify the popup message
    //cy.xpath('//h2[text()="Sending e-mail success!"]', { timeout: 15000 }).should('be.visible')
    vinsurance.verifyPopupMessage().should('be.visible')
    //Click on OK button in popup message
    //cy.xpath('//button[@class="confirm"]').click({ force: true })
    vinsurance.clickOKInPopupMsg().click({ force: true })

    //Back to main menu (Main page)
    //cy.xpath('//a[@id="backmain"]').click({ force: true })
    vinsurance.clickOnBackMainMenu().click({ force: true })
})