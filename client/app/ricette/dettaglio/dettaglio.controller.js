angular.module('app').controller('DettaglioCtrl', function ($scope, RicetteSrv, $state, $stateParams) {

	RicetteSrv.dettaglioRicetta($stateParams.id)
		.then(function (data) {
			$scope.ricetta = data;
			console.log(data);
		});

})