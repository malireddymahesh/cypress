import demo from'../../pageobject/loginpage.po'

import data from '../../pageobjects/dashboard/dashboardpage.po'

describe ('demo suite', () =>{
    beforeEach(function(){
    cy.visit('/')

    cy.on('uncaught;exception',(e,Runnable)=>{
        return false
    })

})
it('should fill application and submit',()=>{
    cy.get(demo.validation).should('be.visible');

    cy.entretext(cypress.env('username'),cypress.env('email'));
    cy.get(demo.curentAddressfield()).type(data.curentaddress);
    cy.get(demo.permanenetaddressfield()).type(data.permanentaddress);
    cy.get(demo.submitButton()).click();

    cy.validatetext(cypress.env('username'),cypress.env('email').data.permanentaddressfield);
})

})
