'use strict';

angular.module('myAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      })

      // signup2 routes

      .state('form', {
      url: '/form',
      templateUrl: 'app/account/signup2/form.html',
      controller: 'FormCtrl'
    })

    // nested states
    
    .state('form.profile', {
      url: '/profile',
      templateUrl: 'app/account/signup2/form-profile.html'
    })
    .state('form.skills', {
      url: '/skills',
      templateUrl: 'app/account/signup2/form-skills.html'
    })
    .state('form.help', {
      url: '/help',
      templateUrl: 'app/account/signup2/form-help.html'
    });
  });