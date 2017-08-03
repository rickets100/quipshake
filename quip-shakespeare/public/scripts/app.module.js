// window.location.origin
 var full = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');

(function(){
  console.log('APP.MODULE.JS')
  'use strict'
  angular.module('app', ['ui.router'])
  // .constant('API_BASE_URL', 'https://quipshake.herokuapp.com')
  // .constant('API_BASE_URL', 'http://localhost:1564')
  .constant('API_BASE_URL', full)

})()
