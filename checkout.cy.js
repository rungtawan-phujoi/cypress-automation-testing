describe('Checkout Test', () => {
  it('should complete purchase', () => {
    cy.visit('https://www.saucedemo.com')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('.inventory_item').first().click()
    cy.get('.btn_inventory').click()
    cy.get('.shopping_cart_link').click()
    cy.get('#checkout').click()

    cy.get('#first-name').type('Test')
    cy.get('#last-name').type('User')
    cy.get('#postal-code').type('40000')

    cy.get('#continue').click()
    cy.get('#finish').click()

    cy.contains('Thank you')
  })
})
