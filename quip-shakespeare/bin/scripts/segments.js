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

let currentPlay = playList[32].xmlName
let targetFile = getTargetFile(currentPlay)
let doc = new dom().parseFromString(targetFile)

// ===== GET ACT COUNT =====
function getActCount() {
  let actNodes = "count(/TEI/text/body/div1)"
  let acts = xpath.evaluate(
    actNodes,                   // xpathExpression
    doc,                        // contextNode
    null,                       // namespaceResolver
    xpath.XPathResult.ANY_TYPE, // resultType
    null                        // result
  )
  console.log('Acts: ',  acts.numberValue)
} // getActCount

// ===== GET SCENE COUNT =====
function getSceneCount() {
  let sceneNodes = "count(/TEI/text/body/div1/div2)"
  let scenes = xpath.evaluate(
    sceneNodes,                       // xpathExpression
    doc,                        // contextNode
    null,                       // namespaceResolver
    xpath.XPathResult.ANY_TYPE, // resultType
    null                        // result
  )
  console.log('Scenes: ',  scenes.numberValue)
} // getSceneCount

getActCount()
getSceneCount()

module.exports = {
  getActCount,
  getSceneCount
}
