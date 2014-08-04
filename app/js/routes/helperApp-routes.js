angular.module('helperApp.routes', [] )

// configuring out routes
// ==========================================

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })

    .state('/help-request', {
      url: '/help-request',
      templateUrl: 'views/help-request.html',
      controller: 'HelpRequestCtrl'
    })

    .state('/about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    });

    // catch all route
    // send users to the form page
  $urlRouterProvider.otherwise('/');
});