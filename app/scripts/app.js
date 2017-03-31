'use strict';

/**
 * @ngdoc overview
 * @name webapp1App
 * @description
 * # webapp1App
 *
 * Main module of the application.
 */
var app = angular
  .module('webapp1App', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap'
  ]);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider) {
  $locationProvider.html5Mode(true)
  var appState = {
    name: 'app',
    url: '/',
    // abstract:true,
    template: '<ui-view></ui-view>'
  }
  var homeState = {
    name: 'app.home',
    url: '^/home',
    template: '<h3>home page</h3>'
  }
  var helloState = {
    name: 'app.hello',
    url: '^/hello',
    template: '<h3>hello world!</h3>'
  }

  var aboutState = {
    name: 'app.about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(appState);
  $stateProvider.state(homeState);
  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $urlRouterProvider.otherwise('/home');
});

