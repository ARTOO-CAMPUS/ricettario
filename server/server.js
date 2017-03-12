var express = require('express');
var app = express();
const PORT = 3000;

//IMPORTO IL FILE DI CONFIGURAZIONE PER IL DB
require("./config/database.js");
//IMPORTO IL FILE DI CONFIGURAZIONE PER IL LOGGER
require("./config/logger.js")(app);
<<<<<<< HEAD
//ROUTES
=======

>>>>>>> 64dff93f440382b050aeae8010b6b5a146961bb8
require("./routes/routes.js")(app, express);
//START DEL SERVER
app.listen(PORT, function () {
	console.log("listening on http://localhost:" + PORT);
});