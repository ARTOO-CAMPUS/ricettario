var express = require('express');
var app = express();
const PORT = 3000;


app.listen(PORT, function () {
	console.log("listening on http://localhost:" + PORT);
});