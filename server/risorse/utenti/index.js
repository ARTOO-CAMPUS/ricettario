var express = require('express');
var router = express.Router();
var Utenti = require('./utenti.controller.js');
//ROTTA CHE MI RESTITUISCE GLI UTENTI
router.get('/', Utenti.getUtenti);
//ROTTA DI CREAZIONE UTENTE
router.post('/', Utenti.creaUtente);


module.exports = router;