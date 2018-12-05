/// <reference types="cypress" />

describe('Eerste test', function () {
    it('Should open the main page', function () {
     cy.visit("https://example.cypress.io")
     cy.contains("get").click()
     cy.get(".query-btn")
     cy.get("#querying > div > div:nth-child(1) > h4 > a").should('be.visible')
     cy.title().should('eq', 'Cypress.io: Kitchen Sink')
    })
    })