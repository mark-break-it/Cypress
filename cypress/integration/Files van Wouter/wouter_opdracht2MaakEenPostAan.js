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

     //voeg een bericht toe

     cy.get('#menu-posts > a > div.wp-menu-name').click()
     cy.get('#wpbody-content > div.wrap > a').click()
     cy.get('#title').type('testPost12') //wat achter type staat moet ook op regel 32 terugkomen achter aria-label
     cy.get('#content-html').click()
     cy.get('#content').type('Dit is opdracht 2 maak een post aan')
     cy.get('#publish').click()

     //terug naar Dashboard
     cy.get('#menu-dashboard > a > div.wp-menu-name').click()

     //ga naar berichten op in blok 'op dit moment'
     cy.get('#dashboard_right_now > div > div > ul > li.post-count > a').scrollIntoView().should('be.visible').click()   
       cy.get('a')
       .siblings()
       .find('td.title.column-title.has-row-actions.column-primary.page-title > strong > a[aria-label="“testPost12” (bewerken)"]')
       .should('be.visible')
       
   

    })
    })  