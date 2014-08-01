'use strict';

/**
 * @ngdoc overview
 * @name projectHelperApp
 * @description
 * # projectHelperApp
 *
 * Main module of the application.
 */
angular
  .module('projectHelperApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/help-request', {
        templateUrl: 'views/help-request.html',
        controller: 'HelpRequestCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


