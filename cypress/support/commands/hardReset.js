// This command resets the browser session
Cypress.Commands.add('hardReset', () => {
  cy.clearLocalStorage()
  cy.clearCookies()
})
