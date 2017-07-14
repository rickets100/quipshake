var express = require('express')
var router = express.Router()
var gameController = require('../game/game-controller')
const fs = require('file-system')
const path = require('path')
const dom = require('xmldom').DOMParser
//var gameController = require('./game-model').Game


// @@@@@@ API ROUTES @@@@@@

// ===== FORMULATE QUESTION =====
router.get('/', function(req, res, next) {
  var result = gameController.formulateQuestion(function(question) {
    var data = [
      {
        name:"Formulate Question",
        endpoint:"/api/formulate-question"
      },
      {
        name:"Chronology",
        endpoint:"/api/chronology"
      },
      {
        name:"Character Weight",
        endpoint:"/api/character-weight"
      },
      {
        name:"Character Origin",
        endpoint:"/api/character-origin"
      },
      {
        name:"Quote Origin",
        endpoint:"/api/quote-origin"
      },
      {
        name:"Word Frequency",
        endpoint:"/api/word-frequency"
      },
    ]
    console.log("req",req)
    res.send(data)
  })
})

// ===== FORMULATE A QUESTION =====
// /api/formulate-question
router.get('/formulate-question', function(req, res, next) {
  var result = gameController.formulateQuestion(function(question) {
    console.log('QUESTION IS: ', question)
    res.send(question)
  })
})

// ===== CHRONOLOGY QUESTION =====
// /api/chronology
router.get('/chronology', function(req, res, next) {
  /**
  This should return the data required (json) to serve a chronology question
  **/
  var data = {
    question:"Which play was published first?",
    options:[
      {
        label:"The Taming of the Shrew",
        isCorrect:true
      },
      {
        label:"Play 2",
        isCorrect:false
      },
      {
        label:"Play 3",
        isCorrect:false
      },
      {
        label:"Play 4",
        isCorrect:false
      }
    ]
  }
  res.send(data)
})

// ===== CHARACTER-WEIGHT =====
router.get('/character-weight', function(req, res, next) {
  /**
  This should return the data required (json) to serve a character-weight question
  **/
  // figure out how I am going to choose to get the info about line concordance

  let data = {
    question:"Of the following, which character from The Merry Wives of Windsor has the most lines?",
    options:[
      {
        label:"Slender",
        isCorrect:true
      },
      {
        label:"Master Page",
        isCorrect:false
      },
      {
        label:"Bardolph",
        isCorrect:false
      },
      {
        label:"Shallow",
        isCorrect:false
      }
    ]
  }
  res.send(data)
})


// ===== CHARACTER-ORIGIN =====
router.get('/character-origin', function(req, res, next) {
  /**
  This should return the data required (json) to serve a character-origin question
  **/

  let data = {
    question:"Name the play from whence the character of {your name here} comes:",
    options:[
      {
        label:"The Taming of the Shrew",
        isCorrect:true
      },
      {
        label:"Play 2",
        isCorrect:false
      },
      {
        label:"Play 3",
        isCorrect:false
      },
      {
        label:"Play 4",
        isCorrect:false
      }
    ]
  }
  res.send(data)
})

// ===== LOAD AN XML FILE =====
function loadXml(playXMLName){
  var playXML = (path.join(__dirname, '../bin/data-sources/') + playXMLName)
  let targetFile = fs.readFileSync(playXML, 'utf-8')
  let doc = new dom().parseFromString(targetFile)
  return doc
}

router.get('/quote-origin', function(req, res, next) {
  /**
  This should return the data required (json) to serve a quote-origin question
  **/
  var playId = "Ado"; //TODO: this should come from request
  gameController.getWorkByIDNO(playId).then(function(selectedWork){

    var doc = loadXml(selectedWork.xmlName)

    var data = {
      test:selectedWork,
      question:"From which play does the following quote derive?",
      elaboration: gameController.getSpeech(doc),
      options:[
        {
          label:selectedWork.title,
          isCorrect:true
        },
        //TODO: KNEX: select 3 RANDOM plays where IDNO IS NOT = playId
        // This should be a function in game-controller called gameController.getRandomPlays(numPlays, ignoreIDNO)
        {
          label:"Play 2",
          isCorrect:false
        },
        {
          label:"Play 3",
          isCorrect:false
        },
        {
          label:"Play 4",
          isCorrect:false
        }
      ]
    }
    //TODO: random sort data.options
    res.send(data)
  })


})


router.get('/word-frequency', function(req, res, next) {
  /**
  This should return the data required (json) to serve a word-frequency question
  **/

  // need a query to the "most common words" table/object to know which results to reject and retry

  // knex has a "not in" option (for common words list) and get give the results in random order

  // It is possible in a single SQL statment to say "give me 4 random rows that are from play X and do not contain the words in this list"

  var data = {
    question:"Which of the following occurs more frequently in {play name}?",
    options:[
      {
        label:"generous",
        isCorrect:true
      },
      {
        label:"Horatio",
        isCorrect:false
      },
      {
        label:"dead",
        isCorrect:false
      },
      {
        label:"does",
        isCorrect:false

      }
    ]
  }

  res.send({"data":"word-frequency"})
})

module.exports = router
