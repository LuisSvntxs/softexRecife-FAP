// models/user.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database'); // Importe a conexão com o banco de dados

const User = sequelize.define('User', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = User;
