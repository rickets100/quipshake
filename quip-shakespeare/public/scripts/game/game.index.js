
(function(){
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
    vm.totalAsked = 0
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
    vm.elaboration = ''

    // ===== INIT =====
    vm.$onInit = function () {
      vm.updateToQuestion()
    }


    // ===== POPULATE A GIVEN QUESTION =====
    function populateQuestion(questionConstraints) {
      let endpoint = (questionConstraints.type).split(' ').join('-')
      console.log('hitting ', (`${baseUrl}/api/${endpoint}`))
      $http.get(`${baseUrl}/api/${endpoint}`)
        .then((result)=>{
          vm.showQuoteBody = result.data.imageUpdate
          vm.question = result.data.question
          vm.options = result.data.options
          vm.isChosen = result.data.isChosen

          if (vm.showQuoteBody) {
            console.log('showQuoteBody is ', vm.showQuoteBody)
            vm.updateImage(result.data.quoteBody)
          }
        })
    }


    // ===== UPDATE TO NEW QUESTION =====
    vm.updateToQuestion = function () {
      // vm.totalAsked = vm.totalAsked + 1

      console.log('in updateToQuestion')
        $("#answers input[type='radio']").prop('checked', false)
        $("#answers input[type='radio']").prop('disabled', false)
        // TODO is there a way to do the above, but add-in the requirement that the inputs of type radio also have a class property of "x" in order to have something apply, like: $("#answers input[type='radio'][prop('x')]").prop('disabled', false)

        vm.exclamation = ''
        vm.elaboration = ''
        vm.getRandomQuestion()
    }


    // ===== UPDATE TO ANSWER =====
    vm.updateToAnswer = function (isCorrect, label, isChosen, $index, options) {

      console.log('updateToAnswer: vm.');
      let rightAnswer = ''
      vm.options.forEach(function(option) {
        if (option.isCorrect === true) {
          rightAnswer = option.label
        }
      })

      vm.answered = true
      console.log('updateToAnswer: before heading off to updateReveal, rightAnswer is: ', rightAnswer)
      vm.updateReveal(isCorrect, label, rightAnswer)
      vm.updateScore(isCorrect)
      $("#answers input[type='radio']").prop('disabled', true)

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
      vm.showImage = false
      vm.showQuoteBody = true
      vm.showChart = false
      vm.quoteBody = quoteBody
    }


    // ===== UPDATE ANSWER-OPTIONS =====
    vm.updateAnswerOptions = function (isCorrect) {
      console.log('***** in the updateAnswerOptions function *****')
    }


    // ===== UPDATE REVEAL =====
    vm.updateReveal = function (isCorrect, label, rightAnswer) {
      console.log('In updateReveal, right answer is coming in as ', rightAnswer);
      if (isCorrect === true) {
        vm.exclamation = 'SCORE!'
        vm.elaboration = 'You just earned a point!'
      } else if (isCorrect === false) {
        vm.exclamation = 'NOPE.'
        vm.elaboration = `The correct answer was ${rightAnswer}.`
      } else {
        console.log('WHY AM I HERE????');
        vm.exclamation = ''
        vm.elaboration = ''
      }
    }


    // ===== UPDATE SCORE =====
    vm.updateScore = function (isCorrect) {
      console.log('in updateScore isCorrect is: ', isCorrect);
      if (isCorrect === true) {
        vm.score = vm.score + 1
    }
    vm.totalAsked = vm.totalAsked + 1

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
