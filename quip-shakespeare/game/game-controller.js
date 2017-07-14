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
function getSpeech(doc) {
  let item = "/TEI/text/body/div1[1]/div2[1]/sp[1]/ab[1]//text()"
  let result = xpath.evaluate(item, // xpathExpression
      doc,                        // contextNode
      null,                       // namespaceResolver
      xpath.XPathResult.ANY_TYPE, // resultType
      null                        // result
  )
  let node = result.iterateNext()
  let speech = ""
  while (node) {
    if (node.data != '\r\n') {
    console.log('node.nodeValue', node.nodeValue)
    speech = speech + node.nodeValue
  }
  node = result.iterateNext()

}
console.log('speech: ', speech)
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
