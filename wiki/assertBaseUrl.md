# assertBaseUrl

This method can only really be used after `visit('/')` or `cy.visitBaseUrl('')`. In order to use this command to assert against another page, duplicate it, and change the fixtures it asserts against in `fixtures/test-application/elements/baseUrl.js` and change the loop logic in `cypress/support/assertions/baseUrl.js`.

We should use Cypress commands in this fashion because it is both modular and allows us to reuse the commands dynamically.

**This method needs to be passed a page object like: [baseUrl.js](fixtures/test-application/elements/baseUrl.js)**

Use `cy.assertBaseUrl(<base>)` to call this method.

## assertHeader

This method is invoked when `assertBaseUrl` is called and can also be called outside of it. **This method needs to be passed a page object**. Use `cy.assertHeader(<base>)` to call this method.

## assertNavigation

This method is invoked when `assertBaseUrl` is called and can also be called outside of it. **This method needs to be passed a page object**. Use `cy.assertNavigation(<base>)` to call this method.

### page object

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
