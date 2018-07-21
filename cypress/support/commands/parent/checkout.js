var peloton = require('../../../fixtures/peloton/peloton')
var cart = require('../../../fixtures/checkout/cart')
var basicPackage = require('../../../fixtures/checkout/packages/basic')
var subscription = require('../../../fixtures/checkout/packages/subscription')
var checkout = require('../../../fixtures/checkout/checkout')
var randomBruce = require('../../../fixtures/users/guest')

Cypress.Commands.add('continueToCheckout', () => {
  cy.wait(peloton.longerWait)
  cy.get(cart.nextCTA).click()
  cy.wait(peloton.longerWait)
  cy.get('#root').contains(checkout.headline)
  cy.get(checkout.id).should((summary) => {
    expect(summary).to.contain(basicPackage.name)
    expect(summary).to.contain(basicPackage.price)
    if (basicPackage.subscription === true) {
      expect(summary).to.contain(subscription.name)
      expect(summary).to.contain(subscription.price)
      expect(summary).to.contain(subscription.description)
    }
  })
})

Cypress.Commands.add('checkoutAsGuest', () => {
  cy.get(checkout.form).within(() => {
    cy.get(checkout.inputs.email).type(randomBruce.emailAddress)
    cy.get(checkout.inputs.firstName).type(randomBruce.firstName)
    cy.get(checkout.inputs.lastName).type(randomBruce.lastName)
    cy.get(checkout.inputs.phone).type(randomBruce.shipping.phone)
    cy.get(checkout.inputs.address).type(randomBruce.shipping.address)
    cy.get(checkout.inputs.address2).type(randomBruce.shipping.address2)
    cy.get(checkout.inputs.city).type(randomBruce.shipping.city)
    cy.get(checkout.inputs.state).select(randomBruce.shipping.state)
    cy.get(checkout.inputs.code).type(randomBruce.shipping.zip)
    cy.wait(peloton.defaultWait)
    cy.get('button').contains(checkout.nextCTA[0]).click()
  })
})

Cypress.Commands.add('exitCheckout', () => {
  cy.get(checkout.close).click()
  cy.wait(peloton.defaultWait)
})
