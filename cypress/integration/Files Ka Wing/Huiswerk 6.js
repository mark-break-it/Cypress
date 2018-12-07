///  <reference types="cypress" />

describe('Cypress training 3', function () {
it('Maak een comment', function () {
// Opdracht 4: Maak comment
cy.visit("http://workshop.break-it.eu/")
cy.contains('Log in').scrollIntoView()
cy.contains("Log in").click()
cy.wait(1000)
cy.get("#user_login").type("workshop")
cy.get("#user_pass").type("workshop")
cy.get("#wp-submit").click()

// Opdracht 3 Maak nieuwe Page aan
cy.contains('Pages').click()
cy.get('.page-title-action').click()

});
});