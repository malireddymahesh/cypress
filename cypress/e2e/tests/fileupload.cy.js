import login from "../Pageobjects/loginpage.po"

import logindata from "../fixtures/logincreds.json"

import addemployee from "../Pageobjects/addemployee.po"

import employeedata from "../fixtures/addemployee.json"
import job from "../Pageobjects/jobtitle.po"
import jobtitltdata from "../fixtures/jobtitle.json"
describe('Automation - File Upload example', function () {

    it('Cypress Test case - Understanding Upload file', function (){
        cy.visit('/')

        cy.get(login.usernameInput()).type(logindata.username)
        cy.get(login.passwordInput()).type(logindata.password)
        cy.get(login.loginButton()).click()
  
        //Assertions
  
        cy.url().should("eq", logindata.fullurl)
  
        cy.url().should("include", logindata.partialurl)
  
        //or
        cy.contains(addemployee.dashboardInput()).should("be.visible")
        cy.contains(addemployee.pimInput()).click()
        cy.contains(addemployee.addemployeeInput()).click()
  
        cy.get(addemployee.employeefirstnameInput()).type(employeedata.employeefirstname)
  
        cy.get(addemployee.employeelastnameInput()).type(employeedata.employeelastname)
        
        cy.xpath('//input[@type="file"]').attachFile('module1/test4.txt');
        cy.wait(3000)
    
       // cy.xpath('//input[@type"submit"]').click();

        //cy.contains("the file's contents are:").should("be.visible")

    })
})

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
     
      cy.get(job.jobtitleusername()).eq(1).type(jobtitltdata.jobtitleusername)
   
      cy.get(job.jobtitledescription()).type(jobtitltdata.jobtitledesc)

      

      cy.xpath('//input[@type="file"]').attachFile('module1/test4.txt');
      cy.get(job.submitbutton()).click();
       //cy.xpath('//input[@type="file"]').attachFile('module1/test4.txt');
        cy.wait(3000)
       //cy.xpath('//input[@type"submit"]').click();

       //cy.contains("the file's contents are:").should("be.visible")
      
    })
    it('Cypress Test Case - Understanding download file ', function () {
  
      cy.downloadFile("https://s4-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/113/000/original/logo_landscape_(1).png?1643756332", "cypress/downloads", "cypresslogo.png")
      })
   
})














    
