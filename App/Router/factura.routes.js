const express = require('express');
const router = express.Router();
const facturaController = require('../Controllers/factura.controller');

// Crear una nueva factura
router.post('/', facturaController.createFactura);

// Obtener todas las facturas
router.get('/', facturaController.getAllFacturas);

// Obtener una factura por ID
router.get('/:id', facturaController.getFacturaById);

// Actualizar una factura
router.put('/:id', facturaController.updateFactura);

// Eliminar una factura
router.delete('/:id', facturaController.deleteFactura);

module.exports = router;
