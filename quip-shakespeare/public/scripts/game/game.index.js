
(function(){
  console.log('GAME.INDEX.JS')
  angular.module('app')
  .component('gameIndex', {
    controller: controller,
    templateUrl: './scripts/game/game.index.html'
  })

  const canon = 38
  const questionTypes = 15

  controller.$inject = ['API_BASE_URL', '$http']
  function controller (baseUrl, $http){
    const vm = this
    vm.answered = false

    vm.score = 0
    vm.totalAsked = -1
    vm.question = ''

    vm.graphic = "/images/shakespeare-bw.png"
    vm.showImage = true
    vm.quoteBody = ''
    vm.showQuoteBody = false
    vm.showChart = true

    vm.options = []
    vm.isChosen = false
    vm.selectedIndex = 0

    vm.exclamation = ''


    // ===== INIT =====
    vm.$onInit = function () {
      vm.updateGameState()
    } // on.init


    // ===== GO TO QUESTION =====
    vm.goToQuestion = function(info) {
      console.log('game.index.js - goToQuestion')
      console.log('info is ', info);
      $state.go('goToQuestion', info)
    }

    // ===== POPULATE A GIVEN QUESTION =====
    function populateQuestion(questionConstraints) {
      let endpoint = (questionConstraints.type).split(' ').join('-')
      console.log('hitting ', (`${baseUrl}/api/${endpoint}`))
      $http.get(`${baseUrl}/api/${endpoint}`)
        .then((result)=>{
          console.log('RESULT: ', result);
          // vm.answers.$setPristine();
          vm.showQuoteBody = result.data.imageUpdate
          vm.question = result.data.question
          vm.options = result.data.options
          vm.isChosen = result.data.isChosen

          console.log("vm.options",vm.options)

          if (vm.showQuoteBody) {
            console.log('showQuoteBody is ', vm.showQuoteBody)
            vm.updateImage(result.data.quoteBody)
          }
        })
    } // function populateQuestion


    vm.temp = function(blah){
      console.log('blah blah blah', blah);
  }

    // ===== UPDATE GAME STATE =====
    vm.updateGameState = function (form) {
      // console.log("v-----",document.getElementById("answers"));
      console.log('v-----',form)
      // let formElements = document.getElementById('answers').elements;
      // for(var i=0; i<formElements.length; i++){
      //   formElements[i].checked = false
      // }

      $("#answers input[type='radio']").prop("checked",false);





      vm.totalAsked = vm.totalAsked + 1
      vm.getRandomQuestion()
    }


    // ===== TEST QUESTION PART =====
    vm.getRandomQuestion = function () {
      vm.showQuoteBody = false
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


    // ===== UPDATE GRAPHIC PART =====
    vm.updateImage = function (quoteBody) {
      console.log('***** in the updateImage function *****')
      console.log(quoteBody)
      vm.showImage = false
      vm.showQuoteBody = true
      vm.showChart = false
      vm.quoteBody = quoteBody
      // if (isCorrect === true) {
      //   vm.graphic = "/images/shakespeare-bw.png"
      // }
    }


    // ===== UPDATE ANSWER-OPTIONS PART =====
    vm.updateAnswerOptions = function (isCorrect) {
      console.log('***** in the updateAnswerOptions function *****')

    }


    // ===== UPDATE REVEAL PART =====
    vm.updateReveal = function (isCorrect, label) {
      console.log('***** in updateReveal  *****')
      if (isCorrect === true) {
        vm.exclamation = 'SCORE!'
        vm.elaboration = 'You just earned some points!'
      } else {
        vm.exclamation = 'NOPE.'
        vm.elaboration = 'The correct answer was something else.'
      }

    }


    // ===== UPDATE SCORE =====
    vm.updateScore = function (isCorrect) {
      console.log('***** in the updateScore function *****')
      if (isCorrect === true) {
        vm.score = vm.score + 1
    }
  } // updateScore


    // ===== UPDATE ANSWER =====
    vm.updateAnswer = function (isCorrect, label, isChosen, $index) {
      console.log('in the updateAnswer function')
      vm.answered = true
      // vm.updateImage(isCorrect)
      vm.updateReveal(isCorrect, label)
      vm.updateScore(isCorrect)

      /*
      this function needs to:
      - update the updateImage area, possibly, with a chart if applicable
      - update this area (answer options) to grey-out the incorrect answers, mark an x if they guessed incorrectly, and make the correct anwer bold
      - update the score
      */
    }


    // ===== UPDATE CHART =====
    function updateChart() {
      vm.chartLabels = ["January", "February", "March", "April", "May", "June", "July"];
      vm.chartSeries = ['Series A', 'Series B'];
      vm.chartData = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ]
      vm.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
      vm.chartOptions = {
        scales: {
          yAxes: [
            {
              id: 'y-axis-1',
              type: 'linear',
              display: true,
              position: 'left'
            },
            {
              id: 'y-axis-2',
              type: 'linear',
              display: true,
              position: 'right'
            }
          ]
        }
      }
    } // update chart

  } // controller
})()
