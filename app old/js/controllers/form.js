'use strict';

angular.module('helperApp')
	.controller('FormCtrl', function ($scope) {
		$scope.users = users;
		$scope.skills = skills;
		$scope.user = {};
		$scope.addMember = function(){
			users.push($scope.user);
			alert('Welcome to Helper!');
		}
	});

var users = [
  {
    name: 'Tate Rathje',
    email: 'Flint285@gmail.com',
    phone: 'Something',
    rating: 4,
    help: 'Help Needed',
    skills: { 'computers': true, cars: true } 
  },{
    name: 'Jacky Boy',
    email: 'Boy@gmail.com',
    phone: 'Something',
    rating: 2,
    help: 'Help Needed',
    skills: { 'computers': false, cars: true } 
  }
];

var skills = [ 'computers', 'cars', 'babysitting', 'teaching' ];


