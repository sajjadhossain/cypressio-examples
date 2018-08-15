// This command visits base URL and validates it
const base = require('../../fixtures/test-application/elements/baseUrl')

Cypress.Commands.add('visitBaseUrl', () => {
  cy.visit('')
  cy.assertBaseUrl(base)
})
