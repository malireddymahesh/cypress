import { Given ,Then,when} from "cypress-cucumber-preprocessor/steps";
import login from "../../Pageobjects/loginpage.po";
import logindata from "../../fixtures/logincreds.json";


Given('User launch the Application', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
})
When('User Enter valid Username {string} and Valid password {string}',(username,password) => {

cy.get(login.usernameInput()).type(username)
cy.get(login.passwordInput()).type(password)
})

When('User click on loginButton', () => {
    cy.get(login.loginButton()).click()
})

Then('User Should be navigated to Dashboard page',() => {

})

When('User Enter Invalid Username {string} and Valid password {string}',(wrongusername,wrongpassword) => {
    cy.get(login.usernameInput()).type(wrongusername)
cy.get(login.passwordInput()).type(wrongpassword)
})
And('User click on login Button',() => {
    cy.get(login.loginButton()).click()
})
Then('User Should get error message',() => {

})





















