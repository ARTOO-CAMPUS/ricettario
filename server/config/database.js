var mongoose = require('mongoose');
mongoose.connect('mongodb://', function (err) {
	if (!err) {
		console.log("database connesso")
	} else {
		console.log(err);
	}
});