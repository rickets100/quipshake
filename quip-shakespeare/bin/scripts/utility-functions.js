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
let numPlays = playList.length

// ===== GENERATE A RANDOM NUMBER =====
function makeRandomNum(max) {
  console.log('in makeRandomNum()')
  return "yay"
} // makeRandomNum

// ===== GET A RANDOM PLAY =====
function getRandomPlay() {
  console.log('in getRandomPlay()')
  return selectedPlay = playList[makeRandomNum(numPlays)]
} // getRandomPlay

// ===== GET A RANDOM QUESTION TYPE =====
function getRandomQuestionType() {
  console.log('in getRandomQuestionType()')
  return questionType = playList[makeRandomNum(numPlays)]
} // getRandomQuestionType

module.exports = {
  makeRandomNum,
  getRandomPlay
}
