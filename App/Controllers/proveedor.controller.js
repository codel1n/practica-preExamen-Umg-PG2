const Proveedor = require('../Models/proveedor.model');

// Crear un nuevo proveedor
exports.createProveedor = async (req, res) => {
  try {
    const newProveedor = await Proveedor.create(req.body);
    res.status(201).json(newProveedor);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el proveedor", error });
  }
};

// Obtener todos los proveedores
exports.getAllProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.findAll();
    res.status(200).json(proveedores);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los proveedores", error });
  }
};

// Obtener un proveedor por ID
exports.getProveedorById = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByPk(req.params.id);
    if (proveedor) {
      res.status(200).json(proveedor);
    } else {
      res.status(404).json({ message: "Proveedor no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el proveedor", error });
  }
};

// Actualizar un proveedor
exports.updateProveedor = async (req, res) => {
  try {
    const [updated] = await Proveedor.update(req.body, {
      where: { id_proveedor: req.params.id }
    });
    if (updated) {
      const updatedProveedor = await Proveedor.findByPk(req.params.id);
      res.status(200).json(updatedProveedor);
    } else {
      res.status(404).json({ message: "Proveedor no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el proveedor", error });
  }
};

// Eliminar un proveedor
exports.deleteProveedor = async (req, res) => {
  try {
    const deleted = await Proveedor.destroy({
      where: { id_proveedor: req.params.id }
    });
    if (deleted) {
      res.status(200).json({ message: "Proveedor eliminado" });
    } else {
      res.status(404).json({ message: "Proveedor no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el proveedor", error });
  }
};
