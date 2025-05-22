//intellisense and type definitions
///<reference types="cypress"/>

describe("Performing Unit Testing in eTAR", function () {

    beforeEach(function () {
        cy.LauncheTARApplication()
        cy.ClickOnCreatingANEWTARLink()
    })
    after
    //Creating TAR with Single Service(HoSPITAL DAYS)
    it("Creating TAR with Single Service for HoSPITAL DAYS ", () => {

        //Providing data into Provider Information Screen
        cy.ProvidingProviderInformationScreen()
        //Providing data into Patient Information Screen
        cy.ProvidingPatientInformationScreen()
        //Enter Service Code In TAR Services Screen
        cy.ProvidingServiceCodeInTARServicesScreen()
        //Providing data into Service Information Screen
        cy.ProvidingDataIntoServiceInformationScreen()
        //Clicking On Sunmit TAR Link
        cy.ClickingOnSubmitTARLinkInTARServiceScreen()
        /*Handle Uncatch Exception*/
        //cy.HandlingUncaughtExceptionAfterClickingOnSubmitTARLink()
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
        //Submitting The TAR In Attachments Submission
        cy.SubmitTARInAttachmentsSubmissionScreen()
        //Verifying The TAR Status And Success Label Message
        cy.VerifyingTARStatusAndSuccessLabelMessage()
        //Capturing Service Indicator and TAR #
        cy.CaptureServiceAndTAR()
        /*cy.get(':nth-child(9) > tbody > :nth-child(2) > [width="40%"] > .content').then((ele) => {
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
        });*/
    })

    //Creating TAR with Multiple Services(HoSPITAL DAYS)
    it("Creating TAR with Multiple Services for HoSPITAL DAYS ", () => {

        /*Providing data into Provider Information Screen*/
        cy.ProvidingProviderInformationScreen()
        /*Providing data into Patient Information Screen*/
        cy.ProvidingPatientInformationScreen()
        /*Enter Service Code In TAR Services Screen*/
        cy.ProvidingServiceCodeInTARServicesScreen()
        /*Providing data into Service Information Screen*/
        cy.ProvidingDataIntoServiceInformationScreen()
        /*Adding Another service TAR Service Screen*/
        cy.AddingAnotherServiceCodeInTARServicesScreen()
        /*Adding Another Service into Service Information Screen*/
        cy.AddingAnotherServiceIntoServiceInformationScreen()
        /*Clicking On Submit TAR Link*/
        cy.ClickingOnSubmitTARLinkInTARServiceScreen()
        /*Handle Uncatch Exception*/
        //cy.HandlingUncaughtExceptionAfterClickingOnSubmitTARLink()
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
        /*Submitting The TAR In Attachments Submission*/
        cy.SubmitTARInAttachmentsSubmissionScreen()
        /*Verifying The TAR Status And Success Label Message*/
        cy.VerifyingTARStatusAndSuccessLabelMessage()
        /*Capturing Service Indicator and TAR #*/
        cy.CaptureServiceAndTAR()
    })

    //Creating TAR with Service(HoME HEALTH)
    it("Creating TAR for HoME HEALTH", () => {
        //Providing data into Provider Information Screen
        cy.ProvidingProviderInformationScreen()
        //Providing data into Patient Information Screen
        cy.xpath('//select[@name="SpecHand"]').select('94')
        cy.ProvidingPatientInformationScreen()
        //Enter Service Code For Home Health
        cy.get("#ServiceCodeId").type('G0365')
        //Click on Find Service Category
        cy.xpath('//input[@name="DetermineCat"]').click()
        cy.wait(3000)
        //Selecting service category selection
        cy.xpath('//a[normalize-space(text())="Home Health"]').click()
        cy.wait(3000)
        //Enter total units
        cy.xpath('//input[@alt="Total Units"]').type('5')
        //Enter and Select the frequency and Frq Indicator
        cy.xpath('//input[@name="Frequency"]').type('1')
        cy.wait(3000)
        cy.xpath("//select[@name='FrequencyInd']").select('D')
        //Enter From Date in MMDDYYYY format
        cy.get('input[alt="From Date"]').type('09142023')
        //Enter Through Date in MMDDYYYY format
        cy.get('input[alt="Thru Date"]').type('09202023')
        //Enter Discharge Date in MMDDYYYY format
        cy.get('input[alt="Discharge Date"]').type('09212023')
        //Enter Admit Date in MMDDYYYY format
        cy.get('input[name="AdmitDate"]').type('09142023')
        //Select Discharge From
        cy.xpath("//select[@name='Discharge']").select('12')
        //Select Admit From
        cy.xpath("//select[@name='AdmFrm']").select('12')
        //Select Place Of Service
        cy.xpath("//select[@name='POS']").select('12')
        //Select ICD-CM Type
        cy.xpath('//select[@name="Serv_ICDCodeType"]').select('ICD-10')
        //Enter ICD Code
        cy.xpath('//input[@name="Serv_ICD9_1"]').type('A98.8')
        //Enter Date of Onset
        cy.xpath('//input[@alt="Date of Onset"]').type('09132023')
        //Click on Continue button
        cy.xpath('//input[@name="Submit"]').click()

        //Clicking On Sunmit TAR Link
        cy.ClickingOnSubmitTARLinkInTARServiceScreen()
        //Handle Uncatch Exception
        //cy.HandlingUncaughtExceptionAfterClickingOnSubmitTARLink()
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
        //Submitting The TAR In Attachments Submission
        cy.SubmitTARInAttachmentsSubmissionScreen()
        //Verifying The TAR Status And Success Label Message
        cy.VerifyingTARStatusAndSuccessLabelMessage()

        //Capturing Service Indicator and TAR #
        cy.CaptureServiceAndTAR()
    })

    //Creating TAR with Service(FPACT)
    it("Creating TAR for FPACT", () => {
        //Providing data into Provider Information Screen
        cy.ProvidingProviderInformationScreen()
        //Providing data into Patient Information Screen
        cy.ProvidingPatientInformationScreen()
        //Enter Service Code In TAR Services Screen
        cy.get("#ServiceCodeId").type('58562')
        //Click on Find Service Categorys button
        cy.get('input[name="DetermineCat"]').click()
        //Select Service Category Selection
        cy.xpath('(//a[@name="SpecialLinkIfOnlyOne"])[1]').click()
        //Select the Side dropdown
        cy.get('select[name="side"]').select('R')
        //Enter the total units
        cy.get('input[name="TotUnitsReq"]').type('5')
        //Enter from date
        cy.get('input[name="FromDate"]').type('09212024')
        //Enter Thru Date
        cy.get('input[name="ThruDate"]').type('09282024')
        //Enter Start of Care
        cy.get('input[name="AdmitDate"]').type('09212024')
        //Enter Frequency Value
        cy.get('input[name="Frequency"]').type('2')
        //Select Frequency Indicator
        cy.get('select[name="FrequencyInd"]').select('D')
        //Enter Ant. length of need
        cy.get('input[name="AntLength"]').type('2')
        //Select Ant. length of need
        cy.get('select[name="AntLengthInd"]').select('D')
        //Enter Discharge Date
        cy.get('input[name="DischDate"]').type('09292024')
        //Select Discharge Date
        cy.get('select[name="Discharge"]').select('12')
        //Select ICD-CM Type
        cy.get('select[name="Serv_ICDCodeType"]').select('0')
        //Enter ICD Code
        cy.get('input[name="Serv_ICD9_1"]').type('A98.8')
        //Enter date of Onset
        cy.get('input[name="Serv_DateOnset_1"]').type('09182024')
        //Click on Continue button
        cy.get('input[name="Submit"]').click()

        //Clicking On Sunmit TAR Link
        cy.get(':nth-child(5) > tbody > tr > td > .blueLink > a').click()
        //cy.ClickingOnSubmitTARLinkInTARServiceScreen()
        //Handle Uncatch Exception
        //cy.HandlingUncaughtExceptionAfterClickingOnSubmitTARLink()
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
        //Submitting The TAR In Attachments Submission
        cy.SubmitTARInAttachmentsSubmissionScreen()
        //Verifying The TAR Status And Success Label Message
        cy.VerifyingTARStatusAndSuccessLabelMessage()

        //Capturing Service Indicator and TAR #
        cy.CaptureServiceAndTAR()
    })

    //Creating TAR with Service(Apnea Monitor)
    it.skip('Creating TAR for Apnea Monitor', () => {
        //Providing data into Provider Information Screen
        cy.ProvidingProviderInformationScreen()
        //Providing data into Patient Information Screen
        cy.ProvidingPatientInformationScreen()
        //Enter Service Code In TAR Services Screen
        cy.get("#ServiceCodeId").type('K0739')
        //Click on Find Service Categorys
        cy.get('input[name="DetermineCat"]').click()
        //Click on Service Category Selection
        cy.xpath('(//a[@name="SpecialLinkIfOnlyOne"])[4]').click()
        //Enter total units
        cy.get('input[name="TotUnitsReq"]').type('5')
        //Enter Atn. Length of Need
        cy.get('input[name="AntLength"]').type('2')
        //Select Atn. Lenght of Need
        cy.get('select[name="AntLengthInd"]').select('D')
        //Enter from date
        cy.get('input[name="FromDate"]').type('')
        //Enter Thru Date
        cy.get('input[name="ThruDate"]').type('')
        //Enter Start Date
        cy.get('input[name="AdmitDate"]').type('')
        //Enter Discharge Date
        cy.get('input[name="DischDate"]').type('')
        //Select ICD-CM type 
        cy.get('select[name="Serv_ICDCodeType"]').select('0')
        //Enter ICD Code
        cy.get('input[name="Serv_ICD9_1"]').type('A92.8')
        //Enter Date of Onset
        cy.get('input[name="Serv_DateOnset_1"]').type('')
        //Enter Physician Prescription
        cy.get('textarea[name="PhysPresc"]').type('')
        //Enter Physician License
        cy.get('input[name="PhysLicNum"]').type('')
        //Enter Physician Name
        cy.get('input[name="PhysName"]').type('')
        //Enter Physician Phone
        cy.get('input[name="PhysPhne1"]').type('')
        cy.get('input[name="PhysPhne2"]').type('')
        cy.get('input[name="PhysPhne3"]').type('')
        //Enter Prescription Date
        cy.get('input[name="PrescriptDte"]').type('')

    })
})