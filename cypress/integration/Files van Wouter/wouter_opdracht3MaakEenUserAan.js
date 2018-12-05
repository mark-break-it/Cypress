/// <reference types="cypress" />

describe('Eerste test', function () {
    it('Should open the main page', function () {
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

     //kies voor gebruiker toevoegen
     cy.get('#menu-users > a > div.wp-menu-name').click()
     cy.get('#menu-users > ul > li:nth-child(3) > a').click()

     //vul de gegevens in voor de nieuwe gebruiker
     cy.get('#user_login').type('Gebruiker6') //moet uniek zijn bij iedere test, hoog nummer op
     cy.get('#email').type('Gebruiker6@cypress.nl') //moet uniek zijn bij iedere test, hoog nummer op
     cy.get('#first_name').type('Gebruiker6') //moet uniek zijn bij iedere test, hoog nummer op
     cy.get('#last_name').type('Aangemaakt')
     cy.get('#url').type('www.nu.nl')
     cy.get('#createuser > table > tbody > tr.form-field.form-required.user-pass1-wrap > td > button').click() //wachtwoord knop
     cy.get('#pass1-text').clear().type('Wachtwoord1234') //geef wachtwoord op
     cy.get('#createuser > table > tbody > tr.pw-weak > td > label > input').click() //click op checkbox zwak wachtwoord
     cy.get('#role').select('Redacteur') //geef een rol op (Abonnee, Schrijver, Auteur, Redacteur, Beheerder)
     cy.get('#createusersub').click()

     //verifieer dat je op gebruikers pagina bent
     cy.title().should('eq', 'Gebruikers ‹ Cypress Training — WordPress')

     //controleer of de aangemaakte gebruiker op de pagina staat
     cy.get('a')
     .siblings()
     .contains('Gebruiker6').should('be.visible')  //vul hier de op regel 23 aangemaakte gebruiker in
     

    })
    })  