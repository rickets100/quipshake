/* xpath example: //title[@lang] (select all nodes named lang)
- xpath example: //title[@lang='en'] (select all nodes with lang attribute that have a value of "en")

- //book/title | //book/price (select all title or price elements of the book elements)

- to access the contents of an element’s text node, end the location path with text(), as in /network/description/text()

- To get to an element’s attributes, use an @ in front of the attribute name. For example, /network/description/@name would return name="Boston"

- Example of using predicates: /network/host[@name="agatha"]. This selects the correct <host></host> by testing for the presence of a specific attribute (name) with a specific value of (Agatha)
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

// create a variable for the play's corresponding xml file
  let currentPlay = playList[0].xmlName
  let fullPath = (path.join(__dirname, '../data-sources/') + currentPlay)
  let targetFile = fs.readFileSync(fullPath, 'utf-8')
  let doc = new dom().parseFromString(targetFile)
  // let item = "//person/persName/name/text()"
  let item = "//person[1]"
  let result = xpath.evaluate(item, // xpathExpression
      doc,                        // contextNode
      null,                       // namespaceResolver
      xpath.XPathResult.ANY_TYPE, // resultType
      null                        // result
  )
  let node = result.iterateNext()
  let charList = []
  let charObj = {
    name: "",
    gender: "",
    xmlId: ""
  }


  let sex = xpath.evaluate("./sex/text()", // xpathExpression
      result.nodes[0],                        // contextNode
      null,                       // namespaceResolver
      xpath.XPathResult.ANY_TYPE, // resultType
      null                        // result
  ).nodes[0].nodeValue;
  let name = xpath.evaluate("./persName/name/text()", // xpathExpression
      result.nodes[0],                        // contextNode
      null,                       // namespaceResolver
      xpath.XPathResult.ANY_TYPE, // resultType
      null                        // result
  ).nodes[0].nodeValue;
  console.log("sex",sex)
  console.log("name",name)

  var char = {
    sex:sex,
    name:name
  }
  console.log("char",char)
  // console.log('result: ', result.nodes[0].childNodes)
  // let temp = result.nodes[0].childNodes
  // for (let i=0; i<temp.length; i++) {
  //   console.log('temp[0]: ', temp[i].nodeName)
  // }
  while (node) {
    charList.push(node.data)
    node = result.iterateNext()
}

// console.log('charList: ', charList)
// console.log(charList.length + ' characters in the result')
