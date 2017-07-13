const game = require('./game-model').Game
const type = require('./game-model').Type
const random = require('../bin/scripts/utility-functions').randomNum
const playList = require('../bin/data-sources/playList')
const questionTypes = 15


// ===== GET ONE WORK: CONTROLLER =====
function getOneWork (req,res,next) {
  let randomWorkId = random(42)
  console.log('GAME-CONTROLLER: getOneWork. random num is ', randomWorkId)
  game.getOneWork('works', randomWorkId)
  .then(selectedWork => {
    console.log('GAME-CONTROLLER: getOneWork, .then ', selectedWork)
    // res.send(selectedWork)
  })
} // getOneWork

// ===== GET QUESTION TYPE =====
function getType (req,res,next) {
  let randomTypeId = random(questionTypes)
  console.log('GAME-CONTROLLER: formulateQuestion. ', randomTypeId)
  type.getType('question_types', randomTypeId)
  .then(selectedType => {
    console.log('GAME-CONTROLLER: getType, .then ', selectedType)
    // res.send(selectedQuestion)
  })
} // getType

// ===== FORMULATE QUESTION =====
function formulateQuestion (req,res,next) {
}

module.exports = {
  getOneWork,
  getType,
  formulateQuestion
}

getType()
