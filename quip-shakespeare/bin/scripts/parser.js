// https://www.npmjs.com/package/xml2js
// https://www.npmjs.com/package/file-system
// https://www.npmjs.com/package/xpath

// needed to install/require path package
// tried to include express and get it to set a default directory, failed at that
// wound-up using path.join to assemble the path to the test file

/* xpath example: //title[@lang] (select all nodes named lang)
- xpath example: //title[@lang='en'] (select all nodes with lang attribute that have a value of "en")

- //book/title | //book/price (select all title or price elements of the book elements)

- to access the contents of an element’s text node, end the location path with text(), as in /network/description/text()

- To get to an element’s attributes, use an @ in front of the attribute name. For example, /network/description/@name would return name="Boston"

- Example of using predicates: /network/host[@name="agatha"]. This selects the correct <host></host> by testing for the presence of a specific attribute (name) with a specific value of (Agatha)
*/

// test run below:
// var xml = "<root>Hello xml2js!</root>"
// parseString(xml, function (err, result) {
    // console.dir(result)
// })


/*
NOTE: QUOTATION MARKS GET EFFED UP WHEN PASTING INTO COMMAND LINE - TYPE FROM SCRATCH
to remove the namespace line from the file:
grep -vwE "<TEI xmlns=\"http:\/\/www.tei-c.org\/ns\/1.0\">" sourcefile.xml > resultfile.xml

i.e.
grep -vwE "<TEI xmlns=\"http:\/\/www.tei-c.org\/ns\/1.0\">" wiv.xml > wiv-edited.xml
*/

/*
to confirm the beginning of the file was changed:
head -10 wiv.xml > temp.txt
then cat temp.txt
*/

/*
to then add the new namespace:
cat filetobechanged.txt | pbcopy && echo "<TEI xmlns:ws=\"http://www.tei-c.org/ns/1.0\">" > filetobechanged.txt && pbpaste >> filetobechanged.txt

i.e.
cat wiv-edited.txt | pbcopy && echo "<TEI xmlns:ws=\"http://www.tei-c.org/ns/1.0\">" > wiv-edited.txt && pbpaste >> wiv-edited.txt
*/

// ==============================================
const express = require('express')
const path = require('path')
const xpath = require('xpath')
const dom = require('xmldom').DOMParser
const xml2js = require('xml2js')
const parseString = require('xml2js').parseString
const fs = require('file-system')
const playList = require('../data-sources/playList')
const app = express()
const parser = new xml2js.Parser()

// app.set('texts', path.join(__dirname, 'texts')) // didn't seem to work

// create a variable for each play's corresponding xml file
// playList.forEach(function(play){
  // let currentPlay = play.fileName
  let currentPlay = playList[0].xmlName
  let fullPath = (path.join(__dirname, '../data-sources/') + currentPlay)
  let targetFile = fs.readFileSync(fullPath, 'utf-8')
  let doc = new dom().parseFromString(targetFile)
  // let bob = "/TEI/text/body/div1[1]/div2[1]/sp[1]/ab/(w/text()"
  // console.log('=====', bob);
  let item = "/TEI/text/body/div1[1]/div2[1]/sp[1]/ab[1]//text()"
  let result = xpath.evaluate(item, // xpathExpression
      doc,                        // contextNode
      null,                       // namespaceResolver
      xpath.XPathResult.ANY_TYPE, // resultType
      null                        // result
  )
  let node = result.iterateNext()
  let speech = ""

  console.log('currentPlay: ', currentPlay)
  console.log(result)

  while (node) {
    if (node.data != '\r\n') {
    console.log('node.nodeValue', node.nodeValue)
    speech = speech + node.nodeValue
  }
  node = result.iterateNext()

}
console.log('speech: ', speech)

// }) // forEach

// fs.readFile(fullPath, function(err, data) {
  // console.log(data);
  // parser.parseString(data, function (err, result) {

      // console.dir(result)
      // let jsonObj = JSON.stringify(result, null, 3)
      // let numFiles = playList.length
      // let currentFile = playList[0].fileName
      // // console.log(currentFile)
      // fs.writeFile('testwrite.txt', jsonObj, (err) => {
      //   if (err) throw err
      //   // console.log('The file has been saved!')
      // })
      // console.log('Done')
//   })
// })
