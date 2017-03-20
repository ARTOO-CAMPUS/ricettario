angular.module('app').controller('HomeCtrl', function ($scope, $timeout, $mdSidenav, $log, RicetteSrv) {

	RicetteSrv.getRicette()
		.then(function (data) {

			$scope.ricette = data;
			$scope.ricette.forEach(function (el) {
				if (el.voto.nvoti) {
					el.media = el.voto.svoti / el.voto.nvoti;
					el.m = [];
					for (var i = 0; i < Math.floor(el.media); i++) {
						el.m.push(i);
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




});