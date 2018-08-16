# CypressIO examples

This repository is a collection of CypressIO examples. It will provide copy-and-paste commands and snippets to use agnostically with any installation of CypressIO.

## Abstract
What is [CypressIO](https://www.cypress.io)? Take a gander through their site, specifically their [how it works](https://www.cypress.io/how-it-works/) section. CypressIO is an integration test framework. It is different from other frameworks in that it gives developers and quality engineers tools needed to debug and create BDD-style tests seamlessly. 

### How it works
It uses an Electron (Chrome) browser, either headless or headed. Using Mocha-style code, you `describe` your feature in a number of `it` clauses. After adding a spec that uses their API, some of which is unique and highly programmable, like `get()` and `should()`, use either the CLI or GUI to run your tests.

### Benefits
The benefits of choosing this framework are also available on their site, just incase, here they are:

1. **Sans-selenium**. In an age where Selenium WebDriver is implemented poorly due to ever changing webkit technology, CypressIO uses its own driver to work around the problem and offer more to the developer and test engineer.
2. **End-to-end**. This framework was designed with e2e and integration in mind. From the programmability of their API, to their robust driver, end-to-end testing never became more scaleable.
3. **Front-end or Back-end**. Doesn't matter if you're testing front-end or back-end functionality, this framework can do it all.
4. **JS FTW**. This framework leverages the modularization and object-oriented traits of JavaScript.
5. **Single installation**. Aside from NodeJS and NPM, you only need to run one command line. That's refreshing!
6. **Developers in mind**. This framework was made for developers and quality engineers alike, poke around and you'll see what I mean.
7. **Lightning-speed**. Electron and JavaScript, need I say more? As fast as PhantomJS, as debuggable as Chrome.

## Roadmap

### MVP v0.0.1

- Reusable commands
    - `visitBaseUrl`
    - `pageShouldContain`
    - `fillInForm`
- API examples
    - `request`
    - `post`

### Features

- [x] `visitBaseUrl`: Visits using the configuration JSON in project root. Uses `assertBaseUrl` to assert page is visited.
    - [x] `hardReset`: Resets the entire browser and its cache.
    - [x] `assertBaseUrl`: Asserts a traversed element module that represents the base URL. See [baseUrl.js](./cypress/fixtures/test-application/elements/baseUrl.js).
    - [ ] Wiki documentation for `visitBaseUrl` and `assertBaseUrl`
- [ ] `pageShouldContain`: Parameterized command that takes `string`, `tag`, `attributes` when making an assertion against an element on the page.
- [ ] `fillInForm`: Parameterized command that fills in form with `id`, `values`, `submit`. `submit` is a boolean that submits the form upon filling.

## Get started
The tests are executed from the command line. Fire up terminal, and navigate to the project root.

### 1. Install

```sh
npm install
```

### 2. Install CypressIO (first timers only)

```sh
./node_modules/.bin/cypress install
```

### 2. Execute npm script

```sh
npm run test
```
