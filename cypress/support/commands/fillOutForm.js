// This command fills out the form on the home page
const form = require('../../fixtures/test_application/elements/form')

Cypress.Commands.add('fillOutForm', (id) => {
  cy.visit('#forms')
  cy.assertFormElements(id, form)
})
