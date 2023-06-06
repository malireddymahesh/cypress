class addemployeepage {

    employeefirstnameInput(){

        return 'input[name="firstName"]'
    }

    employeelastnameInput(){
        return 'input[name="lastName"]'
    }

    loginButton(){
        return 'button[type="submit"]'
    }

    createlogindetails(){
        return 'span[class="oxd-switch-input oxd-switch-input--active --label-right"]'
    }
    usernameInput(){
        return 'input[class="oxd-input oxd-input--active"]'
    }

    passwordInput(){
        return 'input[type="password"]'
    }


    confirmpasswordInput(){
        return 'input[type="password"]'
    }
    submitbutton(){
        return 'button[type="submit"]'
    }
    
    dashboardInput(){
        return "Dashboard"
    }
    pimInput(){
      return "PIM"
    }
    addemployeeInput(){
        return "Add Employee"
    }
    sucessfulInput(){
        return 'Successfully Saved'
    }
    requiredInput(){
        return 'span["oxd-switch-input oxd-switch-input--active --label-right"]'
    }
    firstnamereqInput(){
        return 'Required'
    }
    secondnamereqInput(){
        return 'span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]'
    }
    exceed30char(){
        return "Should not exceed 30 characters"
    }
    exceed40char(){
        return "Should not exceed 40 characters"
    }
}
    const employeepage= new addemployeepage()
    export default employeepage