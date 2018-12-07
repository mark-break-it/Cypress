describe('inlog en een post aanmaken', function () {
    it('Should open the main page', function () {
    // Schrijf hier je test


    
    // Navigeer naar de url pagina
    cy.visit("http://workshop.break-it.eu/")
    // klik op log in
    cy.contains("Log in").click()
    //gebruikersnaam
    cy.get('#user_login').type('workshop')
    //wachtwoord
    cy.get('#user_pass').type('workshop')
    //klik op ok
    cy.get('#wp-submit').click()
    
    
cy.contains('Posts').trigger('mouseover')

cy.contains('Add New').click({
force: true })
cy.wait(1000)

cy.get('#title').type('Goeiedag')

cy.get('#content').type('Dit is de test van Mo')

cy.get('.button-large').click()

cy.contains('View post').click()


  
   
   
})
})
