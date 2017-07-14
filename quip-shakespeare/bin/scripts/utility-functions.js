const xpath = require('xpath')
const dom = require('xmldom').DOMParser
const xml2js = require('xml2js')
const parseString = require('xml2js').parseString
const fs = require('file-system')
const playList = require('../data-sources/playList')
const createQueryPath = require('./construct-path').createQueryPath
const getTargetFile = require('./construct-path').getTargetFile
const parser = new xml2js.Parser()
const numPlays = playList.length

// ===== RANDOM NUMBER GENERATOR =====
function randomNum (limit) {
  let max = Math.floor(limit)
  let random = Math.floor(Math.random() * (max - 1 + 1)) + 1
  return random
} // randomNum

// ===== GET A RANDOM PLAY =====
function getRandomPlay() {
  let selectedPlay = playList[randomNum(numPlays)]
  return selectedPlay
} // getRandomPlay

// ===== GET A RANDOM QUESTION TYPE =====
function getRandomQuestionType() {
  let questionType = playList[randomNum(numPlays)]
  return questionType
} // getRandomQuestionType

module.exports = {
  randomNum,
  getRandomPlay,
  getRandomQuestionType
}

getRandomQuestionType()
getRandomPlay()
