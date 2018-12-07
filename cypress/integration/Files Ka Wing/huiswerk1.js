///  <reference types="cypress" />

describe('Cypress training 3', function () {
it('Should login as admin', function () {
// Opdracht 1: Login
cy.visit("http://workshop.break-it.eu/")
cy.contains('Log in').scrollIntoView()
cy.contains("Log in").click()
cy.wait(1000)
cy.get("#user_login").type("workshop")
cy.get("#user_pass").type("workshop")
cy.get("#wp-submit").click()


// Opdracht 3 Maak nieuwe user aan
cy.contains('Users').click()
cy.get('.page-title-action').click()

cy.wait(10)

cy.get("#user_login").type("kawing")
cy.get("#email").type("kawing.tse@salves.nl")
cy.get("#createusersub").click()
cy.get('#message').contains('New user created. ')




});
});