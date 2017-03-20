angular.module('app').controller('HomeCtrl', function ($scope, $timeout, $mdSidenav, RicetteSrv, $state, UtentiSrv, $rootScope) {

	RicetteSrv.getRicette()
		.then(function (data) {

			$scope.ricette = data;
			$scope.ricette.forEach(function (el) {
				if (el.voto.nvoti) {
					el.media = el.voto.svoti / el.voto.nvoti;
					el.stelle = [];
					for (var i = 0; i < Math.floor(el.media); i++) {
						el.stelle.push(i);
					}
				} else {
					el.media = 1;
				}
			});

			console.log($scope.ricette);
		})
		.catch(function (err) {
			console.log(err);
		});

	$scope.addRicetta = function (idricetta, $event) {
		$event.stopPropagation();
		console.log(idricetta, $event);
		UtentiSrv.aggiungiRicettaPreferita($rootScope.utente._id, idricetta)
			.then(function (data) {
				return UtentiSrv.dettaglioUtente($rootScope.utente._id);

			})
			.then(function (data) {
				$rootScope.utente = data;
				localStorage.utente = angular.toJson($rootScope.utente);
			})
			.catch(function (err) {
				console.log(err);
			})

	}


});