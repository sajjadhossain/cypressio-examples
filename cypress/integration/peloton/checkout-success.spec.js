var peloton = require('../../fixtures/peloton/peloton')

before(() => {
  cy.clearLocalStorage()
  cy.clearCookies()
  cy.visitHomePage()
})

describe('Successful checkout', () => {
  beforeEach(() => {
    cy.getABike()
  })

  it('Purchases a basic package as a guest', () => {
    cy.addBasicPackageToCart()
    cy.continueToCheckout()
    cy.checkoutAsGuest()
  })
})
