var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var utenteSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: [true, 'Username obbligatorio']
	},
	password: {
		type: String,
		required: [true, 'Password obbligatoria']
	},
	avatar: {
		type: String,
		default: "http://cooklet.us/Images/NewLayout/default-avatar-big.png",
	},
	categoria: [{
		type: String,
		enum: ['Antipasto', 'Primo', 'Secondo', 'Contorno"', 'Dolce'],
		required: [true, 'Devi inserire la categoria'],
	}],

	ricettePreferite: [{
		type: Schema.Types.ObjectId,
		ref: 'Ricette'
	}]
});



var Utenti = mongoose.model('Utenti', utenteSchema);
module.exports = Utenti;