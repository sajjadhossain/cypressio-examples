# cypress.io examples

This repository will be an installation and collection of cypress functionality. It's something I plan on contributing to to have copy-and-paste functionality to use. I will start with Mocha, but I plan to include Cucumber and as many plugins that I can.

<!--
# peloton exercise

## Task 1

Write an automated to user flow to test the following scenarios on www.pelotoncycle.com​:

* Navigate to Bike > Buy The Bike > Get The Bike > Add To Cart with the defaults
* Various correct and incorrect logins

Use the following credentials:

* p​elotonqa@gmail.com​ / ILoveToRide.

Test on just one browser.

## Task 2

Take a look at the OpenWeather API [h​ttp://openweathermap.org/api](h​ttp://openweathermap.org/api) specifically the endpoint described in [h​ttp://openweathermap.org/current#name​](h​ttp://openweathermap.org/api). W​rite a script that takes a city name as user input and display maximum and minimum temperatures from the result.

## Solutions

Using [cypress.io](http://cypress.io) I packaged together a set of integration tests. I didn't separate the tasks by feature being tested. They're all minimized in the `cypress/integration` folders. These tests cover only four scenarios, however I used modularized code to achieve it.

If you look at the tests ([cypress/integration/peloton/checkout-success.spec.js](./cypress/integration/peloton/checkout-success.spec.js)), you'll see I used some functions to carry out the grunt work of the testing:

```js
describe('Successful checkout', () => {
  beforeEach(() => {
    cy.getABike()
  })

  it('Purchases a basic package as a guest', () => {
    cy.addBasicPackageToCart()
    cy.continueToCheckout()
    cy.checkoutAsGuest()
  })
})
```

The objective was to use cypress and page object patterns to script the following scenarios:

1. Successful checkout - Purchases a basic package as a guest

  ```
  As a user
  I want to checkout as a guest
  So that I can have my basic package
  ```
2. Sign In - Signs in using QA account

  ```
  As a tester
  I want to Sign In
  So that I can access my products
  ```
3. Open Weather API - Gets weather data based on location

  ```
  As a tester
  I want to make a request to Open weather
  So that I can get my weather by city name
  ```

4. Open Weather API - Console logs the highest and the lowest temperatures

  ```
  As a tester
  I want the max and min temperatures
  So that I can print it to the Console
  ```

As per the task, I was asked to create multiple scripts to test multiple scenarios, of both valid and invalid states. As you can see, I've only covered the basics, valid path scenarios, however because I am using commands and page fixtures, I will be able to reuse my functions and data as needed.

# Run the tests

The tests are executed from the command line. Fire up terminal, and navigate to the project root.

## 1. Install

```sh
npm install
```

## 2. Execute npm script

```sh
npm run test
```

**Note:** *To view the console.output, open up the Chrome debugging window, by right-clicking > Inspect > Console.*
-->
