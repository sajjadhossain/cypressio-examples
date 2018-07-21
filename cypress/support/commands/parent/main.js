var peloton = require('../../../fixtures/peloton/peloton')
var menu = require('../../../fixtures/peloton/menu')
var bike = require('../../../fixtures/bike/get-a-bike')

Cypress.Commands.add('visitHomePage', () => {
  cy.visit(peloton.baseURL)
  cy.title().should('equal', peloton.pageTitle)
})

Cypress.Commands.add('openMenu', () => {
  cy.get(peloton.elements.menu).click()
  cy.wait(peloton.defaultWait)
})

Cypress.Commands.add('logIn', () => {
  cy.get(menu.id).contains(menu.links[7]).click()
  cy.wait(peloton.defaultWait)
})

Cypress.Commands.add('getABike', () => {
  cy.get('a').find('button').contains(peloton.buyCTA).click()
  cy.wait(peloton.defaultWait)
  cy.get('a').contains(bike.buyCTA).click()
  cy.wait(peloton.defaultWait)
})
