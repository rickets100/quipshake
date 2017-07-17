const xpath = require('xpath')
const dom = require('xmldom').DOMParser
const xml2js = require('xml2js')
const parseString = require('xml2js').parseString
const fs = require('file-system')
const playList = require('../data-sources/playList')
const createQueryPath = require('./construct-path').createQueryPath
const getTargetFile = require('./construct-path').getTargetFile
const parser = new xml2js.Parser()
const canon = playList.length // 42
const path = require('path')


// ===== LOAD AN XML FILE ✅ =====
function loadXml (playXMLName) {
  var playXML = (path.join(__dirname, '../data-sources/') + playXMLName)
  let targetFile = fs.readFileSync(playXML, 'utf-8')
  let doc = new dom().parseFromString(targetFile)
  return doc
}


// ===== RANDOM NUMBER GENERATOR ✅ =====
function randomNum (limit) {
  let max = Math.floor (limit)
  let random = Math.floor (Math.random() * (max - 1 + 1)) + 1
  return random
} // randomNum


// ===== GET RANDOM ARRAY OF NUMBERS != CORRECT ✅ =====
function randomArray (num, upperLimit, correct) {
  let i = 1
  let arr = []
  while (i<= num) {
    let temp = randomNum(upperLimit)
    if (!(arr.includes(temp)) && (temp != correct)) {
      arr.push(temp)
      i++
    }
  }
  return arr
} // randomArray


// ===== GET A RANDOM PLAY =====
function getRandomPlay() {
  return playList[randomNum(canon)]
} // getRandomPlay


// ===== GET A RANDOM QUESTION TYPE =====
function getRandomQuestionType() {
  return playList[randomNum(canon)]
} // getRandomQuestionType


// ===== RANDOMIZE AN ARRAY (FISHER-YATES) =====
function shuffle(array) {
  console.log('in util shuffle')
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}


module.exports = {
  randomNum,
  randomArray,
  getRandomPlay,
  getRandomQuestionType,
  loadXml,
  shuffle
}
