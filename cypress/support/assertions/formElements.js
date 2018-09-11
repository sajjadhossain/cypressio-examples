// Called after cy.fillOutForm()
// These commands make assertions against the form in the home page

Cypress.Commands.add('assertFormElements', (id, form) => {
  // assert text input
  cy.contains(id, form.input__text).should('be.visible')
})
