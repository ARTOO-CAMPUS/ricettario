var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds055485.mlab.com:55485/ricettario', function (err) {
	if (!err) {
		console.log("database connesso")
	} else {
		console.log(err);
	}
});