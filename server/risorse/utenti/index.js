var express = require('express');
var router = express.Router();
var Utenti = require('./utenti.controller.js');
//ROTTA CHE MI RESTITUISCE GLI UTENTI
router.get('/', Utenti.getUtenti);
//ROTTA DI CREAZIONE UTENTE
router.post('/', Utenti.creaUtente);
//ROTTA DI DETTAGLIO UTENTE
router.get('/:id([0-9a-f]{24})', Utenti.dettaglioUtente);
//ROTTA DI RICERCA PER CATEGORIA
router.get('/categoria', Utenti.ricercaUtentiPerCategoria);
//ROTTA DI RICERCA PER USERNAME
router.get('/username', Utenti.ricercaUtentiPerUsername);
//AGGIUNGI CATEGORIA
router.put('/categoria/:id([0-9a-f]{24})', Utenti.aggiungiCategoria);
//ELIMINA CATEGORIA
router.put('/eliminacategoria/:id([0-9a-f]{24})', Utenti.eliminaCategoria);
//AGGIUNGI RICETTA
router.put('/ricetta/:id([0-9a-f]{24})', Utenti.aggiungiRicetta);
//ELIMINA RICETTA
router.put('/eliminaricetta/:id([0-9a-f]{24})', Utenti.eliminaRicetta);


module.exports = router;