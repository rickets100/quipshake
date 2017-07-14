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

let currentPlay = playList[0].xmlName
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

getSpeech(currentPlay, doc)
