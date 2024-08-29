const express = require('express');
const router = express.Router();
const empleadoController = require('../Controllers/empleado.controller');

// Ruta para crear un nuevo empleado
router.post('/empleados', empleadoController.createEmpleado);

// Ruta para obtener todos los empleados
router.get('/empleados', empleadoController.getAllEmpleados);

// Ruta para obtener un empleado por ID
router.get('/empleados/:id', empleadoController.getEmpleadoById);

// Ruta para actualizar un empleado
router.put('/empleados/:id', empleadoController.updateEmpleado);

// Ruta para eliminar un empleado
router.delete('/empleados/:id', empleadoController.deleteEmpleado);

module.exports = router;
