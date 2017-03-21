angular.module('app').controller('DettaglioCtrl', function ($scope, RicetteSrv, $state, $stateParams, $rootScope, UtentiSrv, $mdToast) {

	RicetteSrv.dettaglioRicetta($stateParams.id)
		.then(function (el) {
			$scope.ricetta = el;
			if ($scope.ricetta.voto.nvoti) {
				$scope.ricetta.media = $scope.ricetta.voto.svoti / $scope.ricetta.voto.nvoti;
				$scope.ricetta.stelle = [];
				for (var i = 0; i < Math.floor($scope.ricetta.media); i++) {
					$scope.ricetta.stelle.push(i);
				}
			} else {
				$scope.ricetta.media = 1;
			}
			console.log(el);
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

	$scope.vota = function (voto, id) {
		UtentiSrv.votaRicetta(id, voto)
			.then(function (data) {
				$scope.ricetta = data;
				if ($scope.ricetta.voto.nvoti) {
					$scope.ricetta.media = $scope.ricetta.voto.svoti / $scope.ricetta.voto.nvoti;
					$scope.ricetta.stelle = [];
					for (var i = 0; i < Math.floor($scope.ricetta.media); i++) {
						$scope.ricetta.stelle.push(i);
					}
				} else {
					$scope.ricetta.media = 1;
				}
				$mdToast.show(
					$mdToast.simple()
					.textContent('Ricetta votata')
					.position('bottom')
					.hideDelay(5000)
				);

			}).catch(function (err) {
				console.log(err);
			});

	}

})