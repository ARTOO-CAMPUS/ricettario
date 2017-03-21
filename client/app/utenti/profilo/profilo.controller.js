angular.module('app').controller('ProfiloCtrl', function ($scope, $rootScope, UtentiSrv, $mdToast) {
	//$rootScope.utente;

	$scope.errore = "";

	$scope.$watch('utente.username', function (username) {
		console.log(username);
		UtentiSrv.getUtente(username).then(function (data) {
			if (data.length) {
				$scope.errore = "Utente gia esistente";
			} else {
				$scope.errore = "";
			}

		}).catch(function (err) {
			console.log(err);
		});

	});

	$scope.aggiornaUtente = function () {
		var data = {
			"username": $rootScope.utente.username,
			"password": $rootScope.utente.password,
			"avatar": $rootScope.utente.avatar,
		}
		UtentiSrv.aggiornaUtente($rootScope.utente._id, data)
			.then(function (data) {
				if (data.code) {
					$scope.errore = "Utente gia esistente";
				} else {
					localStorage.clear();
					localStorage.utente = angular.toJson($rootScope.utente);
					$scope.errore = "";
					$mdToast.show(
						$mdToast.simple()
						.textContent('Utente Aggiornato con successo')
						.position('bottom')
						.hideDelay(5000)
					);
				}

			}, function (err) {
				console.log(err);
			}).catch(function (err) {
				console.log(err);


			});
	}
})