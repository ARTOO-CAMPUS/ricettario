var express = require('express');
var app = express();
const PORT = 3000;

//IMPORTO IL FILE DI CONFIGURAZIONE PER IL DB
require("./config/database.js");
//IMPORTO IL FILE DI CONFIGURAZIONE PER IL LOGGER
require("./config/logger.js")(app);

require("./routes/routes.js")(app, express);
//START DEL SERVER
app.listen(PORT, function () {
	console.log("listening on http://localhost:" + PORT);
});