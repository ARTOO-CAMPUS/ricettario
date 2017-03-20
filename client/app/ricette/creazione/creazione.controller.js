angular.module('app').controller('CreazioneCtrl', function ($scope, $rootScope, RicetteSrv) {

	$scope.nuovaRicetta = {};

	$scope.creazione = function () {
		$scope.nuovaRicetta.author = $rootScope.utente._id;
		RicetteSrv.createRicetta($scope.nuovaRicetta)
			.then(function (data) {
				console.log(data);
			})
			.catch(function (err) {
				console.log(err);
			})

	}

})