module.exports = (function () {

	var getRicette = function (req, res) {
		res.send("le ricette del mondo");
	}

	return {
		getRicette: getRicette
	}
})();