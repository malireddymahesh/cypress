Feature: Positive and negative tests of login functionality

Scenario: Verify login with Valid credentials

Given User launch the Application
When User Enter valid Username "Admin" and Valid password "admin123"
And User click on login Button
Then User Should be navigated to Dashboard page

Scenario: Verify login with InValid credentials

Given User launch the Application
When User Enter valid Username "Adminwhen" and Valid password "admi123when"
And User click on login Button
Then User Should get error message