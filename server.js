const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Nuevas rutas
const departamentoRoutes = require('./App/Router/departamento.routes'); // Ruta para los departamentos
const empleadoRoutes = require('./App/Router/empleado.routes'); // Ruta para los empleados

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api', departamentoRoutes); // Agregar rutas para departamentos
app.use('/api', empleadoRoutes); // Agregar rutas para empleados

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
