class Loginpage {

orangeHRMlogo(){

    return 'img[alt="company-branding"]'
}

usernameInput(){

    return 'input[name="username"]'
}

passwordInput(){
    return 'input[name="password"]'
}

loginButton(){
    return 'button[type="submit"]'
}

loginerrormessage(){
    return "Invalid credentials"
}

}
const login= new Loginpage

export default login

