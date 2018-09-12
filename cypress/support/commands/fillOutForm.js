// This command fills out the form on the home page
const form = require('../../fixtures/test_application/elements/form')
const values = require('../../fixtures/test_application/data/values')

Cypress.Commands.add('fillOutForm', () => {
  cy.visit('#forms')
  cy.assertFormElements(form)
  for(let i = 0; i < form.inputs.total; i += 1) {
    cy.get(form.inputs.identifiers[i]).type(values.inputs[i])
  }
  cy.assertInputValues(form, values)
})
