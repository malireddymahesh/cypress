describe('Automation - Write file and Read file ', function () {

    it('Cypress Test Case - Write file example', function () {

        
        cy.writeFile('cypress/module1/test4.txt', "mahesh\n")
     
    })

    it('Cypress Test Case - Append Data in end to the file ', function () {
        
        cy.writeFile('cypress/fixtures/module1/test4.txt', "engineering",{flag: 'a+'});
     
    })

    it('Cypress Test Case - Create Json file ', function () {
        
        cy.writeFile('cypress/fixtures/module2/test6.json', { firstname: 'm', lastname: 'mahesh'});
     
    })

    it('Cypress Test Case - Validation of Data both Text file and Json ', function () {
        
    
        cy.readFile('cypress/fixtures/PIM/registerflowdata.json').should('exist')

        cy.readFile('cypress/fixtures/registerflowcharan.json').its('username').should('eq','maliredd1234')

         cy.readFile('cypress/fixtures/module2/test6.json').its('firstname').should('eq','m')

         cy.readFile('cypress/fixtures/module1/test4.txt').should('contain','mahesh');

        cy.readFile('cypress/fixtures/module1/test4.txt').should('contain','engineering')       
    })

  })