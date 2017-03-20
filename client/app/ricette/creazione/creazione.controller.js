angular.module('app').controller('CreazioneCtrl', function ($scope, $rootScope, RicetteSrv, $state) {

	$scope.nuovaRicetta = {

		titolo: '',
		categoria: '',
		immagini: [],
		ingredienti: [],
		difficolta: '',
		tempodicottura: 0,
		temperaturadicottura: 0,
		preparazione: ''
	};

	$scope.creazione = function () {
		$scope.nuovaRicetta.author = $rootScope.utente._id;
		$scope.nuovaRicetta.immagini.push($scope.immagine);
		RicetteSrv.createRicetta($scope.nuovaRicetta)
			.then(function (data) {
				$state.go('dettaglio', {
					id: data._id
				});
			})
			.catch(function (err) {
				console.log(err);
			})
	}

})