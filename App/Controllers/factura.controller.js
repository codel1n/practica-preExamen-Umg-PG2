const Factura = require('../Models/factura.model');

// Crear una nueva factura
exports.createFactura = async (req, res) => {
  try {
    const newFactura = await Factura.create(req.body);
    res.status(201).json(newFactura);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la factura", error });
  }
};

// Obtener todas las facturas
exports.getAllFacturas = async (req, res) => {
  try {
    const facturas = await Factura.findAll();
    res.status(200).json(facturas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las facturas", error });
  }
};

// Obtener una factura por ID
exports.getFacturaById = async (req, res) => {
  try {
    const factura = await Factura.findByPk(req.params.id);
    if (factura) {
      res.status(200).json(factura);
    } else {
      res.status(404).json({ message: "Factura no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la factura", error });
  }
};

// Actualizar una factura
exports.updateFactura = async (req, res) => {
  try {
    const [updated] = await Factura.update(req.body, {
      where: { id_factura: req.params.id }
    });
    if (updated) {
      const updatedFactura = await Factura.findByPk(req.params.id);
      res.status(200).json(updatedFactura);
    } else {
      res.status(404).json({ message: "Factura no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la factura", error });
  }
};

// Eliminar una factura
exports.deleteFactura = async (req, res) => {
  try {
    const deleted = await Factura.destroy({
      where: { id_factura: req.params.id }
    });
    if (deleted) {
      res.status(200).json({ message: "Factura eliminada" });
    } else {
      res.status(404).json({ message: "Factura no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la factura", error });
  }
};
