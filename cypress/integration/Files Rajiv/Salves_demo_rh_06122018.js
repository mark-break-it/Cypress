/// <reference types="cypress" />

describe('Demo Test', function() {
    it('Makes as post', function() {
        cy.visit("https://agilemonitor-as-backpack.herokuapp.com/")
        cy.contains('INLOGGEN').click()
        cy.wait(400)
        cy.get('#user_email').type('teamlidoptimus4@mailinator.com')
        cy.get('#user_password').type('password1')

//Optie 1:
     //   cy.request({
     //       method: 'Get',
     //       url: 'https://agilemonitor-as-backpack.herokuapp.com/users/sign_in',
     //   })

//Optie 2:
     //   cy.get('.form-group')
     //     .contains('Inloggen')
     //     .should('have.class', 'btn')
     //     .click()
 
//Optie 3:
        cy.get('#new_user > input.btn.btn-default').click()
        
        cy.wait(400)
        cy.get('.panel-body')
          .contains('start enquete')
          .should('have.class', 'btn')
          .click()

         // cy.get('.col-xs-12 col-md-8 score_element')
         // .contains('4')
         // .should('have.class', 'slider')
         // .click()
          


})
})