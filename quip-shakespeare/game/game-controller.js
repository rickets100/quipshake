const express = require('express')
const path = require('path')
const xpath = require('xpath')
const dom = require('xmldom').DOMParser
const xml2js = require('xml2js')
const parseString = require('xml2js').parseString
const fs = require('file-system')
const app = express()
const parser = new xml2js.Parser()
const playList = require('../bin/data-sources/playList')
const questionTypes = 15
const game = require('./game-model').Game
const type = require('./game-model').Type
const random = require('../bin/scripts/utility-functions').randomNum

// ===== TEST FUNCTION =====



// ===== GET A SPECIFIC WORK BY IDNO =====
function getWorkByIDNO (idno){
  return game.getOneWorkByIDNO ('works', idno)
}


// ===== GET A SPECIFIC WORK BY ROW ID
function getWorkByRowId (id) {
  return game.getOneWork('works', id)
}


// ===== GET A RANDOM WORK =====
function getOneWork () {
  let randomWorkId = random(42)
  return getWorkByRowId(randomWorkId)
} // getOneWork


// ===== GET A RANDOM QUESTION TYPE =====
function getQuestionType () {
  let randomTypeId = random(questionTypes)
  return type.getType('question_types', randomTypeId)
} // getQuestionType


// ===== FORMULATE QUESTION =====
function formulateQuestion(cb) {
  let question = {
    type: '',
    work: ''
  }
  getQuestionType().then(selectedType => {
    question.type = selectedType
    getOneWork().then(selectedWork => {
      question.work = selectedWork
      cb(question)
    })
  })
  console.log('formulated question is: ', question)
}


// ===== POPULATE A GIVEN QUESTION =====
// function populateQuestion(questionConstraints) {
//   // questionConstraints will be the object formulated by formulateQuestion
//   // need to now generate a correct answer + as many additional options as is specified by the question type
//
// }


// ===== GET SCENE COUNT =====
function getSceneCount(doc) {
  let sceneNodes = 'count(/TEI/text/body/div1/div2)'
  let scenes = xpath.evaluate (
    sceneNodes,                  // xpathExpression
    doc,                        // contextNode
    null,                       // namespaceResolver
    xpath.XPathResult.ANY_TYPE, // resultType
    null                        // result
  )
  // console.log('Scenes: ',  scenes.numberValue)
  return scenes.numberValue
} // getSceneCount


// ===== GET SPEECH COUNT =====
function getSpeechCount (doc) {
  let speechNodes = 'count(/TEI/text/body/div1/div2/sp/ab)'
  let speeches = xpath.evaluate(
    speechNodes,                // xpathExpression
    doc,                        // contextNode
    null,                       // namespaceResolver
    xpath.XPathResult.ANY_TYPE, // resultType
    null                        // result
  )
  // console.log('Speeches: ',  speeches.numberValue)
  return speeches.numberValue
} // getSpeechCount


// ===== GET SPEECH BY INDEX =====
function getSpeechByIndex (doc, index) {
  let speechNodes = '/TEI/text/body/div1/div2/sp/ab[' + (index+1) + ']//text()'
  let speeches = xpath.evaluate(
    speechNodes,                 // xpathExpression
    doc,                        // contextNode
    null,                       // namespaceResolver
    xpath.XPathResult.ANY_TYPE, // resultType
    null                        // result
  )
  // console.log('speech: ', speeches)
  // weirdness below is attempt to work-around the blank text nodes of the xml file
  return speeches.nodes.join('').split('\r\n').join(' ').split('  ').join('')
}


// ===== GET A RANDOM SPEECH PART 2: ELECTRIC BOOGALOO =====
function getRandomSpeech (doc) {
  let speechCount = getSpeechCount(doc)
  let index = random(speechCount)
  let randomSpeech = getSpeechByIndex(doc, index)
  console.log('randomSpeech: ', randomSpeech)
  return randomSpeech
}


// ===== GET A RANDOM SPEECH =====
function getSpeech (doc) {
  let speech = getRandomSpeech (doc)
  console.log ('speech', speech)
  return speech
}


// ===== GET THREE WRONG WORKS ===
function getThreeWrongWorks(idArray) {
  console.log('get three wrong works ', idArray)
  return game.getThreeWorks('works', idArray)
}


module.exports = {
  getWorkByIDNO,
  getWorkByRowId,
  getOneWork,
  getQuestionType,
  formulateQuestion,
  getSceneCount,
  getSpeechCount,
  getSpeechByIndex,
  getRandomSpeech,
  getSpeech,
  getThreeWrongWorks
}

// var result = formulateQuestion(function(question) {
//   console.log('RESULT', question)
// })
