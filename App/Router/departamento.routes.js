const express = require('express');
const router = express.Router();
const departamentoController = require('../Controllers/departamento.controller');

// Ruta para crear un nuevo departamento
router.post('/departamentos', departamentoController.createDepartamento);

// Ruta para obtener todos los departamentos
router.get('/departamentos', departamentoController.getAllDepartamentos);

// Ruta para obtener un departamento por ID
router.get('/departamentos/:id', departamentoController.getDepartamentoById);

// Ruta para actualizar un departamento
router.put('/departamentos/:id', departamentoController.updateDepartamento);

// Ruta para eliminar un departamento
router.delete('/departamentos/:id', departamentoController.deleteDepartamento);

module.exports = router;
