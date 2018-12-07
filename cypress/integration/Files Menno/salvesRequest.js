export function login (username, password) {
    
    cy.log('Start of login')

    cy.get('#meta-2 > ul > li:nth-child(1) > a').click()
    cy.wait(1000)
    cy.get("#user_login").type(username)
    cy.get("#user_pass").type(password)
    cy.get("#wp-submit").click()
    
    cy.log('End of login')

  }

describe('My first test', function() {

    // beforeEach(() => {
    //     cy.visit('http://192.168.99.100:8080')
    //   })

    it('should login by request', function() {

        cy.request({
            method: 'POST',
            url: 'http://the-internet.herokuapp.com/authenticate', // baseUrl is prepended to url
            form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            body: {
              username: 'tomsmith',
              password: 'SuperSecretPassword!'
            }
          })
          
          // just to prove we have a session
          //cy.getCookie('rack.session').should('exist')
          //cy.getCookies()
        //
    })

    it('should login by request', function() {

      cy.request({
          method: 'POST',
          url: 'http://192.168.99.100:8080/wp-login.php', // baseUrl is prepended to url
          form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
          body: {
            log: 'menno',
            pwd: 'menno'
            //wp-submit: 'Log in'
          }
        })
        
        // just to prove we have a session
        //cy.getCookies()
        //cy.getCookie('wp-settings-1').should('exist')
      //http://192.168.99.100:8080/wp-login.php

      cy.request({
        method: 'GET',
        url: 'http://192.168.99.100:8080/wp-admin/'
      })
  })

  it('should create a user and logout', function() {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=1'
    }).then((res) => {

      cy.log(res.body.data[0])

      res.body.data.forEach(usr => {

        cy.visit('https://www.phptravels.net/register')

        const todaysDate = Cypress.moment().format('SSMMHHMMMDDYYYY')
        
        cy.get('#headersignupform > div:nth-child(3) > input').type(usr.first_name)
        cy.get('#headersignupform > div:nth-child(4) > input').type(usr.last_name)
        cy.get('#headersignupform > div:nth-child(5) > input').type('0612345678')
        cy.get('#headersignupform > div:nth-child(6) > input').type(todaysDate + 'test@test.com')
        cy.get('#headersignupform > div:nth-child(7) > input').type('stevenisgay')
        cy.get('#headersignupform > div:nth-child(8) > input').type('stevenisgay')
        cy.get('#headersignupform > div:nth-child(9) > button').click()
        
        cy.request({
          method: 'GET',
          url: 'https://www.phptravels.net/account/logout/'
        })

      });

      

    })

    
})

})