const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'escola',
  'root',
  '8671a7ad',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;
