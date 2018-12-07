///  <reference types="cypress" />

describe('Cypress training 3', function () {
it('Maak een comment', function () {
// Opdracht 4: Maak comment
cy.visit("http://workshop.break-it.eu/")

cy.get('.entry-meta').contains('December 5, 2018').click()
cy.get('#comment').type('Dit is een comment')
cy.get('#author').type('Ka Wing')
cy.get('#email').type('kawing.tse@salves.nl')

cy.get('.submit').click()

});
});