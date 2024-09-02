const { DataTypes } = require('sequelize');
const sequelize = require('../Config/dbconfig');
const Proveedor = require('./proveedor.model');

const Producto = sequelize.define('Producto', {
  id_producto: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  descripcion: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
  },
  stock_minimo: {
    type: DataTypes.INTEGER,
  },
  precio_unitario: {
    type: DataTypes.FLOAT,
  },
  id_proveedor: {
    type: DataTypes.INTEGER,
    references: {
      model: Proveedor,
      key: 'id_proveedor'
    }
  }
}, {
  tableName: 'producto',
  timestamps: false
});

module.exports = Producto;