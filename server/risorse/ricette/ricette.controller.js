var mongoose = require('mongoose');
var Ricette = require('./ricette.model.js');
module.exports = (function () {

	var getRicette = function (req, res) {
		Ricette.find()
			.exec()
			.then(function (data) {
				res.status(200).json(data);
			})
			.catch(function (err) {
				res.status(500).json(err);

			});
	}
	var dettaglioRicetta = function (req, res) {
		var id = req.params.id;
		Ricette.findById(id)
			.exec()
			.then(function (data) {
				res.status(200).json(data);
			})
			.catch(function (err) {
				res.status(500).json(err);

			});
	}
	var creaRicetta = function (req, res) {
		var nuovaRicetta = new Ricette(req.body);
		nuovaRicetta.save().then(function (data) {
			res.status(200).json(data);
		}).catch(function (err) {
			res.status(500).json(err);
		});
	}

	var cercaPerIngredienteOCategoria = function (req, res) {
		var ingrediente = req.query.ingrediente;
		var categoria = req.query.categoria;
		console.log(categoria);
		console.log(ingrediente);
		Ricette.find({
				$or: [{
						"categoria": categoria
					},
					{
						"ingredienti": {
							$in: [ingrediente]
						}
					}
				]
			})
			.exec()
			.then(function (data) {
				res.status(200).json(data);
			})
			.catch(function (err) {
				res.status(500).json(err);

			});
	}

	var votoRicetta = function (req, res) {
		var id = req.params.id;
		var voto = req.body.voto;
		Ricette.findById(id)
			.exec()
			.then(function (ricetta) {
				ricetta.voto.nvoti += 1;
				ricetta.voto.svoti += voto;
				return ricetta.save();
			})
			.then(function (data) {
				res.status(200).json(data);
			})
			.catch(function (err) {

			});
	}
	var commentoRicetta = function (req, res) {
		var id = req.params.id;
		Ricette.findById(id)
			.exec()
			.then(function (ricetta) {
				ricetta.commenti.push(req.body);
				return ricetta.save();
			})
			.then(function (data) {
				res.status(200).json(data);
			})
			.catch(function (err) {
				res.status(500).json(err);
			})
	}

	return {
		getRicette: getRicette,
		dettaglioRicetta: dettaglioRicetta,
		creaRicetta: creaRicetta,
		cercaPerIngredienteOCategoria: cercaPerIngredienteOCategoria,
		votoRicetta: votoRicetta,
		commentoRicetta: commentoRicetta
	}
})();