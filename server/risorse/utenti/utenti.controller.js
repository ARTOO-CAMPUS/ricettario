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

	var ricercaUtentiPerCategoria = function (req, res) {
		var categoria = req.query.categoria;
		Utenti.find({
				"categoria": {
					$in: [categoria]
				}
			})
			.exec()
			.then(function (data) {
				res.status(200).json(data);
			})
			.catch(function (err) {
				res.status(500).json(err);
			});

	}

	var ricercaUtentiPerUsername = function (req, res) {
		var username = req.query.username;
		Utenti.find({
				"username": username
			})
			.populate('ricettePreferite')
			.exec()
			.then(function (data) {
				res.status(200).json(data);
			})
			.catch(function (err) {
				res.status(500).json(err);
			});

	}

	var aggiungiCategoria = function (req, res) {
		var id = req.params.id;
		var categoria = req.body.categoria;
		Utenti.findById(id)
			.exec()
			.then(function (data) {
				data.categoria.push(categoria);
				return data.save();
			})
			.then(function (data) {
				res.status(200).json(data);
			})
			.catch(function (err) {
				res.status(500).json(err);
			})
	}
	var eliminaCategoria = function (req, res) {
		var id = req.params.id;
		var categoria = req.body.categoria;
		Utenti.findById(id)
			.exec()
			.then(function (data) {
				var indice = data.categoria.indexOf(categoria);
				data.categoria.splice(indice, 1);
				return data.save();
			})
			.then(function (data) {
				res.status(200).json(data);
			})
			.catch(function (err) {
				res.status(500).json(err);
			})
	}

	var aggiungiRicetta = function (req, res) {
		Utenti.findById(req.params.id)
			.exec()
			.then(function (data) {
				data.ricettePreferite.push(req.body.ricetta);
				return data.save();
			})
			.then(function (data) {
				res.status(200).json(data);
			})
			.catch(function (err) {
				res.status(500).json(err);
			});
	}
	var eliminaRicetta = function (req, res) {
		var ricetta = req.body.ricetta;
		Utenti.findById(req.params.id)
			.exec()
			.then(function (data) {
				var indice = data.ricettePreferite.indexOf(ricetta);
				data.ricettePreferite.splice(indice, 1);
				return data.save();
			})
			.then(function (data) {
				res.status(200).json(data);
			})
			.catch(function (err) {
				res.status(500).json(err);
			});
	}

	var modificaUtente = function (req, res) {
		var id = req.params.id;
		Utenti.findByIdAndUpdate(id, req.body)
			.then(function (data) {
				res.status(200).json(data);
			})
			.catch(function (err) {
				res.status(500).json(err);
			})
	}

	return {
		getUtenti: getUtenti,
		creaUtente: creaUtente,
		dettaglioUtente: dettaglioUtente,
		ricercaUtentiPerCategoria: ricercaUtentiPerCategoria,
		ricercaUtentiPerUsername: ricercaUtentiPerUsername,
		aggiungiCategoria: aggiungiCategoria,
		eliminaCategoria: eliminaCategoria,
		aggiungiRicetta: aggiungiRicetta,
		eliminaRicetta: eliminaRicetta,
		modificaUtente: modificaUtente,
	}
})();