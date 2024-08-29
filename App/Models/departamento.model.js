const { DataTypes } = require('sequelize');
const sequelize = require('../Config/dbconfig');

const Departamento = sequelize.define('Departamento', {
    id_departamento: {
        type: DataTypes.INTEGER,
        autoIncrement: true, // Hacer que el campo sea auto-incremental
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING(80),
        allowNull: false
    }
}, {
    tableName: 'departamento',
    timestamps: false
});

module.exports = Departamento;
