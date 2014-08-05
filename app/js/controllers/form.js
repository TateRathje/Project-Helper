'use strict';

angular.module('helperApp')
	.controller('FormCtrl', function ($scope) {
		$scope.users = users;
		$scope.skills = skills;
	});

var users = [
  {
    name: 'Tate Rathje',
    email: 'Flint285@gmail.com',
    phone: 'Something',
    rating: 4,
    skills: { 'computers': true, cars: true } 
  },{
    name: 'Jacky Boy',
    email: 'Boy@gmail.com',
    phone: 'Something',
    rating: 2,
    skills: { 'computers': true, cars: true } 
  }
];

var skills = [ 'computers', 'cars', 'babysitting', 'teaching' ];


