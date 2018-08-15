// This command makes assertions against the baseUrl
// Needs to be used after visiting base URL via cy.visitBaseUrl()
Cypress.Commands.add('assertBaseUrl', (base) => {
  cy.get(base.header.identifier).should((header) => {
    expect(header).to.contain(base.header.contents.h1)
    expect(header).to.contain(base.header.contents.p)
  })
  cy.get(base.navigation.identifier).should((navigation) => {
    for(let i = 0; i < base.navigation.contents.ul.length; i += 1) {
      expect(navigation).to.contain(base.navigation.contents.ul.links[i])
    }
  })
  cy.get(base.navigation.contents.ul.contents.identifier).should((list) => {
    for(let i = 0; i < base.navigation.contents.ul.contents.length; i += 1) {
      expect(list).to.contain(base.navigation.contents.ul.contents.links[i])
    }
  })
  // for(let i = 0; i < base.sections.length; i += 1) {
  //   cy.get(base.sections.identifier[i]).should((content) => {
  //     for(let j = 0; j < base.sections.contents.length; j += 1) {
  //       expect(content).to.contain(base.sections.contents.articles[i])
  //     }
  //   })
  // }
})
