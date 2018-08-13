const fs = require('fs')
const himalaya = require('himalaya')
const parse = himalaya.parse
const htmlFile = './test-application/index.html'
const jsonFile = './cypress/fixtures/test-application/elements/baseUrl.json'
const html = fs.readFileSync(htmlFile, {encoding: 'utf8'})
const htmlToJson = JSON.stringify(parse(html), null, 2)

fs.writeFile(jsonFile, htmlToJson, function(err) {
  if(err) {
    return console.log(err);
  }
})
