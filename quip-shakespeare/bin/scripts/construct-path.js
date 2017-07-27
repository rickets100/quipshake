// THIS FILE CAN EVENTUALLY GO AWAY - WAS FOR GETTING CODE UP AND RUNNING

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

// ===== CREATE QUERY PATH =====
function createQueryPath(play) {
  let fullPath = (path.join(__dirname, '../data-sources/') + play)
  return fullPath
} // createQueryPath


// ===== GET TARGET FILE =====
function getTargetFile(play) {
  let path = createQueryPath(play)
  let targetFile = fs.readFileSync(path, 'utf-8')
  return targetFile
} // getTargetFile

module.exports = {
  createQueryPath,
  getTargetFile
}
