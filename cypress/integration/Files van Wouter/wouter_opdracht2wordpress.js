/// <reference types="cypress" />

describe('Tweede test', function () {
    it('Should open the inlog page', function () {
        cy.visit("http://192.168.99.100:8080/")  
        cy.wait(2000)   
        cy.get('#meta-2 > ul > li:nth-child(1) > a').scrollIntoView()
        .should('be.visible')
        .wait(2000).click()
        cy.wait(1000)
        cy.get('#user_login').clear().type('wouter.van.praag@salves.nl')
        cy.wait(1000)
        cy.get('#user_pass').clear().type('Kameel131!')
        cy.wait(1000)
        cy.get('#wp-submit').click()     
        cy.url().should('eq', 'http://192.168.99.100:8080/wp-admin/')
    })
    })  