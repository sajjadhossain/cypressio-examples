// Called after cy.visitBaseUrl()
// These commands make assertions against the baseUrl

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

// assert top, main, sections, articles, footer
Cypress.Commands.add('assertBaseUrl', (base) => {
  cy.assertHeader(base)
  cy.assertNavigation(base)

  // assert main
  cy.contains(base.main.identifier, base.navigation.contents.ul.links[0]).should('be.visible')

  // assert sections and articles within
  for(let i = 0; i < base.sections.identifiers.length; i += 1) {
    cy.get(base.sections.identifiers[i]).each(() => {
      for(let j = 0; j < base.sections.articles[i].identifiers.length; j += 1) {
        console.log(base.sections.articles[i].identifiers[j])
        cy.get(base.sections.articles[i].identifiers[j]).should((article) => {
          expect(article).to.contain(base.navigation.contents.ul.li[i][j])
        })
      }
    })
  }
})
