import login from '../Pageobjects/loginpage.po'
//import pim from '../pageobjects/PIM/pim.po'
import addemployee from '../Pageobjects/addemployee.po'
import logindata from "../fixtures/logincreds.json"
import employeedata from "../fixtures/addemployee.json"
describe('Add employee functionality', () => {

    it('Add employee with mandatory details', () => {

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

     cy.get(addemployee.loginButton()).click()

     cy.contains(addemployee.sucessfulInput()).should('be.visible')
     
    })

    it('Add employee with create creds', () => {

        cy.visit('/')
  
        cy.get(login.usernameInput()).type(logindata.username)
        cy.get(login.passwordInput()).type(logindata.password)
        cy.get(login.loginButton()).click()
  
        //Assertions
  
        cy.url().should("eq",logindata.fullurl)
  
        cy.url().should("include",logindata.partialurl)
  
        //or
        cy.contains(addemployee.dashboardInput()).should("be.visible")
        cy.contains(addemployee.pimInput()).click()
        cy.contains(addemployee.addemployeeInput()).click()
  
        cy.get(addemployee.employeefirstnameInput()).type(employeedata.employeefirstname)
  
        cy.get(addemployee.employeelastnameInput()).type(employeedata.employeelastname)
  
       cy.get(addemployee.createlogindetails()).click()

       let r = (Math.random() + 1).toString(36).substring(7);
       cy.get(addemployee.usernameInput()).eq(2).type(employeedata.userid)
       cy.get(addemployee.passwordInput()).eq(0).type(employeedata.passwordid)
       cy.get(addemployee.confirmpasswordInput()).eq(1).type(employeedata.confirmpassword)
       cy.get(addemployee.loginButton()).click()

       cy.contains(addemployee.sucessfulInput()).should('be.visible')
  
       
      })

      it('Add employee without mandatory details', () => {

        cy.visit('/')

        cy.get(login.usernameInput()).type(logindata.username)
        cy.get(login.passwordInput()).type(logindata.password)
        cy.get(login.loginButton()).click()
  
        //Assertions
  
        cy.url().should("eq",logindata.fullurl)
  
        cy.url().should("include",logindata.partialurl)
  
        //or
        cy.contains(addemployee.dashboardInput()).should("be.visible")
        cy.contains(addemployee.pimInput()).click()
        cy.contains(addemployee.addemployeeInput()).click()
  

  
       cy.get(addemployee.loginButton()).click()
  
       cy.contains(addemployee.firstnamereqInput()).should('be.visible')
       cy.get(addemployee.secondnamereqInput()).eq(1).should('be.visible')
      })


      it('Add employee with out mandatory details', () => {

        cy.visit('/')
  
        cy.get(login.usernameInput()).type(logindata.username)
        cy.get(login.passwordInput()).type(logindata.password)
        cy.get(login.loginButton()).click()
  
        //Assertions
  
        cy.url().should("eq",logindata.fullurl)
  
        cy.url().should("include",logindata.partialurl)
  
        //or
        cy.contains(addemployee.dashboardInput()).should("be.visible")
        cy.contains(addemployee.pimInput()).click()
        cy.contains(addemployee.addemployeeInput()).click()
       cy.get(addemployee.createlogindetails()).click()
       cy.get(addemployee.loginButton()).click()

      
       
  
       
      })
      it('Add employeename more than 30 characters', () => {

        cy.visit('/')
  
        cy.get(login.usernameInput()).type(logindata.username)
        cy.get(login.passwordInput()).type(logindata.password)
        cy.get(login.loginButton()).click()
  
        //Assertions
  
        cy.url().should("eq",logindata.fullurl)
  
        cy.url().should("include",logindata.partialurl)
  
        //or
        cy.contains(addemployee.dashboardInput()).should("be.visible")
        cy.contains(addemployee.pimInput()).click()
        cy.contains(addemployee.addemployeeInput()).click()
        cy.get(addemployee.employeefirstnameInput()).type("maheshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
        cy.contains(addemployee.exceed30char()).should('be.visible')
  
     
       
      })
      it('Add employee with create login details but username exceed to 40 char', () => {

        cy.visit('/')
  
        cy.get(login.usernameInput()).type(logindata.username)
        cy.get(login.passwordInput()).type(logindata.password)
        cy.get(login.loginButton()).click()
  
        //Assertions
  
        cy.url().should("eq",logindata.fullurl)
  
        cy.url().should("include",logindata.partialurl)
  
        //or
        cy.contains(addemployee.dashboardInput()).should('be.visible')
        cy.contains(addemployee.pimInput()).click()
        cy.contains(addemployee.addemployeeInput()).click()
  
        cy.get(addemployee.employeefirstnameInput()).type(employeedata.employeefirstname)
  
        cy.get(addemployee.employeelastnameInput()).type(employeedata.employeelastname)
  
       cy.get(addemployee.createlogindetails()).click()

       let r = (Math.random() + 1).toString(36).substring(7);
       cy.get(addemployee.usernameInput()).eq(2).type("maheshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
       
       cy.contains(addemployee.exceed40char()).should("be.visible")
  

       
       
      })
})