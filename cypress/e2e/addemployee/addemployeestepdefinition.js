import { Given ,Then ,When} from "cypress-cucumber-preprocessor/steps";
import login from "../../Pageobjects/loginpage.po";
import logindata from "../../fixtures/jobtitle.json"
import employeedata from "../../fixtures/addemployee.json";
//import addemployee from "../../Pageobjects/addemployee.po";
import employeepage from "../../Pageobjects/addemployee.po";
Given('User launch the Application', () => {
    cy.visit('/')
})
When('User Enter valid Username {string} and Valid password {string}',(username,password) => {

cy.get(login.usernameInput()).type(username)
cy.get(login.passwordInput()).type(password)
})

When('User click on loginButton', () => {
    cy.get(login.loginButton()).click()
})

Then('User Should be navigated to Dashboard page',() => {
    cy.contains(addemployee.dashboardInput()).should("be.visible")  

})
Then('User should be navigated to pim',() => {
    cy.contains(addemployee.pimInput()).click()
})
Then('User  Should be navigated to add employee', () => {
    cy.contains(addemployee.addemployeeInput()).click()
})
When('User Enter valid employee Firstname {string} and Entee Valid Lastname {string}',(employeefirstname,Lastname) =>{
    cy.get(addemployee.employeefirstnameInput()).type(employeedata.employeefirstname)

      cy.get(addemployee.employeelastnameInput()).type(employeedata.employeelastname)
})
When('User click on loginButton', () => {
     cy.get(addemployee.loginButton()).click()
})
Then('User should get sucessfully saved',() => {
     cy.contains(addemployee.sucessfulInput()).should('be.visible')
})
Then('User should create login creds',() => {
    cy.get(addemployee.createlogindetails()).click()
})
When('Enter Username{string} and password {string} and confirmpassword {string}',(userid,passwordid,confirmpassword) => {
    let r = (Math.random() + 1).toString(36).substring(7);
       cy.get(addemployee.usernameInput()).eq(2).type(employeedata.userid)
       cy.get(addemployee.passwordInput()).eq(0).type(employeedata.passwordid)
       cy.get(addemployee.confirmpasswordInput()).eq(1).type(employeedata.confirmpassword)
})
When('User Enter loginButton',() => {
       cy.get(addemployee.loginButton()).click()
})