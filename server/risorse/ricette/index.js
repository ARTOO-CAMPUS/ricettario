var express = require('express');
var router = express.Router();
var Ricette = require('./ricette.controller.js');
//ROTTA CHE MI RESTITUISCE LE RICETTE DEL MONDO
router.get('/', Ricette.getRicette);
//ROTTA CHE MI RESTITUISCE UNA RICETTA
router.get('/:id([0-9a-f]{24})', Ricette.dettaglioRicetta);
//ROTTA PER CREARE LA RICETTA
router.post('/', Ricette.creaRicetta);
//ROTTA PER CERCA PER INGREDIENTE
router.get('/cerca', Ricette.cercaPerIngredienteOCategoria);
//ROTTA PER CERCA PER INGREDIENTE
router.put('/:id([0-9a-f]{24})', Ricette.votoRicetta);

module.exports = router;