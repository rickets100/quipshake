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

// ===== RETRIEVE SUB-NODES FROM INITIAL QUERY =====
function retrieveSubNodes(subNode, nodePath) {
  return xpath.evaluate(nodePath, // xpathExpression
      subNode,                     // contextNode
      null,                       // namespaceResolver
      xpath.XPathResult.ANY_TYPE, // resultType
      null                        // result
  ).nodes[0].nodeValue
}


// ===== GET ALL PEOPLE =====
function getAllPeople(playId) {
  let currentPlay = playList[playId].xmlName
  let targetFile = getTargetFile (currentPlay)
  let doc = new dom().parseFromString (targetFile)
  let item = "//person[persName]"
  let result = xpath.evaluate(
    item,                       // xpathExpression
    doc,                        // contextNode
    null,                       // namespaceResolver
    xpath.XPathResult.ANY_TYPE, // resultType
    null                        // result
  )
  let node = result.iterateNext()
  let charList = []

  while (node) {
    let name = retrieveSubNodes (node, './persName/name/text()')
    let sex = retrieveSubNodes (node, './sex/text()')
    let character = {
      name: name,
      sex: sex
    }
    charList.push(character)
    node = result.iterateNext()
  }
}


// ===== GET NUMBER OF SPEECHES FOR A CHARACTER =====
function getCharacterSpeeches(character) {
  let currentPlay = playList[14].xmlName // Hamlet
  let targetFile = getTargetFile(currentPlay)
  let doc = new dom().parseFromString(targetFile)
  let speechNodes = `count(/TEI/text/body/div1/div2/sp[@who='${character}'])`
  let speeches = xpath.evaluate(
    speechNodes,                 // xpathExpression
    doc,                        // contextNode
    null,                       // namespaceResolver
    xpath.XPathResult.ANY_TYPE, // resultType
    null                        // result
  )
  console.log('speeches: ',  speeches.numberValue)
}


// ===== GET NUMBER OF LINES FOR A CHARACTER =====
function getCharacterLines(character) {
  let currentPlay = playList[14].xmlName // Hamlet
  let targetFile = getTargetFile(currentPlay)
  let doc = new dom().parseFromString(targetFile)
  let lineNodes = `count(/TEI/text/body/div1/div2/sp[@who='${character}']/ab/milestone[@unit='ftln'])`
  let lines = xpath.evaluate(
    lineNodes,                  // xpathExpression
    doc,                        // contextNode
    null,                       // namespaceResolver
    xpath.XPathResult.ANY_TYPE, // resultType
    null                        // result
  )
  console.log('lines: ',  lines.numberValue)
}


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
  let test = '//person[1]/death/@notBefore-custom'
  let xmlCharId = xpath.evaluate(
    test,                       // xpathExpression
    doc,                        // contextNode
    null,                       // namespaceResolver
    xpath.XPathResult.ANY_TYPE, // resultType
    null                        // result
  )
  console.log(xmlCharId.nodes[0].nodeValue)
}

module.exports = {
  retrieveSubNodes,
  getAllPeople,
  getCharacterSpeeches,
  getCharacterLines
}
