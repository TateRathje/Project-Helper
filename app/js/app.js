'use strict';


/*Main App Module*/
angular.module('helperApp', [
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'helperApp.routes'
  ]);

/* User Profile Module */
angular.module('userProfile', [
    'ngAnimate', 
    'ui.router', 
    'userForm.routes'
]);


