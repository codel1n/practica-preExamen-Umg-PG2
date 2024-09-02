const FacturaDetalle = require('../Models/facturadetalle.model');

// Crear un nuevo detalle de factura
exports.createFacturaDetalle = async (req, res) => {
  try {
    const newFacturaDetalle = await FacturaDetalle.create(req.body);
    res.status(201).json(newFacturaDetalle);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el detalle de la factura", error });
  }
};

// Obtener todos los detalles de factura
exports.getAllFacturaDetalles = async (req, res) => {
  try {
    const facturaDetalles = await FacturaDetalle.findAll();
    res.status(200).json(facturaDetalles);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los detalles de factura", error });
  }
};

// Obtener un detalle de factura por ID
exports.getFacturaDetalleById = async (req, res) => {
  try {
    const facturaDetalle = await FacturaDetalle.findByPk(req.params.id);
    if (facturaDetalle) {
      res.status(200).json(facturaDetalle);
    } else {
      res.status(404).json({ message: "Detalle de factura no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el detalle de factura", error });
  }
};

// Actualizar un detalle de factura
exports.updateFacturaDetalle = async (req, res) => {
  try {
    const [updated] = await FacturaDetalle.update(req.body, {
      where: { id_factura: req.params.id, id_linea: req.body.id_linea }
    });
    if (updated) {
      const updatedFacturaDetalle = await FacturaDetalle.findByPk(req.params.id);
      res.status(200).json(updatedFacturaDetalle);
    } else {
      res.status(404).json({ message: "Detalle de factura no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el detalle de factura", error });
  }
};

// Eliminar un detalle de factura
exports.deleteFacturaDetalle = async (req, res) => {
  try {
    const deleted = await FacturaDetalle.destroy({
      where: { id_factura: req.params.id, id_linea: req.body.id_linea }
    });
    if (deleted) {
      res.status(200).json({ message: "Detalle de factura eliminado" });
    } else {
      res.status(404).json({ message: "Detalle de factura no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el detalle de factura", error });
  }
};
