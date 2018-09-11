before(() => {
  cy.hardReset()
})

describe('visitBaseUrl()', () => {
  it('visits the URL in cypress.json, invokes assertBaseUrl()', () => {
    cy.visitBaseUrl('')
  })
})
