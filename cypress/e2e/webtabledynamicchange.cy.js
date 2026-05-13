describe("Handle web tables", function () {
    //Pre-Condition
    beforeEach(() => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.url().should('eq', 'https://testautomationpractice.blogspot.com/')
        cy.wait(5000)
    })
    it("Finding cell data when table dynamically changing", function () {
        cy.get('table tbody tr').then(($row) => {
            const row = $row.length;
            for (let i = 1; i < row; i++) {
                cy.get('table tbody tr')
                    .eq(i)
                    .find('td')
                    .eq(1)
                    .then(($cell) => {
                        if ($cell.text().includes('Animesh')) {
                            cy.get('table tbody tr')
                                .eq(i)
                                .contains('Javascript')
                                .click();
                        }
                    })
            }

        });

    })

    it("Finding cell data when table dynamically changing", function () {

        cy.get('table tbody tr').each(($row) => {

            cy.wrap($row)
                .find('td')
                .eq(1)
                .then(($cell) => {

                    if ($cell.text().includes('Animesh')) {
                        cy.wrap($row)
                            .contains('Javascript')
                            .click();
                    }
                });

        });

    });

    it("In Simplying the above code", function () {

        cy.get('table tbody tr').each(($row) => {
            if ($row.find('td').eq(1).text().includes('Animesh')) {
                cy.wrap($row).contains('Javascript').click();
            }
        });
    })

    it("Even Shorter (Pro Version)", function () {
        cy.get('table tbody tr')
            .contains('td', 'Animesh')
            .parent('tr')
            .contains('Javascript')
            .click();
    })
    //When column positions change dynamically, you should NOT hardcode indexes (eq(0)).
    //Instead, find the column index using the header text, then use it.
    /*
    <table id="employeeTable">
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>DOB</th>
      <th>Salary</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ravi</td>
      <td>Kumar</td>
      <td>01-01-1990</td>
      <td>50000</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>

    //After refresh or relaunch browser header positions changed

    <table id="employeeTable">
  <thead>
    <tr>
      <th>Last Name</th>
      <th>Salary</th>
      <th>First Name</th>
      <th>DOB</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Kumar</td>
      <td>50000</td>
      <td>Ravi</td>
      <td>01-01-1990</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>

    */
    it("Handle dynamic column positions (header-based)",function(){
        let firstNameIndex;
        let actionIndex;

        // Step 1: Find column indexes dynamically
        cy.get('table tbody tr th').each(($th, index) => {

            const headerText = $th.text().trim();

            if (headerText === 'Author') {
                firstNameIndex = index;
            }

            if (headerText === 'Subject') {
                actionIndex = index;
            }
        });

        // Step 2: Use indexes to find row and click Delete
        cy.get('table tbody tr').each(($row) => {

            cy.wrap($row)
                .find('td')
                .eq(firstNameIndex)
                .then(($cell) => {

                    if ($cell.text().trim() === 'Animesh') {

                        cy.wrap($row)
                            .find('td')
                            .eq(actionIndex)
                            .contains('Javascript')
                            .click();
                    }
                });
        });

    })

})