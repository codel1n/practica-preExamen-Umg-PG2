const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Rutas existentes
const departamentoRoutes = require('./App/Router/departamento.routes'); // Ruta para los departamentos
const empleadoRoutes = require('./App/Router/empleado.routes'); // Ruta para los empleados

// Nuevas rutas
const clienteRoutes = require('./App/Router/cliente.routes'); // Ruta para los clientes
const proveedorRoutes = require('./App/Router/proveedor.routes'); // Ruta para los proveedores
const productoRoutes = require('./App/Router/producto.routes'); // Ruta para los productos
const facturaRoutes = require('./App/Router/factura.routes'); // Ruta para las facturas
const facturaDetalleRoutes = require('./App/Router/facturadetalle.routes'); // Ruta para los detalles de factura

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/departamentos', departamentoRoutes); // Rutas para departamentos
app.use('/api/empleados', empleadoRoutes); // Rutas para empleados
app.use('/api/clientes', clienteRoutes); // Rutas para clientes
app.use('/api/proveedores', proveedorRoutes); // Rutas para proveedores
app.use('/api/productos', productoRoutes); // Rutas para productos
app.use('/api/facturas', facturaRoutes); // Rutas para facturas
app.use('/api/facturadetalles', facturaDetalleRoutes); // Rutas para detalles de factura

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
