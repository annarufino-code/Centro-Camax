const Usuario = require('../models/usuarioModel');


const usuarioController = {
  // Criar Usuário (POST) - await Usuario.create(req.body)
  async cadastrar(req, res) {
    try {
      const novoUsuario = await Usuario.create(req.body);
      return res.status(201).json(novoUsuario);
    } catch (error) {
      return res.status(400).json({ erro: "Erro ao cadastrar: " + error.message });
    }
  },


  // Listar Usuários (GET) - await Usuario.find()
  async listar(req, res) {
    try {
      const usuarios = await Usuario.find();
      return res.status(200).json(usuarios);
    } catch (error) {
      return res.status(500).json({ erro: "Erro ao listar: " + error.message });
    }
  }
};


module.exports = usuarioController;