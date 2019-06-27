var app = angular.module('mainApp',['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'login-form.html'
	})
	.when('/dashboard', {
		templateUrl:'dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
	});
	});
