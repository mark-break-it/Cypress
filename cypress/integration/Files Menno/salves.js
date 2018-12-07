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

    beforeEach(() => {
        cy.visit('http://192.168.99.100:8080')
      })

    it('verify homescreen', function() {

        cy.get('.site-title a')
        .should('have.attr','href', 'http://192.168.99.100:8080/')
        .contains('Stevens gayshop') 
        
    })

    it('should login', function() {
        
        login('menno', 'menno')

    })

    it('Makes a post', function() {

        login('menno', 'menno')

        cy.get('#menu-posts > a > div.wp-menu-name').click()
        cy.get('#menu-posts > ul > li:nth-child(3) > a').click()

        cy.get('#title').type('Dit is een title')

        cy.get('#content_ifr').then(function ($el) {
            const $body = $el.contents().find('body')

            const bodyEl = cy.wrap($body)

            bodyEl.find('p').type('Dit is een waarde')
        })
        
        cy.get('#publish').click()
        
    })

    it('Makes a user', function() {
        
        login('menno', 'menno')

        cy.get('#menu-users > a > div.wp-menu-name').click()
        cy.get('#menu-users > ul > li:nth-child(3) > a').click()

        const todaysDate = Cypress.moment().format('SSMMHHMMMDDYYYY')

        cy.get('#user_login').type(todaysDate)
        cy.get('#email').type(todaysDate + '@user1111111.com')
        cy.get('#createusersub').click()
        cy.get('#message > p').contains('New user created. ')
        
    })

    it('Makes a menu', function(){

        login('menno', 'menno')

        const todaysDate = Cypress.moment().format('SSMMHHDDMMYYYY')

        cy.get('#menu-pages > a > div.wp-menu-name').click()
        cy.get('#menu-pages > ul > li:nth-child(3) > a').click()

        cy.get('#title').type('Dit is een page ' + todaysDate)

        cy.get('#content_ifr').then(function ($el) {
            const $body = $el.contents().find('body')

            const bodyEl = cy.wrap($body)

            bodyEl.find('p').type('Dit is een page')

        })
        
        cy.get('#publish').click()
        cy.contains('Page published. ')

        cy.get('#menu-appearance').click()
        cy.get('#menu-appearance > ul > li:nth-child(5) > a').click()

        cy.wait(500)
        cy.get('div.manage-menus a').contains('create a new menu').click({force : true})
        cy.wait(500)

        cy.get('#menu-name').type('Dit is een menu ' + todaysDate)
        cy.get('#nav-menu-header > div > div').click()

        cy.contains('Dit is een page ' + todaysDate).click({force : true})

        cy.get('#submit-posttype-page').click()

        cy.get('div.menu-item-bar div span.item-title span.menu-item-title').contains('Dit is een page ' + todaysDate)

    })

    it('Makes a comment', function() {
        
        login('user1', 'user1')

        cy.get('#menu-dashboard > a > div.wp-menu-name').click()
        cy.get('#published-posts > ul > li:nth-child(1) > a').click()

        cy.get('#comment').type('Dit is een comment')
        cy.get('#submit').click()

        cy.contains('Your comment is awaiting moderation.')

    })

    it('Deletes a post', function() {
        
        login('menno', 'menno')

        cy.get('#menu-posts > a > div.wp-menu-name').click()

        cy.get('tr').eq(1).should('contain', 'Dit is een title').trigger('mouseover').contains('Trash').click({force: true})

        cy.contains('1 post moved to the Trash. ')

    })

    it('Deletes all posts', function() {
        
        login('menno', 'menno')

        cy.get('#menu-posts > a > div.wp-menu-name').click()

        cy.get('#cb-select-all-1').check()
        cy.get('#bulk-action-selector-top').select('trash')
        cy.get('#doaction').click()

        cy.contains(' posts moved to the Trash. ')

    })

})