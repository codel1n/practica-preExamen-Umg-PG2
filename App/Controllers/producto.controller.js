const Producto = require('../Models/producto.model');

// Crear un nuevo producto
exports.createProducto = async (req, res) => {
  try {
    const newProducto = await Producto.create(req.body);
    res.status(201).json(newProducto);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el producto", error });
  }
};

// Obtener todos los productos
exports.getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error });
  }
};

// Obtener un producto por ID
exports.getProductoById = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (producto) {
      res.status(200).json(producto);
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto", error });
  }
};

// Actualizar un producto
exports.updateProducto = async (req, res) => {
  try {
    const [updated] = await Producto.update(req.body, {
      where: { id_producto: req.params.id }
    });
    if (updated) {
      const updatedProducto = await Producto.findByPk(req.params.id);
      res.status(200).json(updatedProducto);
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el producto", error });
  }
};

// Eliminar un producto
exports.deleteProducto = async (req, res) => {
  try {
    const deleted = await Producto.destroy({
      where: { id_producto: req.params.id }
    });
    if (deleted) {
      res.status(200).json({ message: "Producto eliminado" });
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el producto", error });
  }
};
