"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearProducto = void 0;
const producto_repository_1 = require("../repositories/producto.repository");
const producto_schema_1 = require("../schemas/producto.schema");
const repository = new producto_repository_1.ProductoRepository();
const crearProducto = (req, res) => {
    try {
        const data = producto_schema_1.productoSchema.parse(req.body);
        const producto = repository.create(data);
        res.status(201).json(producto);
    }
    catch (error) {
        res.status(400).json({ error: 'Datos inválidos' });
    }
};
exports.crearProducto = crearProducto;
