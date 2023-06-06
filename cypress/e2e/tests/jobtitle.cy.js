import login from "../Pageobjects/loginpage.po"
import logindata from "../fixtures/logincreds.json"
import job from "../Pageobjects/jobtitle.po"
describe('Validate adding jobtitles', () => {

    it('Verify adding jobtitles with Valid input', () => {      
    
      cy.visit('/')
      //actions
      cy.get(login.usernameInput()).type(logindata.username)
        cy.get(login.passwordInput()).type(logindata.password)
        cy.get(login.loginButton()).click()
  
        //Assertions
  
        //cy.url().should("eq", logindata.fullurl)

      cy.contains(job.admin()).click()

      cy.get(job.adminclick()).eq(1).click()

      cy.contains(job.jobtitle()).click()

      cy.get(job.jobtitleclick()).click()

      cy.contains(job.addjobtitle()).should("be.visible")
     
      cy.get(job.jobtitleusername()).eq(1).type("Adviser")
   
      cy.get(job.jobtitledescription()).type("Job Desription")

      cy.get(job.submitbutton()).click()
      
    })

  })