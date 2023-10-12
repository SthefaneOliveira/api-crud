const Sequelize = require('sequelize');
const sequelize = require('../config/config');

const Aluno = sequelize.define('Aluno', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false, 
  },
  idade: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Aluno;
