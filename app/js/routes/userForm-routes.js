angular.module('userForm.routes', [] )

// configuring out routes
// ==========================================

.config(function ($stateProvider, $urlRouterProvider) {

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
			templateUrl: 'partials/form-profile.html'
		})

		// url will be /form/skills

		.state('form.skills', {
			url: '/skills',
			templateUrl: 'partials/form-skills.html'
		})

		// url will be /form/help

		.state('form.help', {
			url: '/help',
			templateUrl: 'partials/form-help.html'
		});
		
});