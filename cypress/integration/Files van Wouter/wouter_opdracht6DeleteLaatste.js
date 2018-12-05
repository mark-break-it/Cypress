/// <reference types="cypress" />

describe('Delete laatste', function () {
    it('Delete laatste', function () {
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
     
     //ga naar berichten
     cy.get('#menu-posts > a > div.wp-menu-name').click()

     //zoek met tekst op laatste bericht
     cy.get('#post-search-input').type('test2') //achter type de titel van het laatste bericht (zie opdracht 2)
     cy.get('#search-submit').click()

     //nu bij het enige overgebleven bericht op de checkbox klikken
     cy.get('[name="post[]"]').click()

     //bij dropdown acties kiezen voor 'Naar prullenbak'       
     cy.get('#bulk-action-selector-top').select('Naar prullenbak')

     //klik op toepassen
     cy.get('#doaction').click()
     
    })
    }) 