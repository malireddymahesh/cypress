const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    "baseUrl":'https://opensource-demo.orangehrmlive.com',
    "projectId": "axee4c",
    "retries" : { "runMode": 0, "openMode": 1 },
    "pageLoadTimeout":120000,
    "specPattern": "**/*.feature",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
      return require('./cypress/plugins/index.js')(on,config)
      // implement node event listeners here
    },
    env:{
      //"username":"Mahesh",
     //"email":"malireddymahesh1@gmail.com",
    }
  },
});
