const { DataTypes } = require('sequelize');
const sequelize = require('../Config/dbconfig');

const Cliente = sequelize.define('Cliente', {
  id_cliente: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  razon_social: {
    type: DataTypes.STRING(100),
  },
  nit: {
    type: DataTypes.STRING(10),
  },
  direccion: {
    type: DataTypes.STRING(100),
  },
  telefono: {
    type: DataTypes.STRING(100),
  },
  email: {
    type: DataTypes.STRING(50),
  },
  fecha_ingreso: {
    type: DataTypes.DATE,
  },
  estatus: {
    type: DataTypes.INTEGER,
  }
}, {
  tableName: 'cliente',
  timestamps: false
});

module.exports = Cliente;
