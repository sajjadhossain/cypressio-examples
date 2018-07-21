// https://www.onepeloton.com/shop/bike/**-package
module.exports = {
    id: '#root',
    form: 'form',
    CTA: 'CART SUMMARY',
    headline: 'Checkout',
    inputs: {
      email: 'input[data-test-id="checkoutEmail"]',
      firstName: 'input[name="shipping.name.first"]',
      lastName: 'input[name="shipping.name.last"]',
      phone: 'input[name="shipping.phone"]',
      address: '#Address',
      address2: 'input[name="shipping.address.line2"]',
      city: 'input[name="shipping.address.city"]',
      state: 'select[name="shipping.address.state"]',
      code: 'input[name="shipping.address.postalCode"]'
    },
    nextCTA: ['Credit Card', 'Pay Over Time', 'Google Pay'],
    close: 'a[href="/"]'
};
