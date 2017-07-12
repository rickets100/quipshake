
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
function createQueryPath() {
  let currentPlay = playList[0].xmlName
  let fullPath = (path.join(__dirname, '../data-sources/') + currentPlay)
  return fullPath
} // createQueryPath

function getTargetFile() {
  let path = createQueryPath()
  let targetFile = fs.readFileSync(path, 'utf-8')
  return targetFile
}

createQueryPath()
getTargetFile()

module.exports = {
  createQueryPath,
  getTargetFile
}
