angular.module('userForm.routes', [] )

// configuring out routes
// ==========================================

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

		// route to show our basic form (/form)
		.state('form', {
			url: '/form',
			templateUrl: 'partials/form.html',
			controller: 'formController'
		})

		// nested states
		// each of these sections will have there own view
		// url will be nested (/form/profile)

		.state('form.profile', {
			url: '/profile',
			templateUrl: 'partials/user-form-profile.html'
		})

		// url will be /form/skills

		.state('form.skills', {
			url: '/skills',
			templateUrl: 'partials/user-form-profile.html'
		})

		// url will be /form/help

		.state('form.help', {
			url: '/help',
			templateUrl: 'partials/user-form-help.html'
		});

		// catch all route
		// send users to the form page
		$urlRouterProvider.otherwise('/partials/user/form/profile.html');
})