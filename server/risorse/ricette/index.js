var express = require('express');
var router = express.Router();
var Ricette = require('./ricette.controller.js');

//ROTTA CHE MI RESTITUISCE LE RICETTE DEL MONDO
router.get('/', Ricette.getRicette);

module.exports = router;