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

import {faker} from '@faker-js/faker';

Cypress.Commands.add("generateUser",()=>{
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
Cypress.Commands.add("CaptureServiceAndTAR",()=>{
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
                // Get the substring of 'ele' and use 'tar' as is
                let sindicator = text.substring(0, 13);
                // Log both values for debugging purposes
                cy.log("Service_Indicator: " + sindicator);
                cy.log("TARID: " + trimtar);
                cy.log("service code", +scode);
                // Write both 'oNum' and 'tarText' in a single line separated by a space
                //cy.writeFile("orderNumbers.txt", oNum + "" + tarText + "\n", { flag: 'a+' });
                //cy.writeFile("orderNumbers.txt", oNum + "\n", { flag: 'a+' })
                cy.writeFile("orderNumbers.txt", `${sindicator}, ${scode}, ${trimtar}\n`, { flag: 'a+' });
            })
        })
    });

})

//Just Practice
Cypress.Commands.add("handleApplicationLogin",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('[type="submit"]').click()
})
//Just Practice
Cypress.Commands.add("verifyAfterLogin",()=>{
    cy.xpath('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[5]').click()
    cy.xpath('(//i[@class="oxd-icon bi-calendar oxd-date-input-icon"])[1]').click()
})
