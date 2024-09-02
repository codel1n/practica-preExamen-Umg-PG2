const express = require('express');
const router = express.Router();
const productoController = require('../Controllers/producto.controller');

// Crear un nuevo producto
router.post('/', productoController.createProducto);

// Obtener todos los productos
router.get('/', productoController.getAllProductos);

// Obtener un producto por ID
router.get('/:id', productoController.getProductoById);

// Actualizar un producto
router.put('/:id', productoController.updateProducto);

// Eliminar un producto
router.delete('/:id', productoController.deleteProducto);

module.exports = router;
