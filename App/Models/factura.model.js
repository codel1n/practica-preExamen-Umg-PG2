const { DataTypes } = require('sequelize');
const sequelize = require('../Config/dbconfig');
const Cliente = require('./cliente.model');
const Empleado = require('./empleado.model');

const Factura = sequelize.define('Factura', {
  id_factura: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  no_fact: {
    type: DataTypes.INTEGER,
  },
  serie: {
    type: DataTypes.STRING(20),
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    references: {
      model: Cliente,
      key: 'id_cliente'
    }
  },
  id_empleado: {
    type: DataTypes.INTEGER,
    references: {
      model: Empleado,
      key: 'id_empleado'
    }
  },
  fecha_fac: {
    type: DataTypes.DATE,
  }
}, {
  tableName: 'factura',
  timestamps: false
});

module.exports = Factura;
