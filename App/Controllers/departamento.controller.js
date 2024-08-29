const Departamento = require('../Models/departamento.model');

// Crear un nuevo departamento
exports.createDepartamento = async (req, res) => {
  try {
    const { descripcion } = req.body;

    const newDepartamento = await Departamento.create({ descripcion });

    res.status(201).json(newDepartamento);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el departamento", error });
  }
};

// Obtener todos los departamentos
exports.getAllDepartamentos = async (req, res) => {
  try {
    const departamentos = await Departamento.findAll();
    res.status(200).json(departamentos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los departamentos", error });
  }
};

// Obtener un departamento por ID
exports.getDepartamentoById = async (req, res) => {
  try {
    const { id } = req.params;
    const departamento = await Departamento.findByPk(id);

    if (departamento) {
      res.status(200).json(departamento);
    } else {
      res.status(404).json({ message: "Departamento no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el departamento", error });
  }
};

// Actualizar un departamento
exports.updateDepartamento = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion } = req.body;

    const [updated] = await Departamento.update({ descripcion }, { where: { id_departamento: id } });

    if (updated) {
      const updatedDepartamento = await Departamento.findByPk(id);
      res.status(200).json(updatedDepartamento);
    } else {
      res.status(404).json({ message: "Departamento no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el departamento", error });
  }
};

// Eliminar un departamento
exports.deleteDepartamento = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Departamento.destroy({ where: { id_departamento: id } });

    if (deleted) {
      res.status(200).json({ message: "Departamento eliminado" });
    } else {
      res.status(404).json({ message: "Departamento no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el departamento", error });
  }
};
