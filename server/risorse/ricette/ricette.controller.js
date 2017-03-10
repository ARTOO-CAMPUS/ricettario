module.exports = (function () {

	var getRicette = function (req, res) {
		res.send("le ricette del mondo");
	}
	var dettaglioRicetta = function (req, res) {
		var id = req.params.id;
		res.send("dettaglio ricetta con id " + id);
	}
	var creaRicetta = function (req, res) {
		res.send("creo la ricetta");
	}

	return {
		getRicette: getRicette,
		dettaglioRicetta: dettaglioRicetta,
		creaRicetta: creaRicetta,
	}
})();