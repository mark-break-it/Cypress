/// <reference types="cypress" />

import {Login} from './util' 
import {Uitloggen} from './util'
import {Kletsen} from './util'
import {Slackbot} from './util'

describe('Slack', function () {

    beforeEach(function () { //voor elke test wil ik de tekst van de volgende regel zien
        cy.log('Start Slack Slack Slack Slack')
      })
      afterEach(function() {
        cy.Uitloggen() //roep in afterEach de functie Uitloggen aan
        cy.log('That was fun, bye Slack!') //na elke test wil ik de tekst van de volgende regel zien
      })

    it('Slack', function () { //na de beforeEach wordt hier verder gegaan:
      
     
        cy.Login() //inloggen op slack  
        cy.Slackbot() //klik op slackbot   
        cy.Kletsen() //ouwehoeren met Slackbot
      
    })
    }) 