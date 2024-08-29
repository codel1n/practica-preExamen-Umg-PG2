const { DataTypes } = require('sequelize');
const sequelize = require('../Config/dbconfig');

const Empleado = sequelize.define('Empleado', {
    id_empleado: {
        type: DataTypes.INTEGER,
        autoIncrement: true, // Hacer que el campo sea auto-incremental
        primaryKey: true
    },
    primer_nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    segundo_nombre: {
        type: DataTypes.STRING(100),
    },
    primer_apellido: {
        type: DataTypes.STRING(100),
    },
    segundo_apellido: {
        type: DataTypes.STRING(100),
    },
    nit: {
        type: DataTypes.STRING(10),
    },
    salario: {
        type: DataTypes.NUMERIC,
    },
    estatus: {
        type: DataTypes.NUMERIC,
    },
    id_departamento: {
        type: DataTypes.INTEGER,
        references: {
            model: 'departamento',
            key: 'id_departamento'
        }
    }
}, {
    tableName: 'empleado',
    timestamps: false
});

module.exports = Empleado;
