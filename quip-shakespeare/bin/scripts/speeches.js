// THIS FILE CAN EVENTUALLY GO AWAY - WAS FOR GETTING CODE UP AND RUNNING

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

let currentPlay = playList[1].xmlName
let targetFile = getTargetFile(currentPlay)
let doc = new dom().parseFromString(targetFile)

  // ===== GET ONE SPEECH =====
  function getSpeech(play, contextNode) {
    let wordNodes = "/TEI/text/body/div1[1]/div2[1]/sp[1]/ab[1]//text()"
    let result = xpath.evaluate(
      wordNodes,                  // xpathExpression
      contextNode,                // contextNode
      null,                       // namespaceResolver
      xpath.XPathResult.ANY_TYPE, // resultType
      null                        // result
    )
    let node = result.iterateNext()
    let speech = ""

    while (node) {
      if (node.data != '\r\n') {
      // console.log('node.nodeValue', node.nodeValue)
      speech = speech + node.nodeValue
    }
    node = result.iterateNext()
  }
  console.log('speech: ', speech)
} // getSpeech

// module.exports = {
//   getSpeech
// }



  // ===== TEST 1 =====
  function test(play, contextNode) {
    let wordNodes = "/TEI/text/body/div1[1]/div2[1]/sp[1]/ab[1]/milestone//@corresp"
    let result = xpath.evaluate(
      wordNodes,                  // xpathExpression
      contextNode,                // contextNode
      null,                       // namespaceResolver
      xpath.XPathResult.ANY_TYPE, // resultType
      null                        // result
    )
    let node = result.iterateNext()
    let speech = ""

    while (node) {
      if (node.data != '\r\n') {
      // console.log('node.nodeValue', node.nodeValue)
      speech = speech + node.nodeValue
    }

    node = result.iterateNext()
  }
  console.log('speech: ', speech)
} // getSpeech




// ===== TEST 2 =====
function newGetSpeech(play, contextNode) {
  //the query below will get lb, w, c, and pc nodes
  // let speechNodes = "/TEI/text/body/div1[1]/div2[1]/sp[1]/ab//*[self::lb | self::w | self::c | self::pc]"
  let parent = "/TEI/text/body/div1[1]/div2[1]/sp[1]/ab/"
  let speechNodes = `${parent}w` + ` | ` + `${parent}c` + ` | ` + `${parent}pc` + ` | ` + `${parent}lb`
  // console.log('query will be ', speechNodes);
   let result = xpath.evaluate(
    speechNodes,                // xpathExpression
    contextNode,                // contextNode
    null,                       // namespaceResolver
    xpath.XPathResult.ANY_TYPE, // resultType
    null                        // result
  )
  let node = result.iterateNext()
  let speech = ""

  while (node) {
    if (node.nodeName == 'lb') {
      speech = speech + '\n'
    }
    if (node.nodeName == 'w') {
      // node.childnodes[0].data will give you a word
      // console.log('node.childNodes[0].data: ', node.childNodes[0].data)
      speech = speech + node.childNodes[0].data
  }
    if (node.nodeName == 'pc') {
      // node.childnodes[0].data will give you an item of punctuation
      // console.log('node.childNodes[0].data: ', node.childNodes[0].data);
      speech = speech + node.childNodes[0].data
}
    if (node.nodeName == 'c') {
      console.log('node.childNodes[0].data: ', node.childNodes[0].data);
      speech = speech + ' '

    }
  node = result.iterateNext()
}
console.log('speech: ', speech)
} // newGetSpeech
