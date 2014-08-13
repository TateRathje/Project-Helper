'use strict';

angular.module('myAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/home/home.html',
        controller: '',
        authenticate: false   
      })
      .state('help', {
        url: '/help-request',
        templateUrl: 'app/main/help-request/help-request.html',
        controller: '',
        authenticate: false   
      })
      .state('members', {
        url: '/members',
        templateUrl: 'app/main/members/members.html',
        controller: '',
        authenticate: false   
      });
  });