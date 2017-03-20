angular.module('app', [
		'ui.router',
		'ngMaterial'
	]).run(function ($rootScope) {
		if (localStorage.utente) {
			$rootScope.utente = angular.fromJson(localStorage.utente);
		}
	})
	.config(function ($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('indigo')
			.accentPalette('amber')
			.warnPalette('red')
			.backgroundPalette('blue-grey');
		$mdThemingProvider.theme('docs-dark', 'default')
			.primaryPalette('pink')
			.dark();

	}).controller('AppCtrl', function ($scope, $state) {
		$scope.logout = function () {
			localStorage.clear();
			$state.go('login');
		}

		$scope.close = function () {
			$mdSidenav('left').close()
				.then(function () {});
		};
		$scope.open = function () {
			$mdSidenav('left').toggle()
				.then(function () {});
		};
		$scope.toggle = function () {
			$scope.opened = !$scope.opened;
		};


		$scope.preferite = ["Torta alle mele", "Torta alle arance"];
	})