var mongoose = require('mongoose');
var Utenti = require('./utenti.model.js');
module.exports = (function () {

	var getUtenti = function (req, res) {
		Utenti.find()
			.populate('ricettePreferite')
			.exec()
			.then(function (data) {
				res.status(200).json(data);
			})
			.catch(function (err) {
				res.status(500).json(err);

			});
	}

	var creaUtente = function (req, res) {
		var nuovoUtente = new Utenti(req.body);
		nuovoUtente.save()
			.then(function (data) {
				res.status(200).json(data);
			})
			.catch(function (err) {
				res.status(500).json(err);
			});
	}

	var dettaglioUtente = function (req, res) {
		var id = req.params.id;
		Utenti.findById(id)
			.populate('ricettePreferite')
			.exec()
			.then(function (data) {
				res.status(200).json(data);
			})
			.catch(function (err) {
				res.status(500).json(err);

			});
	}

	return {
		getUtenti: getUtenti,
		creaUtente: creaUtente,
		dettaglioUtente: dettaglioUtente
	}
})();