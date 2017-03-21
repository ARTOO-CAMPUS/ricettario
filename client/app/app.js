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

	}).controller('AppCtrl', function ($rootScope, $scope, $state, UtentiSrv, RicetteSrv) {
		$scope.logout = function () {
			$rootScope.utente = false;
			localStorage.clear();
			$state.go('login');

		}

		// $scope.close = function () {
		// 	$mdSidenav('left').close()
		// 		.then(function () {});
		// };
		// $scope.open = function () {
		// 	$mdSidenav('left').toggle()
		// 		.then(function () {});
		// };
		$scope.toggle = function () {
			$scope.opened = !$scope.opened;
		};

		$scope.removePreferito = function (id) {
			UtentiSrv.eliminaRicettaPreferita($rootScope.utente._id, id)
				.then(function (data) {
					return UtentiSrv.dettaglioUtente($rootScope.utente._id);

				})
				.then(function (data) {
					$rootScope.utente = data;
					localStorage.utente = angular.toJson($rootScope.utente);
				})
				.catch(function (err) {
					console.log(err);
				});

		}

		$scope.cerca = function (cat) {
			$scope.categoria = cat || $scope.categoria;
			RicetteSrv.ricerca($scope.ricerca, $scope.categoria).then(function (data) {
					$rootScope.risultati = data;
					$state.go('ricerca');
				})
				.catch();
		}

	})