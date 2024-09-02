const Cliente = require('../Models/cliente.model');

// Crear un nuevo cliente
exports.createCliente = async (req, res) => {
  try {
    const newCliente = await Cliente.create(req.body);
    res.status(201).json(newCliente);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el cliente", error });
  }
};

// Obtener todos los clientes
exports.getAllClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los clientes", error });
  }
};

// Obtener un cliente por ID
exports.getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (cliente) {
      res.status(200).json(cliente);
    } else {
      res.status(404).json({ message: "Cliente no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el cliente", error });
  }
};

// Actualizar un cliente
exports.updateCliente = async (req, res) => {
  try {
    const [updated] = await Cliente.update(req.body, {
      where: { id_cliente: req.params.id }
    });
    if (updated) {
      const updatedCliente = await Cliente.findByPk(req.params.id);
      res.status(200).json(updatedCliente);
    } else {
      res.status(404).json({ message: "Cliente no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el cliente", error });
  }
};

// Eliminar un cliente
exports.deleteCliente = async (req, res) => {
  try {
    const deleted = await Cliente.destroy({
      where: { id_cliente: req.params.id }
    });
    if (deleted) {
      res.status(200).json({ message: "Cliente eliminado" });
    } else {
      res.status(404).json({ message: "Cliente no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el cliente", error });
  }
};
