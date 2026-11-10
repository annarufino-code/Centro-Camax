const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');


// Rota para cadastrar (POST)
router.post('/usuarios', usuarioController.cadastrar);


// Rota para listar (GET)
router.get('/usuarios', usuarioController.listar);


module.exports = router;