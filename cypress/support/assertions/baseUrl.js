// This command makes assertions against the baseUrl
// Needs to be used after visiting base URL via cy.visitBaseUrl()
Cypress.Commands.add('assertBaseUrl', (base) => {
  cy.get(base.header.identifier).should((header) => {
    expect(header).to.contain(base.header.contents.h1)
    expect(header).to.contain(base.header.contents.p)
  })
  cy.get(base.navigation.identifier).should((navigation) => {
    expect(navigation).to.contain(base.navigation.contents.ul.identifier)
  })
})
