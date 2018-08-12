before(() => {
  cy.hardReset()
})

describe('Commands', () => {
  it('uses the base URL in configuration', () => {
    cy.visitBaseUrl('')
  })
})
