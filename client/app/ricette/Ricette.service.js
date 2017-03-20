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
	var dettaglioRicetta = function (id) {
		return $http({
				method: 'GET',
				url: baseUrl + '/ricette/' + id,
			})
			.then(function (res) {
				return res.data;
			}, function (err) {})
			.catch(function (err) {
				return err;
			});
	}
	var createRicetta = function (nuova) {
		return $http({
				method: 'POST',
				url: baseUrl + '/ricette',
				data: nuova
			})
			.then(function (res) {
				return res.data;
			}, function (err) {})
			.catch(function (err) {
				return err;
			});
	}

	var ricerca = function (ingrediente, categoria) {
		return $http({
				method: 'GET',
				url: baseUrl + '/ricette/cerca/?ingrediente=' + ingrediente + '&categoria=' + categoria,
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
		dettaglioRicetta: dettaglioRicetta,
		createRicetta: createRicetta,
		ricerca: ricerca

	}
});