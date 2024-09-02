const express = require('express');
const router = express.Router();
const facturaDetalleController = require('../Controllers/facturadetalle.controller');

// Crear un nuevo detalle de factura
router.post('/', facturaDetalleController.createFacturaDetalle);

// Obtener todos los detalles de factura
router.get('/', facturaDetalleController.getAllFacturaDetalles);

// Obtener un detalle de factura por ID
router.get('/:id', facturaDetalleController.getFacturaDetalleById);

// Actualizar un detalle de factura
router.put('/:id', facturaDetalleController.updateFacturaDetalle);

// Eliminar un detalle de factura
router.delete('/:id', facturaDetalleController.deleteFacturaDetalle);

module.exports = router;
