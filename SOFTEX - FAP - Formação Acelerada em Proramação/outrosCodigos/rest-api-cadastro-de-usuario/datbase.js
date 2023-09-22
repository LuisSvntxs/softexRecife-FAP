// database.js
const { Sequelize } = require('sequelize');
const config = require('./config.js');

const sequelize = new Sequelize(config.development);

// Teste a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados bem-sucedida.');
  })
  .catch((error) => {
    console.error('Erro na conexão com o banco de dados:', error);
  });

module.exports = sequelize;
