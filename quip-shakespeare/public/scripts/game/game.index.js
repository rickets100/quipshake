
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
    vm.answerOptions = []
    vm.isChosen = false
    vm.answered = false
    vm.exclamation = ''
    vm.graphic = "/images/shakespeare-cartoon.png"
    vm.score = 0
    vm.selectedIndex = 0
    vm.imageUpdate = true


    // ===== INIT =====
    vm.$onInit = function (){
      vm.updateGameState()
      // $http.get(`${baseUrl}/api/game`)
      // .then((result)=>{
      //   console.log('INIT')
      //   vm.currentQuestion = 'How well do you know your Shakespeare?'
      //   vm.answerOptions = [{label: 'hi'}]
      //
      // })
    }

    vm.itemClicked = function ($index) {
        // console.log('heeeeere', $index)
        vm.selectedIndex = $index
    }

    // ===== START GAME =====
    vm.startGame = function () {
      // console.log('===== start game =====')
    }


    // ===== POPULATE A GIVEN QUESTION =====
    function populateQuestion(questionConstraints) {
      let endpoint = (questionConstraints.type).split(' ').join('-')
      console.log('hitting ', (`${baseUrl}/api/${endpoint}`))
      $http.get(`${baseUrl}/api/${endpoint}`)
        .then((result)=>{
          console.log('RESULT: ', result)
          vm.imageUpdate = result.data.imageUpdate
          vm.currentQuestion = result.data.question
          vm.answerOptions = result.data.options
          vm.isChosen = result.data.isChosen

          if (vm.imageUpdate) {
            vm.updateImage(vm.currentQuestion.elaboration)
            vm.imageUpdate = false
          }
        })
    } // function populateQuestion


    // ===== UPDATE GAME STATE =====
    vm.updateGameState = function () {
      console.log('in the update game-state function');
      vm.testRandomQuestion()
    }


    // ===== TEST QUESTION PART =====
    vm.testRandomQuestion = function () {
      $http.get( `${baseUrl}/api/formulate-question`)
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
    vm.updateImage = function (isCorrect) {
      // console.log('***** in the updateImage function *****')
      if (isCorrect === true) {
        vm.graphic = "/images/shakespeare-bw.png"
      }
    }


    // ===== UPDATE ANSWER-OPTIONS PART =====
    vm.updateAnswerOptions = function (isCorrect) {
      // console.log('***** in the updateAnswerOptions function *****')

    }


    // ===== UPDATE REVEAL PART =====
    vm.updateReveal = function (isCorrect, label) {
      // console.log('***** in updateReveal  *****')
      if (isCorrect === true) {
        vm.exclamation = 'SCORE!'
        vm.elaboration = 'You just earned some points!'
      } else {
        vm.exclamation = 'NOPE.'
        vm.elaboration = 'The correct answer was something else.'
      }

    }


    // ===== UPDATE SCORE PART =====
    vm.updateScore = function (isCorrect) {
      // console.log('***** in the updateScore function *****')
      if (isCorrect === true) {
        vm.score = vm.score + 2
    }
  } // updateScore


    // ===== UPDATE ANSWER =====
    vm.updateAnswer = function (isCorrect, label, isChosen, $index) {
      vm.answered = true
      vm.updateImage(isCorrect)
      vm.updateReveal(isCorrect, label)
      vm.updateScore(isCorrect)
      console.log('^^^^^^^ in the updateAnswer function ^^^^^^^^')

      /*
      this function needs to:
      - update the updateImage area, possibly, with a chart if applicable
      - update this area (answer options) to grey-out the incorrect answers, mark an x if they guessed incorrectly, and make the correct anwer bold
      - update the score
      */
    }

  } // controller
})()
