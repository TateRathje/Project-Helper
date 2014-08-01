'use strict';

/**
 * @ngdoc function
 * @name projectHelperApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projectHelperApp
 */
angular.module('projectHelperApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
