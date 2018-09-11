before(() => {
  cy.hardReset()
})

describe('fillOutForm()', () => {
  it('fills out form on homepage', () => {
    cy.fillOutForm('form')
  })
})
