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
const createQueryPath = require('./construct-path').createQueryPath
const getTargetFile = require('./construct-path').getTargetFile
const app = express()
const parser = new xml2js.Parser()

// RETRIEVE SUB-NODES FROM INITIAL QUERY =====
function retrieveSubNodes(subNode, nodePath) {
  return xpath.evaluate(nodePath, // xpathExpression
      subNode,                     // contextNode
      null,                       // namespaceResolver
      xpath.XPathResult.ANY_TYPE, // resultType
      null                        // result
  ).nodes[0].nodeValue
} // retrieveSubNodes


// ===== GET ALL PEOPLE =====
function getAllPeople() {
  console.log('in getAllPeople')
  let targetFile = getTargetFile()
  let doc = new dom().parseFromString(targetFile)
  let item = "//person[persName]"
  let result = xpath.evaluate(item, // xpathExpression
      doc,                        // contextNode
      null,                       // namespaceResolver
      xpath.XPathResult.ANY_TYPE, // resultType
      null                        // result
  )
  let node = result.iterateNext()
  let charList = []

  while (node) {
    let name = retrieveSubNodes(node, './persName/name/text()')
    let sex = retrieveSubNodes(node, './sex/text()')
    // let state = retrieveSubNodes(node, './state/p/text()')
    let character = {
      name: name,
      sex: sex
      // state: state
    }
    charList.push(character)
    node = result.iterateNext()
    console.log('character', character)
  } // while
  console.log("characters: ", charList)
} // getAllPeople


// ===== RETRIEVE AN ATTRIBUTE =====
function getPersonAttributes(contextNode) {
  let targetFile = createQueryPath()
  let doc = new dom().parseFromString(targetFile)
  let item = "//person"
  let result = xpath.evaluate(
      item,                        // xpathExpression
      doc,                        // contextNode
      null,                       // namespaceResolver
      xpath.XPathResult.ANY_TYPE, // resultType
      null                        // result
  )
  let node = result.iterateNext()
  console.log('===', node.attributes)

  let test = '//person[1]/death/@notBefore-custom'
  let xmlCharId = xpath.evaluate(
    test,                       // xpathExpression
    doc,                        // contextNode
    null,                       // namespaceResolver
    xpath.XPathResult.ANY_TYPE, // resultType
    null                        // result
  )
  console.log(xmlCharId.nodes[0].nodeValue)
} // getPersonAttributes

getAllPeople()
