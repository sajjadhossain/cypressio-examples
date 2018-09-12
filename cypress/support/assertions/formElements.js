// Called after cy.fillOutForm()
// These commands make assertions against the form in the home page

Cypress.Commands.add('assertFormElements', (form) => {
  // assert inputs
  for(let i = 0; i < form.inputs.total; i += 1) {
    cy.get(form.inputs.identifiers[i]).should('be.visible')
  }
})

Cypress.Commands.add('assertInputValues', (form, values) => {
  // assert input values
  for(let i = 0; i < form.inputs.total; i += 1) {
    cy.get(form.inputs.identifiers[i]).should('have.value', values.inputs[i])
  }
})
