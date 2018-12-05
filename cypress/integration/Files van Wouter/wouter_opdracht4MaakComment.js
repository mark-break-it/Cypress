/// <reference types="cypress" />

describe('Maak een comment', function () {
    it('Comment', function () {
     cy.visit("http://192.168.99.100:8080/")     
     cy.get('#meta-2 > ul > li:nth-child(1) > a').scrollIntoView()
     .should('be.visible').click()
     cy.wait(1000)
     cy.get('#user_login').clear().type('Astrid131')
     cy.wait(1000)
     cy.get('#user_pass').clear().type('Wachtwoord1234')
     cy.wait(1000)
     cy.get('#wp-submit').click()     
     cy.url().should('eq', 'http://192.168.99.100:8080/wp-admin/')

     //Ga bovenin naar Cypress training en kies in het drop-down voor 'Site bekijken'
     cy.get('#wp-admin-bar-site-name > a').click()

     //scroll naar Meest recente berichten en klik op de bovenste post
     cy.get('#recent-posts-2 > h2').scrollIntoView()
      .should('be.visible')
     cy.get('#recent-posts-2 > ul > li:nth-child(1) > a').click()
     //scroll nu naar Reactie
     cy.get('#commentform > p.comment-form-comment > label').scrollIntoView().should('be.visible')
     //klik in reactie veld en voer tekst in (let op, moet uniek zijn elke keer dat je deze test draait, anders foutmelding)
     cy.get('#comment').type('Dit is een reactie op de bovenste post10')
     //klik op Reactie plaatsen
     cy.get('#submit').click()

     //controleer of de post geplaatst is, klk eerst weer op het bovenste bericht
     cy.wait(2000)
     cy.get('#recent-posts-2 > h2').scrollIntoView()
     .should('be.visible')
     cy.get('#recent-posts-2 > ul > li:nth-child(1) > a').click()
     //controleer dan of de gegeven reactie zichtbaar is en scroll er naar toe
     cy.get('#comments > ol').contains('Dit is een reactie op de bovenste post10')
     .scrollIntoView()
     .should('be.visible') 





       
   

    })
    })  