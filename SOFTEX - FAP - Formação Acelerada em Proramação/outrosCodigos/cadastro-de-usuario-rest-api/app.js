// app.js (ou server.js)

const express = require('express');
const app = express();
const sequelize = require('./database'); // Importe a conexão com o banco de dados

// ...

// Inicie o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
