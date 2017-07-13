
(function(){
  console.log('GAME.INDEX.JS')
  angular.module('app')
  .component('gameIndex', {
    controller: controller,
    templateUrl: './scripts/game/game.index.html'
  })
  console.log('got here')



  controller.$inject = ['API_BASE_URL', '$http']
  function controller (baseUrl, $http){
    const vm = this

    // INIT
    vm.$onInit = function (){
      $http.get(`${baseUrl}/api/game`)
      .then((result)=>{
        console.log('here')
    })
  } // init

  function startGame() {
    console.log('===== start game =====')
  }


} // controller
})()
