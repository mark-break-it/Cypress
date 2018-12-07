///  <reference types="cypress" />

describe('Cypress training 3', function () {
it('Should login as admin', function () {
// Schrijf hier je test
cy.visit("http://workshop.break-it.eu/")
cy.contains('Log in').scrollIntoView()
cy.contains("Log in").click()
cy.wait(1000)
cy.get("#user_login").type("workshop")
cy.get("#user_pass").type("workshop")
cy.get("#wp-submit").click()

//Maak nieuwe post aan
cy.contains('Posts').trigger('mouseover')
cy.contains('Add New').click({ force: true }) //is dit de juiste manier voor mouseover??
cy.wait(1000)

cy.get('#title').type('Hello, World!!!')
cy.get('#content').type('Dit is content')

cy.get('.button-large').click()

cy.contains('View post').click()


});
});