const { DataTypes } = require('sequelize');
const sequelize = require('../Config/dbconfig');
const Factura = require('./factura.model');
const Producto = require('./producto.model');

const FacturaDetalle = sequelize.define('FacturaDetalle', {
  id_factura: {
    type: DataTypes.INTEGER,
    references: {
      model: Factura,
      key: 'id_factura'
    },
    primaryKey: true
  },
  id_linea: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  id_producto: {
    type: DataTypes.INTEGER,
    references: {
      model: Producto,
      key: 'id_producto'
    }
  },
  cantidad: {
    type: DataTypes.INTEGER,
  }
}, {
  tableName: 'factura_detalle',
  timestamps: false
});

module.exports = FacturaDetalle;