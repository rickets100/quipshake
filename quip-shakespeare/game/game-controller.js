const game = require('./game-model').Game
const type = require('./game-model').Type
const random = require('../bin/scripts/utility-functions').randomNum
const questionTypes = 15
const express = require('express')
const path = require('path')
const xpath = require('xpath')
const dom = require('xmldom').DOMParser
const xml2js = require('xml2js')
const parseString = require('xml2js').parseString
const fs = require('file-system')
const playList = require('../bin/data-sources/playList')
const app = express()
const parser = new xml2js.Parser()

// ===== TEST FUNCTION =====



// ===== GET ONE WORK: CONTROLLER =====
function getWorkByIDNO(id){
  return game.getOneWorkByIDNO('works', id)
}

function getWorkByRowId(id){
  return game.getOneWork('works', id)
}

function getOneWork (req, res, next) {
  let randomWorkId = random(42)
  return getWorkByRowId(randomWorkId)
  // return game.getOneWork('works', randomWorkId)
} // getOneWork

// ===== GET QUESTION TYPE =====
function getQuestionType () {
  let randomTypeId = random(questionTypes)
  return type.getType('question_types', randomTypeId)
} // getQuestionType


// ===== FORMULATE QUESTION =====
function formulateQuestion (cb) {
  let question = {
    type: '',
    work: ''
  }
  getQuestionType().then(selectedType => {
    question.type = selectedType
    getOneWork().then(selectedWork => {
      question.work = selectedWork
      cb(question)
    }) // getOneWork
  }) // getQuestionType
} // formulateQuestion


// ===== POPULATE A GIVEN QUESTION =====
function populateQuestion(questionConstraints) {
  // questionConstraints will be the object formulated by formulateQuestion
  // need to now generate a correct answer + as many additional options as is specified by the question type

}


// ===== GET SPEECH =====
function getSceneCount(doc) {
  let sceneNodes = "count(/TEI/text/body/div1/div2)"
  let scenes = xpath.evaluate(
    sceneNodes,                       // xpathExpression
    doc,                        // contextNode
    null,                       // namespaceResolver
    xpath.XPathResult.ANY_TYPE, // resultType
    null                        // result
  )
  console.log('Scenes: ',  scenes.numberValue)
  return scenes.numberValue;
} // getSceneCount

function getSpeechCount(doc) {
  let speechNodes = "count(/TEI/text/body/div1/div2/sp/ab)"
  let speeches = xpath.evaluate(
    speechNodes,                       // xpathExpression
    doc,                        // contextNode
    null,                       // namespaceResolver
    xpath.XPathResult.ANY_TYPE, // resultType
    null                        // result
  )
  console.log('Speeches: ',  speeches.numberValue)
  return speeches.numberValue;
} // getSceneCount

function getSpeechByIndex(doc, index){
  let speechNodes = "/TEI/text/body/div1/div2/sp/ab["+(index+1)+"]//text()";

  let speeches = xpath.evaluate(
    speechNodes,                       // xpathExpression
    doc,                        // contextNode
    null,                       // namespaceResolver
    xpath.XPathResult.ANY_TYPE, // resultType
    null                        // result
  )
  // console.log('Speeches: ',  speeches)
  //console.log("speeches",speeches)
  return speeches.nodes.join("").split("\r\n").join(" ").split("  ").join("");
}

function getRandomSpeech(doc){
  var speechCount = getSpeechCount(doc);
  var index = random(speechCount);
  var randomSpeech = getSpeechByIndex(doc, index);
  console.log("randomSpeech",randomSpeech)
  return randomSpeech;

}

function getSpeech(doc) {
  var speech = getRandomSpeech(doc);
  console.log("speech", speech);
  return speech
}


module.exports = {
  getOneWork,
  getQuestionType,
  formulateQuestion,
  populateQuestion,
  getSpeech,
  getWorkByRowId,
  getWorkByIDNO
}

var result = formulateQuestion(function(question) {
  console.log('RESULT', question)
})
