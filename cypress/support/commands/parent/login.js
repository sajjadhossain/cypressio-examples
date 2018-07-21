var peloton = require('../../../fixtures/peloton/peloton')
var tester = require('../../../fixtures/users/tester')
var login = require('../../../fixtures/peloton/login')

Cypress.Commands.add('useQACredentials', () => {
  cy.get(login.inputs.user).type(tester.emailAddress)
  cy.get(login.inputs.p).type(tester.p)
  cy.get(login.submit).click()
  cy.wait(peloton.defaultWait)
})
