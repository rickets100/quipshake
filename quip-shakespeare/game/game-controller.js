const Game = require('game_model')
// var playList = 

// ===== RANDOM NUMBER GENERATOR =====
function randomNum (limit) {
  console.log('GAME-CONTROLLER: randomNum')
  let max = Math.floor(limit)
  console.log('random num is ', Math.floor(Math.random() * (max - 1 + 1)) + 1)
  return Math.floor(Math.random() * (max - 1 + 1)) + 1
}



// ===== GET ONE RESOURCE: CONTROLLER =====
function getOneWork (req, res, next) {
  console.log('GAME-CONTROLLER: getOneWork')
  let randomWorkId = randomNum()
  Work.getOneWork('resources', id)
  .then(selectedWork => {
    console.log('GAME-CONTROLLER: getOneWork, .then')
    res.send('here')
  })
}
