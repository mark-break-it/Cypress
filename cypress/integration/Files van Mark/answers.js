/// <reference types="cypress" />
import {login} from './util'

describe('Session 1', function() {
  //skip this test case Deprecated manual function
  it.skip('Login', function() {
    //go to website
    cy.visit('http://localhost:8080/')

    //click to scroll down or scroll right to login either is fine
    cy.get('.menu-scroll-down').click()
    cy.contains('Log in').scrollIntoView()
    .click()

    // login
    cy.url().should('include', '/wp-login.php')
    cy.wait(100)
    cy.get('#user_login').type('fluffy')
    .should('have.value', 'fluffy')
    cy.get('#user_pass').type('workshop')
    cy.get('#wp-submit').click()

    //Check if login worked and you're redirected to admin page
    cy.url().should('include', '/wp-admin')
  })

  describe('Session 1', function() {
    it('Make a post', function() {
      // call on login function in util file
      cy.login()
      cy.visit('http://localhost:8080/wp-admin')

      //navigate to posts to add new entry
      cy.contains('Posts').click()
      cy.contains('Add New').click()

      // use content editor, cypress is not a fan of iframes
      cy.get('#content-html').click()

      //fill the fields
      cy.contains('Enter title here').siblings().type('test')
      cy.get('#title').type('test')
      cy.get('#content').type('test')

      //post
      //js reloading of elements seems to be tricky for cypress
      cy.wait(250)
      cy.get('#publish').scrollIntoView().click()

      //view post
      cy.contains('View post').click()
    })
    
  it('deletes as post', function() {

    cy.login()
    cy.visit('http://localhost:8080/wp-admin/edit.php')

    // Select first from list
    cy.get('#the-list')
    .find('[type="checkbox"]').first()
    .check()

    //could also delete all with beneath option instead of normale check
    // .check({multiple: true})

    cy.get('#bulk-action-selector-bottom').select('trash')
    cy.get('#doaction2').click()

    // clear out trash can
    cy.get('.trash').first().click()
    cy.get('#delete_all').click()

  })

  it('create user', function() {

    cy.login()
    cy.visit('http://localhost:8080/wp-admin')

    cy.contains('Users').click()
    cy.get('.page-title-action').click()
    cy.get('#user_login').type('fluffy2').should('have.value', 'fluffy2')
    cy.get('#email').type('fluf@test.nl').should('have.value', 'fluf@test.nl')
    cy.get('#first_name').type('fluf').should('have.value', 'fluf')
    cy.get('#last_name').type('Meister').should('have.value', 'Meister')
    cy.get('#url').type('www.test.nl').should('have.value', 'www.test.nl')
    cy.contains('Show password').click()
    cy.get('#pass1-text').type('admin').should('have.value', 'admin')
    cy.wait(100)
    cy.get('.pw-checkbox').check()
    cy.get('#send_user_notification').uncheck()
    cy.get('#createusersub').click()

    //delete user first finding name in element and then going back for the checkbox
    cy.get('#the-list a').contains('fluffy2').parentsUntil('#the-list').find('[type="checkbox"]').check()

    //above function replaces old tripple parent
    // cy.get('#the-list a').contains('fluffy2').parent().parent().parent().find('[type="checkbox"]').check()
    cy.get('#bulk-action-selector-bottom').select('delete')
    cy.get('#doaction2').click()
    cy.get('#submit').click()


  })

})
})