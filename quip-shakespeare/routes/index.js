var express = require('express')
var router = express.Router()

// ===== LANDING PAGE =====
router.get('/', function(req, res, next) {
  console.log('INDEX.JS: get')
  res.render('index', { title: 'Quip Shakespeare' })
})



module.exports = router

// const game = require('../controller/gamecontroller')

/* GET home page. */
// router.get('/landing', game.getAll)
// router.get('/dvd', dvd.getAllWorkouts)
