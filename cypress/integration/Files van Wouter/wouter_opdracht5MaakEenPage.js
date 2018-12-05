/// <reference types="cypress" />

describe('Maak een Page', function () {
    it('MaakEenPage', function () {
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

        //klik links in het menu op pagina, en dan op nieuwe pagina
        cy.get('#menu-pages > a > div.wp-menu-name').click()
        cy.get('#wpbody-content > div.wrap > a').click()
        cy.get('#title').clear().type('PlaygroundPage')

        //voeg plaatje in
        cy.get('#insert-media-button').click()
        cy.get('#media-search-input').type('cypress')
        cy.get('[class="attachment-preview js--select-attachment type-image subtype-png landscape"]').first().click()
        cy.get('[class="button media-button button-primary button-large media-button-insert"]').click()
      
        //nu nog tekst toevoegen        
        cy.get('#content-html').click()
        cy.get('#content').type('{enter}{enter}Dit is opdracht 5 maak een pagina aan')

        //klik op publiceren
        cy.get('[class="button button-primary button-large"]').click()

        //pagina bekijken
        cy.get('#wp-admin-bar-view > a').click()

        //controleer of 'Dit is opdracht 5 maak een pagina aan' zichtbaar is
        cy.contains('Dit is opdracht 5 maak een pagina aan').should('be.visible')
        








    })
    })  