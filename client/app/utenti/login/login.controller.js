angular.module('app').controller('LoginCtrl', function ($rootScope, $scope, $location, UtentiSrv, $state) {
	$scope.error = '';
	$scope.login = function () {
		UtentiSrv.getUtente($scope.user.username).then(function (data) {
			if (data.length) {
				$rootScope.utente = data[0];
				localStorage.utente = angular.toJson(data[0]);
				$state.go('home')
			} else {
				$scope.error = 'utente inesistente';
			}
		}, function (err) {
			console.log(err);
		})
	}
})