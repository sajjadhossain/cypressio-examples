// This command makes assertions against the baseUrl
Cypress.Commands.add('assertHeader', (base) => {
  // assert header
  cy.contains(base.header.identifier, base.header.contents.h1).should('be.visible')
  cy.get(base.header.identifier).should((header) => {
    expect(header).to.contain(base.header.contents.h1)
    expect(header).to.contain(base.header.contents.p)
  })
})

Cypress.Commands.add('assertNavigation', (base) => {
  // assert navigation
  cy.contains(base.navigation.identifier, base.navigation.contents.ul.links[0]).should('be.visible')
  cy.get(base.navigation.identifier).should((navigation) => {
    for(let i = 0; i < base.navigation.contents.ul.total; i += 1) {
      expect(navigation).to.contain(base.navigation.contents.ul.links[i])
    }
  })
  cy.get(base.navigation.contents.ul.li.identifier).should((list) => {
    for(let i = 0; i < base.navigation.contents.ul.total; i += 1) {
      for(let j = 0; j < base.navigation.contents.ul.li[i].length; j += 1) {
        expect(list).to.contain(base.navigation.contents.ul.li[i][j])
      }
    }
  })
})

// Needs to be used after visiting base URL via cy.visitBaseUrl()
Cypress.Commands.add('assertBaseUrl', (base) => {
  cy.assertHeader(base)
  cy.assertNavigation(base)

  // assert main
  cy.contains(base.main.identifier, base.navigation.contents.ul.links[0]).should('be.visible')

  // assert sections and articles within
  for(let i = 0; i < base.sections.length; i += 1) {
    cy.get(base.sections.identifiers[i]).should((section) => {
      expect(section).to.contain(base.sections.articles.identifier)
    }).each(() => {
      cy.get(base.sections.articles.identifier).should((article) => {
        expect(article).to.have.length(base.sections.articles[i].total)
      })
    })
  }
})
