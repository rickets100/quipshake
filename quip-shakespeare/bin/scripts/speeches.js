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
  // let bob = "/TEI/text/body/div1[1]/div2[1]/sp[1]/ab/(w/text()"
  // console.log('=====', bob);


  function getStuff(doc) {
    let item = "/TEI/text/body/div1[1]/div2[1]/sp[1]/ab[1]//text()"
    let result = xpath.evaluate(
      item,                       // xpathExpression
      doc,                        // contextNode
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
} // getStuff

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
