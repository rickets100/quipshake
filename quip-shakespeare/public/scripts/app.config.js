(function() {
  console.log('APP.CONFIG.JS')
  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$locationProvider']

  function config($stateProvider, $locationProvider){

    $locationProvider.html5Mode(true)
    //
    $stateProvider

    .state({
      name: 'landingIndex', url: '/home', component: 'landingIndex'
    })

    .state({
      name: 'gameIndex', url: '/game', component: 'gameIndex'
    })

    .state({
      name: 'home', url: '/', redirectTo: 'landingIndex'
    })


  } // config
}())
