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
const canon = 42
const game = require('./game-model').Game
const type = require('./game-model').Type
const random = require('../bin/scripts/utility-functions').randomNum
const randomArray = require('../bin/scripts/utility-functions').randomArray


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
  let randomWorkId = random(canon)
  return getWorkByRowId(randomWorkId)
} // getOneWork


// ===== GET THREE RANDOM WRONG WORKS ===
function getThreeWrongWorks(idArray) {
  return game.getNWorks('works', idArray)
}


// ===== GET FOUR RANDOM WORKS ===
function getFourWorks(idArray) {

  return game.getNWorks('works', idArray)
}


// ===== GET 4 RANDOM WORKS ===
function get4Works() {
  return game.get4RandomWorks('works')
}


// ===== GET 3 RANDOM WORKS =====
function get3RandomWorks(correctId) {
  console.log('OOPS', correctId)
  return game.get3RandomWorksNotId('works', correctId)
}


// ===== GET A RANDOM CHARACTER FROM A GIVEN WORK =====
function getOneCharacter(workIdno) {
  console.log('got to getOneCharacter in the controller');
  // need logic here to take into account that a character might appear in multiple plays, so can't have any of the "wrong" options actually be another play that they are, in fact, in
  return game.getRandomCharacter(workIdno)
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
    work: '',
    numOptions: 4
  }
  getQuestionType().then(selectedType => {
    question.type = selectedType
    question.numOptions = selectedType.num_options
    getOneWork().then(selectedWork => {
      question.work = selectedWork
      cb(question)
    })
  })
}


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
  let masterNode = '/TEI/text/body/div1/div2/sp/ab[' + (index+1)
  let speaker = masterNode.parentNode
    // to get the speaker, go up one node to sp, get the "who=" value, chop off the pound sign and everything from the underscore on

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
  return randomSpeech
}


// ===== GET A RANDOM SPEECH =====
function getSpeech (doc) {
  let speech = getRandomSpeech (doc)
  return speech
}


// ===== GET COUNT OF CHARACTERS IN A GIVEN WORK =====
function getCountOfCharacters(tableName) {
  return game.getCharacterCount(tableName)
}


// ===== GET N RANDOM CHARACTERS FROM A GIVEN WORK =====
function getRandomCharacters(tableName, idArray) {
  return game.getNCharacters(tableName, idArray)
}


module.exports = {
  formulateQuestion,
  get3RandomWorks,
  get4Works,
  getWorkByIDNO,
  getWorkByRowId,
  getOneCharacter,
  getOneWork,
  getQuestionType,
  getSceneCount,
  getSpeechCount,
  getSpeechByIndex,
  getRandomSpeech,
  getSpeech,
  getThreeWrongWorks,
  getFourWorks,
  getCountOfCharacters,
  getRandomCharacters
}
