// This is our element module for the test application's base URL
module.exports = {
  header: {
    identifier: '#top > header',
    contents: {
      h1: 'HTML5 Test Page',
      p: 'This is a test page filled with common HTML elements to be used to provide visual feedback whilst building CSS systems and frameworks.'
    }
  },
  navigation: {
    identifier: '#top > nav',
    contents: {
      ul: {
        identifier: 'ul',
        length: 3,
        1: {
          identifier: 'nav > ul[0]'
        },
        2: {
          identifier: 'nav > ul[1]'
        },
        3: {
          identifier: 'nav > ul[2]'
        }
      }
    }
  }
}
