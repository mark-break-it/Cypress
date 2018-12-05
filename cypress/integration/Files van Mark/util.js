/// <reference types="cypress" />

Cypress.Commands.add('login', (userType, options = {}) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8080/wp-login.php', 
        form: true, 
        body: {
          log: 'fluffy',
          pwd: 'workshop'
        }
      })
})



