angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

	var Aut = function ($rootScope, $state, $timeout) {
		console.log($rootScope.utente);
		$state.go('login');
		if (!$rootScope.utente) {
			$timeout(function () {
				$state.go('login')
			}, 0);
		}
	};

	$urlRouterProvider.when('', '/home')
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'app/utenti/login/login.template.html',
			controller: 'LoginCtrl'
		})
		.state('home', {
			url: '/home',
			templateUrl: 'app/ricette/home/home.template.html',
			controller: 'HomeCtrl',
			resolve: {
				aut: Aut
			}
		})
});