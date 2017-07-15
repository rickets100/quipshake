
(function(){
  console.log('GAME.INDEX.JS')
  angular.module('app')
  .component('gameIndex', {
    controller: controller,
    templateUrl: './scripts/game/game.index.html'
  })

  const canon = 42
  const questionTypes = 15

  controller.$inject = ['API_BASE_URL', '$http']
  function controller (baseUrl, $http){
    const vm = this
    vm.currentQuestion = ''
    vm.currentState = 'unanswered'
    vm.exclamation = ''

    // ===== INIT =====
    vm.$onInit = function (){
      $http.get(`${baseUrl}/api/game`)
      .then((result)=>{
        console.log('here')
      })
    }


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
        vm.answerOptions = result.data.options
        vm.isChosen = result.data.isChosen
      }) // http.get
    } // function populateQuestion


    // ===== TEST QUESTION PART =====
    vm.testRandomQuestion = function () {
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

    // ===== TEST QUESTION PART | this is for testing only =====
    vm.testQuestion = function (qtype) {
      $http.get(`${baseUrl}/api/formulate-question`)
      .then((result)=>{
        let questionConstraints = {
          work: result.data.word,
          type: qtype,
          num_options: result.data.type.num_options
        }
        populateQuestion(questionConstraints)
      })
    }


    // ===== UPDATE IMAGE PART =====
    vm.updateImage = function () {
      console.log('***** in the updateImage function *****')

    }


    // ===== UPDATE ANSWER-OPTIONS PART =====
    vm.updateAnswerOptions = function (isCorrect) {
      console.log('***** in the updateAnswerOptions function *****')

    }


    // ===== UPDATE REVEAL PART =====
    vm.updateReveal = function (isCorrect) {
      console.log('***** in updateReveal  *****')
      if (isCorrect === true) {
        console.log('answer was correct')
        vm.exclamation = 'SCORE!'
        vm.elaboration = 'You just earned some points!'
      } else {
        console.log('answer was incorrect')
        vm.exclamation = 'NOPE.'
        vm.elaboration = 'The correct answer was something else.'
      }

    }


    // ===== UPDATE SCORE PART =====
    vm.updateScore = function () {
      console.log('***** in the updateScore function *****')

    }

    // ===== UPDATE ANSWER =====
    vm.updateAnswer = function (isCorrect) {
      vm.updateImage()
      vm.updateAnswerOptions()
      vm.updateReveal(isCorrect)
      vm.updateScore()
      console.log('^^^^^^^ in the updateAnswer function ^^^^^^^^')
      console.log('is correct = ', isCorrect)

      /*
      this function needs to:
      - update the updateImage area, possibly, with a chart if applicable
      - update this area (answer options) to grey-out the incorrect answers, mark an x if they guessed incorrectly, and make the correct anwer bold
      - update the score
      */
    }

  } // controller
})()
