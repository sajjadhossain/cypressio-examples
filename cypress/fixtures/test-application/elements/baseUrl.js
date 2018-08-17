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
    articles: {
      0: {
        identifiers: [
          '#text__headings',
          '#text__paragraphs',
          '#text__blockquotes',
          '#text__lists',
          '#text__hr',
          '#text__tables',
          '#text__code',
          '#text__inline',
          '#text__comments'
        ]
      },
      1: {
        identifiers: [
          '#embedded__images',
          '#embedded__audio',
          '#embedded__video',
          '#embedded__canvas',
          '#embedded__meter',
          '#embedded__progress',
          '#embedded__svg',
          '#embedded__iframe'
        ]
      },
      2: {
        identifiers: [
          '#forms'
        ]
      }
    }
  }
}
