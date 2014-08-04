'use strict';


/*Main App Module*/
angular.module('helperApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'helperApp.routes'
  ]);

/* User Profile Module */
angular.module('userForm', [
    'ngAnimate', 
    'ui.router', 
    'userForm.routes'
]);


