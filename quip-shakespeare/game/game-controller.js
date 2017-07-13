const game = require('./game-model').Game
const type = require('./game-model').Type
const random = require('../bin/scripts/utility-functions').randomNum
const playList = require('../bin/data-sources/playList')
const questionTypes = 15


// ===== GET ONE WORK: CONTROLLER =====
function getOneWork (req, res, next) {
  let randomWorkId = random(42)
  console.log('GAME-CONTROLLER: getOneWork. random num is ', randomWorkId)
  game.getOneWork('works', randomWorkId)
  .then(selectedWork => {
    console.log('GAME-CONTROLLER: getOneWork, .then ', selectedWork)
    return selectedWork
  })
} // getOneWork

// ===== GET QUESTION TYPE =====
function getType (req, res, next) {
  let randomTypeId = random(questionTypes)
  console.log('GAME-CONTROLLER: getType. ', randomTypeId)
  type.getType('question_types', randomTypeId)
  .then(selectedType => {
    console.log('GAME-CONTROLLER: getType, .then ', selectedType)
    return selectedType
  })
} // getType

// ===== FORMULATE QUESTION =====
function formulateQuestion (req, res, next) {
  let temptype = getType()
  let tempwork = getOneWork()
  console.log('tempwork: ', tempwork)
  console.log('temptype: ', temptype)

  let question = {
    type: temptype,
    work: tempwork
  }
  console.log('question object: ', question)
} // formulateQuestion

module.exports = {
  getOneWork,
  getType,
  formulateQuestion
}

formulateQuestion()
