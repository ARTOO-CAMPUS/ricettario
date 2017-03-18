var path = require('path');
var bodyParser = require('body-parser');
module.exports = function (app, express) {

	// LIVERELOAD
	var livereload = require('livereload');
	var server = livereload.createServer();
	server.watch(path.join(__dirname, "..", "..", "client"));

	//TRADUZIONE DEL BODY
	app.use(bodyParser.json());

	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, "..", "..", "client", "index.html"));
	});

	app.use("/", express.static(path.join(__dirname, "..", "..", "client")));
	app.use("js", express.static(path.join(__dirname, "..", "..", "client", "js")));
	app.use("css", express.static(path.join(__dirname, "..", "..", "client", "css")));

	//ROTTA PER GLI UTENTI
	app.use('/utenti', require("./../risorse/utenti"));

	//ROTTA PER LE RICETTE
	app.use('/ricette', require("./../risorse/ricette"));


}