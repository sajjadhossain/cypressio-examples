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
        identifier: '#top > nav > ul',
        length: 3,
        links: [
          'Text',
          'Embedded content',
          'Form elements'
        ],
        contents: {
          identifier: '#top > nav > ul > li',
          length: 24,
          links: [
            'Headings',
            'Paragraphs',
            'Blockquotes',
            'Lists',
            'Horizontal rules',
            'Tabular data',
            'Code',
            'Inline elements',
            'HTML Comments',
            'Images',
            'Audio',
            'Video',
            'Canvas',
            'Meter',
            'Progress',
            'Inline SVG',
            'IFrames',
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
  sections: {
    identifiers: [
      '#text',
      '#embedded',
      '#forms'
    ],
    length: 3,
    contents: {
      length: 9,
      articles: [
        'Headings',
        'Paragraphs',
        'Blockquotes',
        'Lists',
        'Horizontal rules',
        'Tabular data',
        'Code',
        'Inline elements',
        'HTML Comments'
      ]
    }
  },
  articles: {
    identifiers: [

    ]
  }
}
