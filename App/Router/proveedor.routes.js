const express = require('express');
const router = express.Router();
const proveedorController = require('../Controllers/proveedor.controller');

// Crear un nuevo proveedor
router.post('/', proveedorController.createProveedor);

// Obtener todos los proveedores
router.get('/', proveedorController.getAllProveedores);

// Obtener un proveedor por ID
router.get('/:id', proveedorController.getProveedorById);

// Actualizar un proveedor
router.put('/:id', proveedorController.updateProveedor);

// Eliminar un proveedor
router.delete('/:id', proveedorController.deleteProveedor);

module.exports = router;
