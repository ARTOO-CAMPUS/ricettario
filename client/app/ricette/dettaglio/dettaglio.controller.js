angular.module('app').controller('DettaglioCtrl', function ($scope, RicetteSrv, $state, $stateParams, $rootScope, UtentiSrv) {

	RicetteSrv.dettaglioRicetta($stateParams.id)
		.then(function (data) {
			$scope.ricetta = data;
			console.log(data);
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

	$scope.colora = function (id) {
		var preferita = $rootScope.utente.ricettePreferite.find(function (el) {
			return el._id == id;
		})
		if (preferita) {
			return 'md-warn'
		}
	}

})