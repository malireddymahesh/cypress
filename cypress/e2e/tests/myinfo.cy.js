describe('Add employee functionality', () => {
it('Add employee with mandatory details', () => {

    cy.visit('/')

    cy.get('input[name="username"]').type("Admin")
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    //Assertions

    cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

   

    //or
    cy.contains("My Info").click()
    //cy.contains("myinfo").click()
    
    cy.get('input[name="firstName"]').type("rajusir")
    cy.get('input[name="lastName"]').type("A")
    cy.get('button[type="submit"]').eq(1).click()
    cy.contains('Successfully Saved').should('be.visible')

     

})
})