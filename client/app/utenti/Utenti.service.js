angular.module('app').service('UtentiSrv', function ($location, $http) {
	var baseUrl = $location.protocol() + '://' + $location.host() + ':' + $location.port();
	var getUtente = function (username) {
		return $http({
				method: 'GET',
				url: baseUrl + '/utenti/username/?username=' + username
			})
			.then(function (res) {
				return res.data;
			}, function (err) {
				return err;
			})
			.catch(function (err) {
				return err;
			});
	}
	return {
		getUtente: getUtente
	}
})