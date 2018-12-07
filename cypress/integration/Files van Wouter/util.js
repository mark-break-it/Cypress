/// <reference types="cypress" />

Cypress.Commands.add('Login', (userType, options = {}) => { //methode inloggen
        cy.visit("https://salves.slack.com/")  
        cy.wait(2000)       
        cy.get('#email').clear().type('wouter.van.praag@salves.nl')
        cy.wait(1000)
        cy.get('#password').clear().type('Kameel131!')
        cy.wait(1000)
        cy.get('input[type="checkbox"]').click() //Haal vinkje bij remember me weg
        cy.get('#signin_btn').click()   
        cy.wait(6000)  
        cy.url().should('eq', 'https://salves.slack.com/messages/C0453AJ01/')      
})


Cypress.Commands.add('Uitloggen', (userType, options = {}) => { //methode uitloggen
   cy.get('[id="team_menu_user_name"]').click() //klik op eigen naam links bovenin
   cy.get('#logout > a > span').click() //kies voor Sign out of Salves
   cy.contains('You’ve signed out of Slack').should('be.visible') //controleer of de tekst in het scherm staat
   cy.url().should('eq', 'https://salves.slack.com/signout/done') //controleer of je bent uitgelogd   

})

Cypress.Commands.add('Kletsen', (userType, options = {}) => { //methode kletsen
        const tel = 2;
        for (let index = 0; index < tel; index++) {

                cy.get('#msg_input > div.ql-editor.ql-blank > p').type('notifications{enter}') //zeg tegen Slackbot 'notifications'
                cy.wait(2000)
                cy.contains('Set up Slack notifications').scrollIntoView() //controleer of slackbot 'Set up Slack notifications' melding geef
                .should('be.visible')
                cy.get('#msg_input > div.ql-editor.ql-blank > p').type('ga je kerst vieren?{enter}') 
                cy.contains('I have an easier time with a few simple keywords.').scrollIntoView()
                .should('be.visible')
                cy.get('#msg_input > div.ql-editor.ql-blank > p').type('what are the keywords?{enter}') 
                cy.contains('coffee time').scrollIntoView()
                .should('be.visible')  

                cy.get('#msg_input > div.ql-editor.ql-blank > p').type('waar staat je huis?{enter}') 
                cy.get('#msg_input > div.ql-editor.ql-blank > p').type('Preferences{enter}') 
                cy.get('#msg_input > div.ql-editor.ql-blank > p').type('My Keywords{enter}') 
                cy.get('#msg_input > div.ql-editor.ql-blank > p').type('Lust je wortels?{enter}') 
                                
                
        }     
     
     })

     Cypress.Commands.add('Slackbot', (userType, options = {}) => { //methode klik op Slackbot
       cy.get('#col_channels_react_root > nav > div > div:nth-child(1) > div > div.c-scrollbar__hider > div > div > div:nth-child(10) > div > a > span > span')
       .should('be.visible')
       .click()         
       
})





