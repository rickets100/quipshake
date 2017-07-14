
(function(){
  console.log('GAME.INDEX.JS')
  angular.module('app')
  .component('gameIndex', {
    controller: controller,
    templateUrl: './scripts/game/game.index.html'
  })

  const numPlays = 42
  const questionTypes = 15

  controller.$inject = ['API_BASE_URL', '$http']
  function controller (baseUrl, $http){
    const vm = this
    vm.currentQuestion = ''

    // ===== INIT =====
    vm.$onInit = function (){
      $http.get(`${baseUrl}/api/game`)
      .then((result)=>{
        console.log('here')
      })
    }


    // ===== RANDOM NUMBER GENERATOR =====
    vm.randomNum = function (limit) {
      let max = Math.floor(limit)
      let random = Math.floor(Math.random() * (max - 1 + 1)) + 1
      return random
    } // randomNum


    // ===== GET A RANDOM PLAY =====
    vm.getRandomPlay = function () {
      return playList[randomNum(numPlays)]
    } // getRandomPlay


    // ===== GET A RANDOM QUESTION TYPE =====
    vm.getRandomQuestionType = function () {
      return playList[randomNum(numPlays)]
    } // getRandomQuestionType


    // ===== START GAME =====
    vm.startGame = function () {
      console.log('===== start game =====')
    }


    // ===== POPULATE A GIVEN QUESTION =====
    function populateQuestion(questionConstraints) {
      // questionConstraints will be the object formulated by formulateQuestion
      // need to now generate a correct answer + as many additional options as is specified by the question type
      // if quote origin, need to get the quote
      let endpoint = (questionConstraints.type).split(' ').join('-')
      console.log('hitting ', (`${baseUrl}/api/${endpoint}`));
      $http.get(`${baseUrl}/api/${endpoint}`)
      .then((result)=>{
        console.log('RESULT: ', result)

        vm.currentQuestion = result.data.question
      }) // http.get
    }

    // ===== TEST QUESTION PART =====
    vm.testQuestion = function () {
      $http.get(`${baseUrl}/api/formulate-question`)
      .then((result)=>{
        let questionConstraints = {
          work: result.data.word,
          type: result.data.type.question_type,
          num_options: result.data.type.num_options
        }
        populateQuestion(questionConstraints)
      })
    }


    // ===== TEST ANSWER-OPTIONS PART =====
    vm.testAnswerOptions = function () {
      console.log('***** in the test-answer function *****')

    }


    // ===== TEST CORRECT-ANSWER-REVEAL PART =====
    vm.testCorrectAnswer = function () {
      console.log('***** in the test-correct-answer function *****')

    }


    // ===== TEST IMAGE PART =====
    vm.testImage = function () {
      console.log('***** in the test-image function *****')

    }


    // ===== TEST SCORE PART =====
    vm.testScore = function () {
      console.log('***** in the test-score function *****')

    }

  } // controller
})()
