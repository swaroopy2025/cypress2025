/*Add the all page Elements in class objects  */

class VInsurancePageObjects  {
    /*****  click on AUTOMOBILE from Main Menu   ******/

    clickAutomobileMainMenu() { return cy.get('#nav_automobile') }
    //selecting the Make value from the Dropdown
    selectMakeValue() {  return cy.xpath('//select[@id="make"]') }
    //Enter Engine Performance[Kw] must be 1 to 2000
    enterEnginePerformance() {  return cy.xpath('//input[@id="engineperformance"]') }
    //Verifying the Engine Performance[Kw] error message if user enters more than 2000
    verifyEnginePerformance() { return  cy.xpath('//span[text()="Must be a number between 1 and 2000"]') }
    //Enter Date of Manufacture
    enterDateOfManf() { return  cy.xpath('//input[@id="dateofmanufacture"]') }
    //Select No of Seats
    enterNoOfSeats() { return  cy.xpath('//select[@id="numberofseats"]') }
    //Select Fuel Type
    selectFuelType() { return  cy.xpath('//select[@id="fuel"]') }
    //Enter List Price[$] between 500 to 100000
    enterListPrice() { return  cy.xpath('//input[@id="listprice"]') }
     //Enter License Plate Number below 10 characters
    enterLicensePlateNumber() { return  cy.xpath('//input[@id="licenseplatenumber"]') }
    //Enter Annual Mileage [mi] between 100 to 100000
    enterAnnualMileage() { return  cy.xpath('//input[@id="annualmileage"]') }
    // To navigate t0 the Enter the insurance data block
    clickOnNextButton() { return  cy.xpath('//button[@id="nextenterinsurantdata"]') }
    // To enter the Customer First Name
    enterFirstName() { return  cy.xpath('//input[@id="firstname"]') }
    // To enter the customer Last Name
    enterLastName() { return  cy.xpath('//input[@id="lastname"]') }
    // To provide the customer date of birth
    enterDateOfBirth() { return  cy.xpath('//input[@id="birthdate"]') }
    // To select the gender of the customer
    selectGender() { return  cy.xpath('//input[@id="genderfemale"]') }
    // To add the street address of the customer
    enterStreetAddress() { return  cy.xpath('//input[@id="streetaddress"]') }
    // To select the country of the customer
    enterCountry() { return  cy.xpath('//select[@id="country"]') }
    // To enter the Zip code
    enterZipCode() { return  cy.xpath('//input[@id="zipcode"]') }
    // To enter the city of the customer
    entercity() { return  cy.xpath('//input[@id="city"]') }
    // To know the select the occupation
    selectOccupation() { return  cy.xpath('//select[@id="occupation"]') }
    // to know the Hobbies of the customer
    checkHobbies() { return  cy.xpath('//input[@id="cliffdiving"]') }
    // To enter the website
    enterWebSite() { return  cy.xpath('//input[@id="website"]') }
    // To navigate to the Product data page
    clickOnNextButtonProduct(){ return cy.xpath('//button[@id="nextenterproductdata"]')}
    // To enter the start date of the Vehicle
    enterStartDate(){ return cy.xpath('//button[@id="openstartdatecalender"]')}
    // to select the insurance amount
    selectInsuranceAmount(){ return cy.xpath('//select[@id="insurancesum"]')}
    //  To select the Merit Rating
    selectMeritRating(){ return cy.xpath('//select[@id="meritrating"]')}
    // To cover the damage insurance
    selectDamageInsurance(){ return cy.xpath('//select[@id="damageinsurance"]')}
    // To select the Optional Products
    selectOptionalProducts(){ return cy.xpath('//input[@id="LegalDefenseInsurance"]')}
    // to select the Courtesy Car
    selectCourtesyCar(){ return cy.xpath('//select[@id="courtesycar"]', { timeout: 8000 })}
    // To navigate to the Price
    clickOnNextButtonPrice(){ return cy.xpath('//button[@id="nextselectpriceoption"]')}
    //To select the price option
    selectPriceOption(){ return cy.xpath('(//span[@class="ideal-radio"])[4]')}
    // To Navigate to the Send Quote
    clickOnNextButtonSendQuote(){ return cy.xpath('//button[@id="nextsendquote"]')}
    // To Enter the Email Id
    enterEmailID(){ return cy.xpath('//input[@id="email"]')}
    //To enter the Username
    enterUserName(){ return cy.xpath('//input[@id="username"]')}
    //To enter the password
    enterPassword(){ return cy.xpath('//input[@id="password"]')}
    // To re-enter the password
    enterRepassword(){ return cy.xpath('//input[@id="confirmpassword"]')}
    // To send the application
    clickOnSendButton(){ return cy.xpath('//button[@id="sendemail"]')}
    //Verify the popup message
    verifyPopupMessage(){ return cy.xpath('//h2[text()="Sending e-mail success!"]', { timeout: 15000 })}
    //Click on OK button in popup message
    clickOKInPopupMsg(){ return cy.xpath('//button[@class="confirm"]')}
    //Back to main menu (Main page)
    clickOnBackMainMenu(){ return cy.xpath('//a[@id="backmain"]')}
    
    /***********click on TRUCK from Main Menu    ******************/

    clickTruckMainMenu(){ return cy.xpath('(//a[@id="nav_truck"])[1]')}
    //Verifying the screen after click on TRUCK from Main Menu
    verifyTruckNavigate(){ return cy.xpath('//Span[@id="selectedinsurance"]')}
    //selecting the Make value from the Dropdown
    //Enter Engine Performance[Kw] must be 1 to 2000
    //Verifying the Engine Performance[Kw] error message if user enters more than 2000
    //Enter Date of Manufacture
    //Select No of Seats
    //Select Fuel Type
    //Enter Payload[kg] between 1 to 1000
    enterPayload(){ return cy.xpath('//input[@id="payload"]')}
    //Enter Total Weight[kg] between 100 to 50000
    enterTotalWeight(){ return cy.xpath('//input[@id="totalweight"]')}
    //Enter List Price[$] between 500 to 100000
    //Enter License Plate Number below 10 characters
    //Enter Annual Mileage [mi] between 100 to 100000
    //Click on NEXT button
    //Verify the sucessfully navigate to next page or not
    verifyFirstName(){ return cy.xpath('//label[text()="First Name"]')}
    // To enter the Customer First Name
    // To enter the customer Last Name
    // To provide the customer date of birth
    //Selec Gender Radio button
    selectMaleGender(){return cy.xpath('//input[@id="gendermale" and @value="Male"]')}
    //Enter the Street Address
    //Select the Country filter list
    //Enter Zip code
    //Enter city
    //Select Occupation

    //******Check the Truck Hobbies Checkbox*****//
    checkTruckHobbies(){ return cy.xpath('//input[@id="speeding"]')}
    //Enter web site URL
    //Attach Picture
    attachImage(){  return cy.xpath('//input[@id="picture"]')}
    //Click on Next button to Enter Product Data
    //Verify the screen navigate to Product Data or not
    verifyStartDate(){ return cy.xpath('//label[text()="Start Date"]')}
    //Enter Start Date for TRUCK
    enterStartDateForTruck(){ return cy.xpath('//input[@id="startdate"]')}
    //Select Insurance Sum [$] from list
    selectInsuranceSum(){return cy.xpath('//select[@id="insurancesum"]')}
    //Select Damage Insurance from list
    selectDamageInsurance(){return cy.xpath('//select[@id="damageinsurance"]')}
    //Check the Optional Products checkbox
    //checkOptionalProduct(){cy.xpath('//input[@id="EuroProtection"]')}
    //Click on Next Button
    //Verify the screen navigate to price table screen or not
    verifyNavigatePriceTable(){ return cy.xpath('//table[@id="priceTable"]')}
    //Select Radio button (Silver, Gold, Platinum and Ultimate)
    selectPriceOptionGold(){ return cy.xpath('//input[@id="selectgold"]')}
    //Click on NEXT button
    //Enter Email 
    //Enter Phone Number
    enterPhoneNumber(){ return cy.xpath('//input[@id="phone"]')}
    //Enter Username
    //Enter Password
    //Enter Confirm Password
    //Click on Send mail
    //Verify the mail popup message
    //Click on OK button in popup message
    //Back to main menu (Main page)

    /*************  Click on the MOTORCYCLE in main menu     *******************/

    clickMotorCycleMainMenu(){ return cy.xpath('(//a[@id="nav_motorcycle"])[1]')}
    // select the Make
    // To select the Model
    selectModel(){ return cy.xpath('//select[@id="model"]')}
    // To enter the Cylinder Capacity
    enterCylinderCapacity(){ return cy.xpath('//input[@id="cylindercapacity"]')}
    // To enter the Engine Performance
    //Enter Date of Manufacture
    dateOfManufactured(){return cy.xpath('//button[@id="opendateofmanufacturecalender"]')}
    // To select the No. of Seats
    selectNoOfSeats(){ return cy.xpath('//select[@id="numberofseatsmotorcycle"]')}
    // To enter the price
    // To enter the Annaual Mileage
    // To navigate t0 the Enter the insurance data block
    // To enter the Customer First Name
    // To enter the customer Last Name
    // To provide the customer date of birth
    // To select the gender of the customer
    //To add the street address of the customer
    // To select the country of the customer
    // To enter the Zip code
    // To enter the city of the customer
    // To know the select the occupation
    // to know the Hobbies of the customer
    // To enter the website
    // To navigate to the Product data page
    // To enter the start date of the Vehicle
    // to select the insurance amount
    // To cover the damage insurance
    // To select the Optional Products
    // To navigate to the Price
    //To select the option
    // Click on NEXT Button to navigate to Send Quote
    // To Enter the Email Id
    //To enter the Username
    //To enter the password
    // To re-enter the password
    // To send the application
    //Verify the popup message
    //Click on OK button in popup message
    //Back to main menu (Main page)

    /*********   Click on the CAMPER in main menu   ********/
    
    clickCamperMainMenu(){ return cy.xpath('(//a[@id="nav_camper"])[1]')}
    // select the Make
    // To enter the Engine Performance
    // To Enter the date of manufacturer
    // To select the No. of Seats
    //Select Radio Button Right Hand Drive
    selectRadioButtonRightHandDrive(){ return cy.xpath('//input[@id="righthanddriveyes"]')}
    //Select Fuel Type
    //Enter Payload[kg] between 1 to 1000
    //Enter Total Weight[kg] between 100 to 50000
    //Enter List Price[$] between 500 to 100000
    //Enter License Plate Number below 10 characters
    //Enter Annual Mileage [mi] between 100 to 100000
    // To navigate t0 the Enter the insurance data block
    // To enter the Customer First Name
    // To enter the customer Last Name
    // To provide the customer date of birth
    // To select the gender of the customer
    // To add the street address of the customer
    // To select the country of the customer
    // To enter the Zip code
    // To enter the city of the customer
    // To know the select the occupation
    // to know the Hobbies of the customer
    // To enter the website
    // To navigate to the Product data page
    // To enter the start date of the Vehicle
    // to select the insurance amount
    // To cover the damage insurance
    // To select the Optional Products
    // To navigate to the Price
    //To select the option 
    // Click on NEXT Button to navigate to Send Quote
    // To Enter the Email Id
    //To enter the Username
    //To enter the password
    //To re-enter the password
    // To send the application
    //Verify the popup message
    //Click on OK button in popup message
    //Back to main menu (Main page)

}

//Added export default so it can be imported in test files.
export default VInsurancePageObjects;