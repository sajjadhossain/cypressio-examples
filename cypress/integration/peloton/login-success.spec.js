var peloton = require('../../fixtures/peloton/peloton')
var menu = require('../../fixtures/peloton/menu')

before(() => {
  cy.clearLocalStorage()
  cy.clearCookies()
  cy.visitHomePage()
})

describe('Sign In', () => {
  it('Signs in using QA account', () => {
    cy.openMenu()
    cy.logIn().useQACredentials()
  })
})
