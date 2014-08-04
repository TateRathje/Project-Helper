'use strict';

angular.module('userProfile')
	.controller('formController', function ($scope) {
	// we will store all of our form data in this object
		$scope.formData = {};
	  // function to process the form
		$scope.processForm = function() {
			alert('Your help request has been sent!');
	};

});


