angular.module('myAppApp')
	.controller('FormCtrl', function ($scope) {
		$scope.users = users;
		$scope.skills = skills;
		$scope.user = {};
		$scope.addMember = function(){
			users.push($scope.user);
			alert('Welcome to Helper!');
		}
	});
