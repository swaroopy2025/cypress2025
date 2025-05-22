///<reference types="cypress"/>

describe("Performing Unit Testing in eTAR", function () {

    beforeEach(function () {
        cy.log("Launching Application")
        //Open Application
        cy.visit("http://sysdev.surge.com/")
        //Verifying Login Button
        cy.get('input[value="Login"]').should('be.visible')
        //Clicking Login Button
        cy.get('input[value="Login"]').click()
        //Clicking "Medical Services" link
        cy.get('#MedicalService').click()
        cy.wait(5000)
        //Verifying TAR Menu Title On Screen
        cy.get('tbody tr td h2').should('be.visible')
        //Verifying The "Creating a NEW TAR" Link
        // cy.get("a[href='http://sysdev.surge.com/cgi-forte/forteisapi.dll?/frte_sysdevwebservice0B161B761F271A2A23261B2A177A2675?ServiceName=sysdevwebservice&TemplateName=Provider_Addrs_Sel.htm&CurrentPage=no_save&Upload=FALSE&CancelService=FALSE']").should('be.visible')
        //Clicking "Creating a NEW TAR" link On Screen
        cy.get("tbody>tr:nth-child(2)>td>ul>li:nth-child(1)>a").click()
        cy.wait(5000)

    })
    //Creating TAR with Single Service
    it("Creating TAR with Single Service for HoSPITAL DAYS ", () => {

        /*Providing data into Provider Information Screen*/

        //Verifying Providing Information Title On Screen
        cy.get('tbody tr td h2').should('have.text', 'Provider Information')
        //Enter data into "TAR Completed By" field
        cy.get('input[name="txtTARCompBy"]').type("Srinivas")
        //Clicking Continue Button
        cy.get('input[name="Submit"]').click()
        cy.wait(3000)


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

        /*Enter Service Code In TAR Services Screen*/

        //Enter data into Service Code Field
        cy.get('input[name="ServiceCode"]').type('2')
        //Clicking on "Find Service Category(s)" button
        cy.get('input[type="button"]').click()
        cy.wait(3000)
        //Verifying Title of the screen in Inpatient Services screen
        cy.get('tbody tr td h2').should('have.text', 'Inpatient Services')

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
        cy.wait(3000)
        //Verify the screen redirecting to TAR Services screen
        cy.get("div div h2").should('have.text', 'TAR Services ')
        //Clicking the Submit TAR link in TAR Services screen
        cy.xpath("//a[@href='http://sysdev.surge.com/cgi-forte/forteisapi.dll??serviceName=sysdevwebservice&templateName=SetAttachmentsInd.htm&CurrentPage=Serv_Sel']").click()
        cy.wait(4000)

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
        //Select the Radio button for Attachment(s) Submission
        cy.xpath("//input[@value='2']").check()
        //Clicking on Continue button in "Treatment Authorization Request" screen for Attachment(s) Submission
        cy.get('#submit1').click()
        cy.wait(3000)
        //Verify the success label message in "Treatment Authorization Request" screen
        cy.get('tbody p:nth-child(1) span:nth-child(1)').should('have.text', 'Thank You! Your TAR has been successfully submitted.')
        //Verifying the TAR #
        // cy.get("span[class='subtitle'] p[align='center']").should('have.text', 'TAR # : 0*')
        //Veryfying the Status of TAR
        cy.get('body > div:nth-child(3) > div:nth-child(2) > form:nth-child(6) > table:nth-child(9) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(10) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(3) > span:nth-child(1)').should('have.text', 'In Review')

    })

    //Creating TAR with Multiple Services
    it("Creating TAR with Multiple Services for HoSPITAL DAYS ", () => {

        /*Providing data into Provider Information Screen*/

        //Verifying Providing Information Title On Screen
        cy.get('tbody tr td h2').should('have.text', 'Provider Information')
        //Enter data into "TAR Completed By" field
        cy.get('input[name="txtTARCompBy"]').type("Srinivas")
        //Clicking Continue Button
        cy.get('input[name="Submit"]').click()
        cy.wait(3000)


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

        /*Enter Service Code In TAR Services Screen*/

        //Enter data into Service Code Field
        cy.get('input[name="ServiceCode"]').type('2')
        //Clicking on "Find Service Category(s)" button
        cy.get('input[type="button"]').click()
        cy.wait(3000)
        //Verifying Title of the screen in Inpatient Services screen
        cy.get('tbody tr td h2').should('have.text', 'Inpatient Services')

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
        cy.wait(3000)
        //Verify the screen redirecting to TAR Services screen
        cy.get("div div h2").should('have.text', 'TAR Services ')

        /*Adding Another service*/

        //Enter data into Service Code Field
        cy.get('input[name="ServiceCode"]').type('3')
        //Clicking on "Find Service Category(s)" button
        cy.get('input[type="button"]').click()
        cy.wait(3000)

        /*Providing data into Service Information Screen*/

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
        //Clicking the Submit TAR link in TAR Services screen
        cy.xpath("//a[@href='http://sysdev.surge.com/cgi-forte/forteisapi.dll??serviceName=sysdevwebservice&templateName=SetAttachmentsInd.htm&CurrentPage=Serv_Sel']").click()
        cy.wait(3000)

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

        //Select the Radio button for Attachment(s) Submission
        cy.xpath("//input[@value='2']").check()
        //Clicking on Continue button in "Treatment Authorization Request" screen for Attachment(s) Submission
        cy.get('#submit1').click()
        cy.wait(3000)
        //Verify the success label message in "Treatment Authorization Request" screen
        cy.get('tbody p:nth-child(1) span:nth-child(1)').should('have.text', 'Thank You! Your TAR has been successfully submitted.')
        //Veryfying the Status of TAR
        cy.get('body > div:nth-child(3) > div:nth-child(2) > form:nth-child(6) > table:nth-child(9) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(10) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(3) > span:nth-child(1)').should('have.text', 'In Review')

    })


})