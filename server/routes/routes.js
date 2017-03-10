var path = require('path');
module.exports = function (app, express) {

	//ROTTA PER GLI UTENTI
	app.use('/utenti', require("./../risorse/utenti"));

	//ROTTA PER LE RICETTE
	app.use('/ricette', require("./../risorse/ricette"));


}