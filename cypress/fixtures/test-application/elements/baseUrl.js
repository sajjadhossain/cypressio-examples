// This is our element module for the test application's base URL
module.exports = {
  header: {
    identifier: 'header[role="banner"]',
    contents: {
      h1: 'HTML5 Test Page',
      p: 'This is a test page filled with common HTML elements to be used to provide visual feedback whilst building CSS systems and frameworks.'
    }
  },
  navigation: {
    identifier: 'nav[role="navigation"]',
    contents: {
      ul: {
        identifier: '#top > nav > ul',
        total: 3,
        links: [
          'Text',
          'Embedded content',
          'Form elements'
        ],
        li: {
          identifier: '#top > nav > ul > li',
          0: [
            'Headings',
            'Paragraphs',
            'Blockquotes',
            'Lists',
            'Horizontal rules',
            'Tabular data',
            'Code',
            'Inline elements',
            'HTML Comments'
          ],
          1: [
            'Images',
            'Audio',
            'Video',
            'Canvas',
            'Meter',
            'Progress',
            'Inline SVG',
            'IFrames'
          ],
          2: [
            'Input fields',
            'Select menus',
            'Checkboxes',
            'Radio buttons',
            'Textareas',
            'HTML5 inputs',
            'Action buttons'
          ]
        }
      }
    }
  },
  main: {
    identifier: 'main[role="main"]'
  },
  sections: {
    identifiers: [
      '#text',
      '#embedded',
      '#forms'
    ],
    total: 3,
    articles: {
      identifier: 'article',
      0: {
        length: 9
      },
      1: {
        length: 8
      },
      2: {
        length: 7
      }
    }
  }
  // articles: {
  //   identifiers: [
  //
  //   ]
  // }
}
