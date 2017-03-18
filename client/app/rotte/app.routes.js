angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

	$urlRouterProvider.when('', '/')
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('/login', {
			url: '/login',
			templateUrl: 'app/utenti/login/login.template.html',
			controller: 'LoginCtrl'
		});
});