var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ricetteSchema = new Schema({
	titolo: {
		type: String,
		required: [true, 'Devi inserire il nome']
	},
	categoria: {
		type: String,
		enum: ['Antipasto', 'Primo', 'Secondo', 'Contorni', 'Dolce'],
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
		type: Number,
		min: [1, "poco"],
		max: [5, "troppo"]
	},
	commenti: [{
		autore: {
			type: Schema.Types.ObjectId,
			ref: 'Utenti'
		},
		commento: String
	}]
});



var Ricette = mongoose.model('Ricette', ricetteSchema);
module.exports = Ricette;