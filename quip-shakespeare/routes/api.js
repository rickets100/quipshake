const express = require('express')
const router = express.Router()
const gameController = require('../game/game-controller')
const path = require('path')
const dom = require('xmldom').DOMParser
const util = require('../bin/scripts/utility-functions')
const canon = 42
const excludeList = ['Luc', 'PhT', 'Son', 'Ven']


// @@@@@@@@@@@@ API ROUTES @@@@@@@@@@@@

// ===== FORMULATE QUESTION ✅ =====
router.get ('/', function(req, res, next) {
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
    res.send(data)
  })
})


// ===== FORMULATE A QUESTION ✅ =====
// /api/formulate-question
router.get('/formulate-question', function(req, res, next) {
  let result = gameController.formulateQuestion(function(question) {
    res.send(question)
  })
})


// ===== CHRONOLOGY ✅ =====
// /api/chronology
router.get('/chronology', function(req, res, next) {
  // this is based on wikipedia's entry on the subject
  let correctID = 0 // this type of question does not need to exclude any plays
  let numOptions = 4

  gameController.getNRandomWorks(numOptions)
    .then(function(options) {
      let inOrder = util.sortArrayByKey(options, 'order')
      let first = inOrder[0]
      let data = {
        imageUpdate: false,
        question: 'Which work was published first?',
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


// ===== CHARACTER-WEIGHT ✅ =====
router.get('/character-weight', function(req, res, next) {
  gameController.getNRandomWorks(1, excludeList)
    .then(function(work) {
      let title = work[0].title
      let id = work[0].id
      let idno = work[0].idno
      let num = 4

      gameController.getNCharacters(idno, num, excludeList)
        .then(function(characters) {
          let shuffled = util.shuffle(characters)
          let inOrder = (util.sortArrayByKey(characters, 'lines')).reverse()
          let first = inOrder[0]

          let data = {
            imageUpdate: false,
            question: `Of the following, which character from ${title} has the most lines?`,
            questionType: 'character-weight',
            workTitle: work[0].title,
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
      })
    })
  }) // CHARACTER-WEIGHT



// ===== CHARACTER-ORIGIN ✅ =====
router.get('/character-origin', function(req, res, next) {
  gameController.getNRandomWorks(1, excludeList)
    .then(function(correctOption) {
    let correctWorkId = correctOption[0].id
    let correctWorkIdno = correctOption[0].idno
    let correctWorkTitle = correctOption[0].title
    let numOptions = 3

    gameController.getNCharacters(correctWorkIdno, 1, excludeList)
      .then(function(character) {
      gameController.test3RandomWorks(correctWorkIdno, character[0], excludeList).then(function(wrongOptions) {
        let selectedCharacter = character[0].character
        wrongOptions.push(correctOption[0])
        let shuffled = util.shuffle(wrongOptions)
        let data = {
          imageUpdate: false,
          question: `In which play does the character of ${selectedCharacter} appear?`,
          questionType: 'character-origin',
          correctTitle: correctWorkTitle,
          options:[
            {
              label: shuffled[0].title,
              isCorrect: (shuffled[0].title === correctWorkTitle)
            },
            {
              label: shuffled[1].title,
              isCorrect: (shuffled[1].title === correctWorkTitle)
            },
            {
              label: shuffled[2].title,
              isCorrect: (shuffled[2].title === correctWorkTitle)
            },
            {
              label: shuffled[3].title,
              isCorrect: (shuffled[3].title === correctWorkTitle)
            }
          ]
        } // data
        res.send(data)
      })
    })
  })
}) // CHARACTER-ORIGIN


// ===== QUOTE-ORIGIN ✅ =====
router.get('/quote-origin', function(req, res, next) {
  gameController.getNRandomWorks(1, excludeList)
    .then(function(correctOption) {
      let correctTitle = correctOption[0].title
      gameController.get3RandomWorks(correctOption).then(function(wrongOptions) {
        wrongOptions.push(correctOption[0])
        let shuffled = util.shuffle(wrongOptions)
        let doc = util.loadXml(correctOption[0].xmlName)
        let data = {
          imageUpdate: true,
          test: correctOption,
          question: 'From which play does the following quote derive?',
          questionType: 'quote-origin',
          quoteBody: gameController.getSpeech(doc),
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
    })
  })
}) // QUOTE-ORIGIN


// ===== CONCORDANCE (WORD FREQUENCY) ✅ =====
router.get ('/word-frequency', function(req, res, next) {
  // TODO: a query to the 'most common words' table/object to know which results to reject and retry

  let concordance = ['1H4', '1H6', '2H4', 'AWW']
  let superset = 40

  gameController.getNWorksConcord(1, concordance)
    .then(function(work) {
      let selectedWork = work[0].idno
      let title = work[0].title
      gameController.getNWords(selectedWork, superset).then(function(wordOptions) {
        let choices = util.buildConcordOptions(wordOptions, 4)
        let shuffled = util.shuffle(choices)
        let inOrder = (util.sortArrayByKey(choices, 'instances')).reverse()
        let first = inOrder[0]

        let data = {
          imageUpdate: false,
          question: `Which of the following words occurs more frequently in ${title}?`,
          questionType: 'word-frequency',
          options: [
            {
              label: shuffled[0].word,
              isCorrect: ((shuffled[0].instances) == first)
            },
            {
              label: shuffled[1].word,
              isCorrect: ((shuffled[1].instances) == first)
            },
            {
              label: shuffled[2].word,
              isCorrect: ((shuffled[2].instances) == first)
            },
            {
              label: shuffled[3].word,
              isCorrect: ((shuffled[3].instances) == first)
            }
          ]
        } // data
        res.send(data)
      })
    })
}) // CONCORDANCE (WORD FREQUENCY)

module.exports = router
