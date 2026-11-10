const express = require('express');
const path = require('path');
const connectDB = require('./src/models/database');
const usuarioRoutes = require('./src/routes/usuarioRoutes');


const app = express();


// Conectar ao MongoDB
connectDB();


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));


// Rotas da API
app.use('/api', usuarioRoutes);


// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});