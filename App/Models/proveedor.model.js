const { DataTypes } = require('sequelize');
const sequelize = require('../Config/dbconfig');

const Proveedor = sequelize.define('Proveedor', {
  id_proveedor: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  empresa: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING(100),
  },
  telefono: {
    type: DataTypes.INTEGER,
  },
  nit: {
    type: DataTypes.STRING(30),
  },
  ciudad: {
    type: DataTypes.STRING(100),
  },
  pais: {
    type: DataTypes.STRING(100),
  },
  contacto: {
    type: DataTypes.STRING(100),
  },
  email: {
    type: DataTypes.STRING(100),
  },
  telefono_contacto: {
    type: DataTypes.INTEGER,
  },
  estatus: {
    type: DataTypes.INTEGER,
  }
}, {
  tableName: 'proveedor',
  timestamps: false
});

module.exports = Proveedor;
