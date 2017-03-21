angular.module('app').controller('DettaglioCtrl', function ($scope, RicetteSrv, $state, $stateParams, $rootScope) {

	RicetteSrv.dettaglioRicetta($stateParams.id)
		.then(function (data) {
			$scope.ricetta = data;
			console.log(data);
		});

	$scope.colora = function (id) {
		var preferita = $rootScope.utente.ricettePreferite.find(function (el) {
			return el._id == id;
		})
		if (preferita) {
			return 'md-warn'
		}
	}

})