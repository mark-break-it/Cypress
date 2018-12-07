describe('Log & add to basket', function () {
    it('login', function () {
    //  In te loggen en via request iets toevoegen aan basket
     
    //inlog & return to homepage
    cy.visit('http://automationpractice.com/index.php?controller=my-account')
    cy.get("#email").click().type("denesh_banwarie@hotmail.com")
    cy.get("#passwd").click().type("Test1234")
    cy.get("#SubmitLogin").click()
    cy.get("#header_logo > a > img").click()

    
    // add to basket via request  
    cy.request({
        method: 'POST',
        url: 'http://automationpractice.com/index.php?rand=1544104931278', // baseUrl is prepended to url
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
          body: {
          controller: 'cart',
          add: '1',
          ajax: true,
          qty: '1',
          id_product: '7',
          token: '8ffc0ea3a2b7256f4878e1ffd02d387b', 
        }
      })
    //Verify in basket
      cy.get("#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a").click()
      cy.get('#product_7_34_0_121247 > td.cart_description > p > a').should("be.visible")

    //sign out
    cy.get("#header > div.nav > div > div > nav > div:nth-child(2) > a").click()

    //return to homepage
    cy.get("#header_logo > a > img").click()

    })
    })