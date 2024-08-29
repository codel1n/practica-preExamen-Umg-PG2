const { Sequelize } = require('sequelize');
const dbConfig = require('./env.js');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  port: dbConfig.PORT,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Esto permite conexiones sin necesidad de verificar el certificado
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;

