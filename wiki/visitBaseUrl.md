# visitBaseUrl

This method visits the base URL from `cypress.json` in the root of the project. It is different from `visit` in that it invokes the `assertBaseUrl` method when called. In order to use this baseUrl function agnostically, you need to change the fixtures it asserts against in `fixtures/test-application/elements/baseUrl.js` and change the loop logic in `cypress/support/assertions/baseUrl.js`.

We should use Cypress commands in this fashion because it is both modular and allows us to reuse the commands dynamically.

Use `cy.visitBaseUrl('')` to call this method.

## page object

The page object should look like this:

```js
module.exports = {
  header: {
    identifier: '#uniqueID',
    contents: {
      h1: 'Header Content',
      p: 'Some paragraph text that is in the header.'
    }
  }
}
```
