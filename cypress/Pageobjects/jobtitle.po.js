class jobtitlepage{
    admin(){
        return "Admin"
    }

    adminclick(){

    return 'span[class="oxd-topbar-body-nav-tab-item"]'
    }
    jobtitle(){
        return "Job Titles"
    }
    
    jobtitleclick(){
        return 'i[class="oxd-icon bi-plus oxd-button-icon"]'
    }
    
    addjobtitle(){
        return 'Add Job Title'
    }
    jobtitleusername(){
        return 'input[class="oxd-input oxd-input--active"]'
    }
    jobtitledescription(){
        return 'textarea[placeholder="Type description here"]'
    }
    
    submitbutton(){
        return 'button[type="submit"]'
    }
}
const job =new jobtitlepage()
export default job