// https://www.npmjs.com/package/xml2js
// https://www.npmjs.com/package/file-system
// https://www.npmjs.com/package/xpath

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

let currentPlay = playList[1].xmlName
let readPath = (path.join(__dirname, 'data-sources/') + currentPlay)
let writeFileName = (currentPlay.split('.')[0]) + '.js'
let writePath = (path.join(__dirname, '../data-sources/') + writeFileName)
fs.readFile(readPath, function(err, data) {
  parser.parseString(data, function (err, result) {
      console.dir(result)
      let jsonObj = JSON.stringify(result, null, 3)
      fs.writeFile(writeFileName, jsonObj, (err) => {
        if (err) throw err
        console.log('The file has been saved!')
      })
      console.log('Done')
  })
})
