var rndm = () => {
  return Math.floor(Math.random() * 999999)
}
var first = 'Bruce'
var last = 'Wayne'
var email = 'bruce'
var plus = '+'
var domain = '@wayneenterprises.com'
var shipping = {
  address: '555 Broadway',
  address2: 'Penthouse',
  phone: '212-123-4567',
  city: 'New York',
  state: 'NY',
  zip: '10001'
}

module.exports = {
  firstName: first + rndm(),
  lastName: last + rndm(),
  emailAddress: email + plus + rndm() + domain,
  shipping: shipping
}
