const express = require('express')
const path = require('path')
const xpath = require('xpath')
const dom = require('xmldom').DOMParser
const xml2js = require('xml2js')
const parseString = require('xml2js').parseString
const parser = new xml2js.Parser()
const fs = require('file-system')
const app = express()
const playList = require('../bin/data-sources/playList')
const questionTypes = 15
const canon = 42
const excludeList = ['Luc', 'PhT', 'Son', 'Ven']
const game = require('./game-model').Game
const type = require('./game-model').Type
const random = require('../bin/scripts/utility-functions').randomNum


// ===== GET A RANDOM QUESTION TYPE ✅ =====
function getQuestionType () {
  let randomTypeId = random(questionTypes)
  return type.getType('question_types', randomTypeId)
} // getQuestionType


// ===== FORMULATE QUESTION ✅ =====
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


// ===== GET A SPECIFIC WORK BY IDNO ✅ =====
function getWorkByIDNO (idno){
  return game.getOneWorkByIDNO ('works', idno)
}


// ===== GET A SPECIFIC WORK BY ROW ID ✅ =====
function getWorkByRowId (id) {
  return game.getOneWork('works', id)
}


// ===== GET A RANDOM WORK ✅ =====
function getOneWork() {
  let randomWorkId = random(canon)
  return getWorkByRowId(randomWorkId)
}


// ===== GET N RANDOM WORKS  ✅ ===
function getNRandomWorks(num, toBeExcluded = []) {
  console.log('CONTROLLER: GETNRANDOMWORKS, toBeExcluded is ', toBeExcluded)
  return game.getNRandomWorks('works', num, toBeExcluded)
}


// ===== GET 3 RANDOM WORKS THAT AREN'T A GIVEN WORK  ✅ =====
function get3RandomWorks(correctOption, toBeExcluded = []) {
  let correctIdno = correctOption[0].idno
  return game.getNRandomWorksNotId('works', correctIdno, toBeExcluded)
}



// ===== GET 3 RANDOM WORKS WITHOUT A PARTICULAR CHARACTER  ✅ =====
function test3RandomWorks(correctWorkIdno, character, toBeExcluded = []) {
  return game.test('works', correctWorkIdno, character, toBeExcluded)
}


// ===== GET A RANDOM CHARACTER FROM A GIVEN WORK  ✅ =====
function getNCharacters(workIdno, num, toBeExcluded = []) {
  console.log('CONTROLLER-GETNCHARACTERS: workIdno is ', workIdno)
  console.log('CONTROLLER-GETNCHARACTERS: toBeExcluded is ', toBeExcluded)
  return game.getNRandomCharacters(workIdno, num, toBeExcluded)
}


// ===== GET SCENE COUNT ❌ =====
function getSceneCount(doc) {
  let sceneNodes = 'count(/TEI/text/body/div1[@type="act"]/div2[@type="scene"])'
  let scenes = xpath.evaluate (
    sceneNodes,                  // xpathExpression
    doc,                        // contextNode
    null,                       // namespaceResolver
    xpath.XPathResult.ANY_TYPE, // resultType
    null                        // result
  )

  return scenes.numberValue
}


// ===== GET SPEECH COUNT ✅ =====
function getSpeechCount (doc) {
  let speechNodes = 'count(/TEI/text/body/div1[@type="act"]/div2[@type="scene"]/sp/ab)'
  let speeches = xpath.evaluate(
    speechNodes,                // xpathExpression
    doc,                        // contextNode
    null,                       // namespaceResolver
    xpath.XPathResult.ANY_TYPE, // resultType
    null                        // result
  )
  return speeches.numberValue
}


// ===== GET SPEECH BY INDEX =====
// function getSpeechByIndex (doc, index) {
//   let speechNodes = '/TEI/text/body/div1/div2/sp/ab[' + (index+1) + ']//text()'
//   let masterNode = '/TEI/text/body/div1/div2/sp/ab[' + (index+1)
//   let speaker = masterNode.parentNode
//     // to get the speaker, go up one node to sp, get the "who=" value, chop off the pound sign and everything from the underscore on
//
//   let speeches = xpath.evaluate(
//     speechNodes,                 // xpathExpression
//     doc,                        // contextNode
//     null,                       // namespaceResolver
//     xpath.XPathResult.ANY_TYPE, // resultType
//     null                        // result
//   )
//   return speeches.nodes.join('').split('\r\n\r\n').join(' ').split('  ').join('')
// }


// ===== GET A SINGLE SPEECH =====
function newGetSpeech(doc, index) {
  // the query below will get lb, w, c, and pc nodes
  // let speechNodes = "/TEI/text/body/div1[1]/div2[1]/sp[1]/ab//*[self::lb | self::w | self::c | self::pc]"
  let parent = '/TEI/text/body/div1[@type="act"]/div2[@type="scene"]/sp/ab[' + (index+1) + ']/'
  let speechNodes = `${parent}w` + ` | ` + `${parent}c` + ` | ` + `${parent}pc` + ` | ` + `${parent}lb`
  let result = xpath.evaluate(
      speechNodes,                // xpathExpression
      doc,                        // contextNode
      null,                       // namespaceResolver
      xpath.XPathResult.ANY_TYPE, // resultType
      null                        // result
    )
  let node = result.iterateNext()
  let speech = ""
  let wordCount = 0

  while (node) {
    if (node.nodeName == 'lb') {
      // node.childnodes[0].data will give you a line break as per the source text
      speech = speech + '\n'
    }
    if (node.nodeName == 'w') {
      // node.childnodes[0].data will give you a word
      wordCount++
      speech = speech + node.childNodes[0].data
  }
    if (node.nodeName == 'pc') {
      // node.childnodes[0].data will give you an item of punctuation
      speech = speech + node.childNodes[0].data
}
    if (node.nodeName == 'c') {
      // node.childnodes[0].data will give you a space
      speech = speech + ' '

    }
  node = result.iterateNext()
}
console.log('speech: ', speech)
console.log('length of speech is ', wordCount)
return speech
} // newGetSpeech

// ===== GET A RANDOM SPEECH PART 2: ELECTRIC BOOGALOO =====
function getRandomSpeech (doc) {
  let speechCount = getSpeechCount(doc)
  let index = random(speechCount)
  let randomSpeech = newGetSpeech(doc, index)
  return randomSpeech
}


// ===== GET A RANDOM SPEECH ✅ =====
function getSpeech (doc) {
  let speech = getRandomSpeech (doc)
  return speech
}


module.exports = {
  formulateQuestion,
  getQuestionType,

  getWorkByIDNO,
  getWorkByRowId,
  getOneWork,
  getNRandomWorks,
  get3RandomWorks,
  test3RandomWorks,

  getNCharacters,

  getSceneCount,
  getSpeechCount,
  getRandomSpeech,
  getSpeech,
  newGetSpeech
}
