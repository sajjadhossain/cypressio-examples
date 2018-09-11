// This command visits base URL and validates it
const base = require('../../fixtures/test_application/elements/base')

Cypress.Commands.add('visitBaseUrl', () => {
  cy.visit('')
  cy.assertBaseUrl(base)
})
