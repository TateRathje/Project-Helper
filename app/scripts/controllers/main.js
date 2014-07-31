'use strict';

/**
 * @ngdoc function
 * @name projectHelperApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectHelperApp
 */
angular.module('projectHelperApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
