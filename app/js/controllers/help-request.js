'use strict';

/**
 * @ngdoc function
 * @name projectHelperApp.controller:AboutCtrl
 * @description
 * # HelpRequestCtrl
 * Controller of the projectHelperApp
 */
angular.module('projectHelperApp')
  .controller('HelpRequestCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });