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
	var aggiungiRicettaPreferita = function (id, ricettaid) {
		return $http({
				method: 'PUT',
				url: baseUrl + '/utenti/ricetta/' + id,
				data: {
					"ricetta": ricettaid
				}
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
	var eliminaRicettaPreferita = function (id, ricettaid) {
		return $http({
				method: 'PUT',
				url: baseUrl + '/utenti/eliminaricetta/' + id,
				data: {
					"ricetta": ricettaid
				}
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

	var dettaglioUtente = function (id) {
		return $http({
				method: 'GET',
				url: baseUrl + '/utenti/' + id
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
	var creaUtente = function (nuovo) {
		return $http({
				method: 'POST',
				url: baseUrl + '/utenti/',
				data: nuovo
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

	var aggiornaUtente = function (id, data) {
		return $http({
				method: 'PUT',
				url: baseUrl + '/utenti/' + id,
				data: data
			})
			.then(function (res) {
				return res.data;
			}, function (err) {
				return err.data;
			})
			.catch(function (err) {
				return err.data;
			});
	}
	var votaRicetta = function (id, voto) {
		return $http({
				method: 'PUT',
				url: baseUrl + '/ricette/' + id,
				data: {
					"voto": voto + 1
				}
			})
			.then(function (res) {
				return res.data;
			}, function (err) {
				return err.data;
			})
			.catch(function (err) {
				return err.data;
			});
	}
	var commentaRicetta = function (id, data) {
		return $http({
				method: 'PUT',
				url: baseUrl + '/ricette/commento/' + id,
				data: data
			})
			.then(function (res) {
				return res.data;
			}, function (err) {
				return err.data;
			})
			.catch(function (err) {
				return err.data;
			});
	}
	return {
		getUtente: getUtente,
		aggiungiRicettaPreferita: aggiungiRicettaPreferita,
		eliminaRicettaPreferita: eliminaRicettaPreferita,
		dettaglioUtente: dettaglioUtente,
		creaUtente: creaUtente,
		aggiornaUtente: aggiornaUtente,
		votaRicetta: votaRicetta,
		commentaRicetta: commentaRicetta
	}
})