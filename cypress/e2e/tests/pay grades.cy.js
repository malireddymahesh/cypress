describe('Validate adding Job title', () => {

    it('Verify adding job title with Valid input', () => {      
    
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      //actions
      cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input').type("Admin")
      cy.get('input[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click() 
    })
  })