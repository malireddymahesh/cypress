describe('Automation - API Automation - GET. PUT, POST and Delete Methods', function () {

    it.only('Cypress Test Case - Understanding GET Method', function () {
  
      cy.request('GET', 'https://reqres.in/api/users?page=2').then((response)=>{

        expect(response.status).equal(200);
         //comment for demo
        expect(response.body.data[3].email).equal("byron.fields@reqres.in");

        expect(response.body.data[5].id).equal(12);

        expect(response.body.support.url).equal("https://reqres.in/#support-heading");

        expect(response.body).to.have.property('total_pages');
        expect(response.body).to.have.property('total_pages', 2);

        expect(response.body).to.have.property("page", 2)

        expect(response.body).to.have.property("total", 12)
        expect(response.body).to.have.property("per_page", 6)
      })
      
    })

    it('Cypress Test Case - Understanding GET Method', function () {
  
      cy.request('GET', 'https://reqres.in/api/users/2').then((response)=>{

        expect(response.status).equal(200);
         //comment for demo
      
        expect(response.body.support.url).equal("https://reqres.in/#support-heading");

        expect(response.body.data.id).equal(2)
        expect(response.body.data.email).equal("janet.weaver@reqres.in")
      })
      
    })
    // it('Cypress Test Case - Understanding POST Method', function () {
  

    //     const payload ={
    //         "name": "Raju",
    //         "job": "Trainer"
    //     }
    //     cy.request('POST', 'https://reqres.in/api/users', payload).then((response)=>{
  
    //       expect(response.status).equal(201);
    //       expect(response.body).to.have.property("name", "Raju")
        
    //       expect(response.body).to.have.property("job", "Trainer")
    //     })
        
    //   })

    it.only('Cypress Test Case - Understanding POST Method', function () {

      
      
        //const payload =

        cy.request('POST', 'https://reqres.in/api/users', {
          "name": "Raju",
          "job": "Trainer"
      }).then((response)=>{
  
          expect(response.status).equal(201);  
          expect(response.body).to.have.property("name", "Raju")
        
          expect(response.body).to.have.property("job", "Trainer")

          let time = JSON.stringify(response.body.createdAt)
          let idvalue = JSON.stringify(response.body.id)

          cy.log(time)
          cy.log(idvalue)

          cy.writeFile('cypress/fixtures/module1/test6.json', {"Id":idvalue });

        })
        
      })

      it.only('Cypress Test Case - Understanding PUT Method', function () {
  
      const payload = {
        "name": "Raju",
        "job": "Trainer"
    }

        cy.request('PUT', 'https://reqres.in/api/users/2', payload).then((response)=>{
  
          expect(response.status).equal(200);
          expect(response.body).to.have.property("name", "Raju")
        
          expect(response.body).to.have.property("job", "Trainer")

          let updatedtime = JSON.stringify(response.body.updatedAt)

          cy.log(updatedtime)
        })
        
      })


      it.only('Cypress Test Case - Understanding DELETE Method', function () {
  

        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response)=>{
  
          expect(response.status).equal(204);
         
        })
        
      })
       

  })
  