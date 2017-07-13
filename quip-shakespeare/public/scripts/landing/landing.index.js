(function() {
  console.log('LANDING.INDEX.JS')
  angular.module('app')
  .component('landingIndex', {
    controller: controller,
    templateUrl: './scripts/landing/landing.index.html'
  }) // component

  controller.$inject = ['API_BASE_URL', '$http']
  function controller (baseUrl, $http){
    const vm = this

    // INIT
    vm.$onInit = function (){
      $http.get(`${baseUrl}/api/landing`)
      .then((result)=>{
        console.log('in the .then of landing.index.js')
    })
  } // init


} // controller
})()
