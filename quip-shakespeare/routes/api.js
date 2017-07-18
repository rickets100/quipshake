const express = require('express')
const router = express.Router()
const gameController = require('../game/game-controller')
const fs = require('file-system')
const path = require('path')
const dom = require('xmldom').DOMParser
const util = require('../bin/scripts/utility-functions')
const canon = 42


// @@@@@@@@@@@@ API ROUTES @@@@@@@@@@@@

// ===== FORMULATE QUESTION ✅ =====
router.get ('/', function(req, res, next) {
  console.log('(SERVER)/api/')
  var result = gameController.formulateQuestion(function(question) {
    let data = [
      {
        name:'Formulate Question',
        endpoint:'/api/formulate-question'
      },
      {
        name:'Chronology',
        endpoint:'/api/chronology'
      },
      {
        name:'Character Weight',
        endpoint:'/api/character-weight'
      },
      {
        name:'Character Origin',
        endpoint:'/api/character-origin'
      },
      {
        name:'Quote Origin',
        endpoint:'/api/quote-origin'
      },
      {
        name:'Word Frequency',
        endpoint:'/api/word-frequency'
      },
    ]
    console.log('FORMULATE QUESTION: req', req)
    res.send(data)
  })
})


// ===== FORMULATE A QUESTION ✅ =====
// /api/formulate-question
router.get('/formulate-question', function(req, res, next) {
  console.log('(SERVER)/api/formulate-question')
  let result = gameController.formulateQuestion(function(question) {
    res.send(question)
  })
})


// ===== CHRONOLOGY ✅ =====
// /api/chronology
router.get('/chronology', function(req, res, next) {
  // will need to deal with plays with same date - use 'order' to choose, but have a caveat/explanation on reveal that this is based on wikipedia's entry on the subject, and display the yearRange field for the object
  let correctID = 0 // this type of question does not need to exclude any plays
  let numOptions = 4

  gameController.getNWorks(numOptions)
    .then(function(options) {
      let inOrder = util.sortArrayByOrder(options)
      let first = inOrder[0]
      let data = {
        imageUpdate: false,
        question: 'Which play was published first?',
        questionType: 'chronology',
        options:[
          {
            label: options[0].title,
            yearFirst: options[0].yearFirst,
            yearText: options[0].yearText,
            order:  options[0].order,
            isCorrect: (options[0].order === first),
            isChosen: false
          },
          {
            label: options[1].title,
            yearFirst: options[1].yearFirst,
            yearText: options[1].yearText,
            order:  options[1].order,
            isCorrect: (options[1].order === first),
            isChosen: false
          },
          {
            label: options[2].title,
            yearFirst: options[2].yearFirst,
            yearText: options[2].yearText,
            order:  options[2].order,
            isCorrect: (options[2].order === first),
            isChosen: false
          },
          {
            label: options[3].title,
            yearFirst: options[3].yearFirst,
            yearText: options[3].yearText,
            order:  options[3].order,
            isCorrect: (options[3].order === first),
            isChosen: false
          }
        ]
      } // data
      res.send(data)
    })
})


// ===== CHARACTER-WEIGHT =====
router.get('/character-weight', function(req, res, next) {

  gameController.getNWorks(1)
    .then(function(work) {
      let title = work.title
      let id = work.id
      let idno = 2
      let num = 4 // hardcoded for now
      console.log('random work is ', work)

      gameController.getOneCharacter(idno, num)
        .then(function(characters) {
          console.log('characters are: ', characters)
          let first = characters[0].lines
          let shuffled = util.shuffle(characters)
          let data = {
            imageUpdate: false,
            question: `Of the following, which character from ${title} has the most lines?`,
            questionType: 'character-weight',
            workTitle: work.title,
            options: [
              {
                label: shuffled[0].character,
                lines: shuffled[0].lines,
                isCorrect: (shuffled[0].lines === first)
              },
              {
                label: shuffled[1].character,
                lines: shuffled[1].lines,
                isCorrect: (shuffled[1].lines === first)
              },
              {
                label: shuffled[2].character,
                lines: shuffled[2].lines,
                isCorrect: (shuffled[2].lines === first)
              },
              {
                label: shuffled[3].character,
                lines: shuffled[3].lines,
                isCorrect: (shuffled[3].lines === first)
              }
            ]
          } // data
          res.send(data)
      }) // .then of getNRandomCharacters
    }) // .then of getNWorks
  }) // function router.get



// ===== CHARACTER-ORIGIN =====
router.get('/character-origin', function(req, res, next) {
  let sample = 'CHARACTER NAME'

  gameController.getOneWork().then(function(correctOption) {
    let correctId = correctOption.id
    let correctIdno = correctOption.idno
    let correctTitle = correctOption.title
    let numOptions = 3 // hardcoded for testing for now

    // need logic here to take into account that a character might appear in multiple plays, so can't have any of the "wrong" options actually be another play that they are, in fact, in - perhaps add "unique" to the knex query in the model

    gameController.getOneCharacter(correctIdno).then(function(character) {
      gameController.get3RandomWorks(correctId).then(function(wrongOptions) {
        wrongOptions.push(correctOption)
        let shuffled = util.shuffle(wrongOptions)
        let data = {
          imageUpdate: false,
          question: `In which play does the character of ${character[0].character} appear?`,
          questionType: 'character-origin',
          correcTitle: correctTitle,
          options:[
            {
              label: shuffled[0].title,
              isCorrect: (shuffled[0].title === correctTitle)
            },
            {
              label: shuffled[1].title,
              isCorrect: (shuffled[1].title === correctTitle)
            },
            {
              label: shuffled[2].title,
              isCorrect: (shuffled[2].title === correctTitle)
            },
            {
              label: shuffled[3].title,
              isCorrect: (shuffled[3].title === correctTitle)
            }
          ]
        } // data
        res.send(data)
      })
    })
  })
}) // CHARACTER-ORIGIN


// ===== QUOTE-ORIGIN =====
router.get('/quote-origin', function(req, res, next) {
// will need to limit the size of the text (at least a certain length, but maybe truncated if too long)

  gameController.getOneWork()
    .then(function(correctOption) {
      let correctId = correctOption.id
      let correctIdno = correctOption.idno
      let correctTitle = correctOption.title
      let numOptions = 3 // hardcoded for testing for now

      gameController.get3RandomWorks(correctId).then(function(wrongOptions) {
        wrongOptions.push(correctOption)
        let shuffled = util.shuffle(wrongOptions)
        let doc = util.loadXml(correctOption.xmlName)
        let data = {
          imageUpdate: true,
          test: correctOption,
          question: 'From which play does the following quote derive?',
          questionType: 'quote-origin',
          elaboration: gameController.getSpeech(doc),
          options:[
            {
              label: shuffled[0].title,
              isCorrect: (shuffled[0].title === correctTitle)
            },
            {
              label: shuffled[1].title,
              isCorrect: (shuffled[1].title === correctTitle)
            },
            {
              label: shuffled[2].title,
              isCorrect: (shuffled[2].title === correctTitle)
            },
            {
              label: shuffled[3].title,
              isCorrect: (shuffled[3].title === correctTitle)
            }
          ]
        } // data
      res.send (data)
    }) // .then of get3RandomWorks
  }) // .then of getOneWork
}) // QUOTE-ORIGIN


// ===== CONCORDANCE (WORD FREQUENCY) =====
router.get ('/word-frequency', function(req, res, next) {
  // need a query to the 'most common words' table/object to know which results to reject and retry

  // knex has a 'not in' option (for common words list) and get give the results in random order

  // It is possible in a single SQL statment to say 'give me 4 random rows that are from play X and do not contain the words in this list'
  let example = 'SAMPLE TITLE'
  let data = {
    imageUpdate: false,
    question: `Which of the following occurs more frequently in ${example}?`,
    questionType: 'word-frequency',
    options: [
      {
        label: 'generous',
        isCorrect:true
      },
      {
        label: 'Horatio',
        isCorrect:false
      },
      {
        label: 'dead',
        isCorrect:false
      },
      {
        label: 'does',
        isCorrect:false
      }
    ]
  }
  res.send(data)
}) // CONCORDANCE (WORD FREQUENCY)

module.exports = router
