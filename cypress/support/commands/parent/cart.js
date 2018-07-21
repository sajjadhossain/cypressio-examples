var peloton = require('../../../fixtures/peloton/peloton')
var bike = require('../../../fixtures/bike/get-a-bike')
var cart = require('../../../fixtures/checkout/cart')
var basicPackage = require('../../../fixtures/checkout/packages/basic')
var subscription = require('../../../fixtures/checkout/packages/subscription')

Cypress.Commands.add('addBasicPackageToCart', () => {
  cy.get('p').contains(bike.basicTagline).click()
  cy.wait(peloton.defaultWait)
  cy.get('button').contains(cart.CTA).click()
  cy.wait(peloton.defaultWait)
  cy.get(cart.id).should((summary) => {
    expect(summary).to.contain(cart.headline)
    expect(summary).to.contain(basicPackage.name)
    expect(summary).to.contain(basicPackage.price)
    if (basicPackage.subscription === true) {
      expect(summary).to.contain(subscription.name)
      expect(summary).to.contain(subscription.price)
      expect(summary).to.contain(subscription.description)
    }
  })
  cy.wait(peloton.defaultWait)
})

Cypress.Commands.add('closeCart', () => {
  cy.get(cart.close).click()
  cy.wait(peloton.defaultWait)
})
