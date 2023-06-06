Feature: addemployee with mandatory details

Scenario: Verify login with Valid credentials

Given User launch the Application
When User Enter valid Username "Admin" and Valid password "admin123"
And User click on login Button
Then  User Should be navigated to Dashboard page
Then  User Should be navigated to Pim page
Then  User Should be navigated to addemployee page
When User Enter Employee firstname
When User Enter Employee Lastname
And User Should create login details
When User Enter Employee Username
When User Enter Employee password
When User Enter Employee confirm password
Then User Should got sucessful message
