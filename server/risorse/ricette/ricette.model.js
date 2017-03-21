var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ricetteSchema = new Schema({
	author: {
		type: Schema.Types.ObjectId,
		ref: 'Utenti'
	},
	titolo: {
		type: String,
		unique: true,
		required: [true, 'Titolo obbligatorio']
	},
	categoria: {
		type: String,
		enum: ['Antipasto', 'Primo', 'Secondo', 'Contorno"', 'Dolce'],
		required: [true, 'Devi inserire la categoria'],
	},
	immagini: [{
		type: String,
		required: [true, 'Devi inserire un immagine'],
	}],
	ingredienti: [{
		type: String,
		required: [true, 'Devi inserire un ingrediente'],
	}],
	difficolta: {
		type: String,
		enum: ['Facile', 'Medio', 'Difficile'],
		required: [true, 'Devi inserire la difficolta'],
	},
	preparazione: {
		type: String,
		required: [true, 'Devi inserire la preparazione'],
	},
	tempodicottura: {
		type: Number,
		required: [true, 'Devi inserire il tempo'],
		min: [5, "troppo poco"],
		max: [180, "troppo"]
	},
	temperaturadicottura: {
		type: Number,
		required: [true, 'Devi inserire la temperatura'],
		min: [5, "troppo poco caldo"],
		max: [250, "si brucia"]
	},
	voto: {
		nvoti: {
			type: Number,
			default: 1,
		},
		svoti: {
			type: Number,
			default: 1,

		}
	},
	commenti: [{
		autore: {
			type: Schema.Types.ObjectId,
			ref: 'Utenti'
		},
		commento: {
			type: String,
			lowercase: true
		},
		datacreazione: {
			type: Date
		}
	}]
});



var Ricette = mongoose.model('Ricette', ricetteSchema);
module.exports = Ricette;