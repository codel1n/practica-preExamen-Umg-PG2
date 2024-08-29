const Empleado = require('../Models/empleado.model');
const Departamento = require('../Models/departamento.model'); // Asegúrate de importar correctamente el modelo Departamento si necesitas realizar joins o validaciones adicionales

// Crear un nuevo empleado
exports.createEmpleado = async (req, res) => {
  try {
    const {
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      nit,
      salario,
      estatus,
      id_departamento
    } = req.body;

    const newEmpleado = await Empleado.create({
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      nit,
      salario,
      estatus,
      id_departamento
    });

    res.status(201).json(newEmpleado);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el empleado", error });
  }
};

// Obtener todos los empleados
exports.getAllEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.findAll();
    res.status(200).json(empleados);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los empleados", error });
  }
};

// Obtener un empleado por ID
exports.getEmpleadoById = async (req, res) => {
  try {
    const { id } = req.params;
    const empleado = await Empleado.findByPk(id);

    if (empleado) {
      res.status(200).json(empleado);
    } else {
      res.status(404).json({ message: "Empleado no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el empleado", error });
  }
};

// Actualizar un empleado
exports.updateEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      nit,
      salario,
      estatus,
      id_departamento
    } = req.body;

    const [updated] = await Empleado.update({
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      nit,
      salario,
      estatus,
      id_departamento
    }, {
      where: { id_empleado: id }
    });

    if (updated) {
      const updatedEmpleado = await Empleado.findByPk(id);
      res.status(200).json(updatedEmpleado);
    } else {
      res.status(404).json({ message: "Empleado no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el empleado", error });
  }
};

// Eliminar un empleado
exports.deleteEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Empleado.destroy({ where: { id_empleado: id } });

    if (deleted) {
      res.status(200).json({ message: "Empleado eliminado" });
    } else {
      res.status(404).json({ message: "Empleado no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el empleado", error });
  }
};
