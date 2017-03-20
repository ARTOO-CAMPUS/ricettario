angular.module('app').service('RicetteSrv', function ($http, $location) {

	var baseUrl = $location.protocol() + '://' + $location.host() + ':' + $location.port();

	var getRicette = function () {
		return $http({
				method: 'GET',
				url: baseUrl + '/ricette',
			})
			.then(function (res) {
				return res.data;
			}, function (err) {})
			.catch(function (err) {
				return err;
			});
	}


	return {
		getRicette: getRicette,
		// dettaglioRicetta: dettaglioRicetta,
		// createRicetta: createRicetta,

	}
});