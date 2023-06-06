
import login from "../Pageobjects/loginpage.po"

describe('Validate Login functionality', () => {

    it('Verify login with Valid credentials', () => {      
    
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      //actions
      cy.get(login.usernameInput()).type("Admin")
      cy.get(login.passwordInput()).type('admin123')
      cy.get(login.loginButton()).click()

      //Assertions

      cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

      cy.url().should("include","/web/index.php/dashboard/index")

      //or
      cy.contains("Dashboard").should("be.visible")

    })

    it('Verify login with invalid username and valid password', () => {

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //actions
        cy.get('input[name="username"]').type("Adminbjhbjh")
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
  
        //Assertions
  
        cy.contains('Invalid credentials').should("be.visible")

        cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]').should("be.visible")
  
      })

    it('Verify login with valid username and invalid password', () => {

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      
        //actions
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type('admbfndbin123')
        cy.get('button[type="submit"]').click()
  
        //Assertions
  
        cy.contains('Invalid credentials').should("be.visible")

        cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]').should("be.visible")
  
      })
    

  })

