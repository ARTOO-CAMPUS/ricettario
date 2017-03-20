angular.module('app').controller('RegistrazioneCtrl', function ($state, $rootScope, $scope, UtentiSrv) {

	console.log("controller");
	$scope.registrazione = function () {
		console.log("registrazione");
		UtentiSrv.creaUtente($scope.nuovo)
			.then(function (data) {
				$rootScope.utente = data;
				localStorage.clear();
				localStorage.utente = angular.toJson(data);
				$state.go('home')
			})
			.catch(function (err) {
				console.log(err);
			});
	}

})