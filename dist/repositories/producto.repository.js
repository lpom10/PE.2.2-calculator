"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoRepository = void 0;
class ProductoRepository {
    productos = [];
    currentId = 1;
    create(data) {
        const nuevoProducto = {
            id: this.currentId++,
            ...data
        };
        this.productos.push(nuevoProducto);
        return nuevoProducto;
    }
    findAll(categoria) {
        if (categoria) {
            return this.productos.filter(p => p.categoria === categoria);
        }
        return this.productos;
    }
    findById(id) {
        return this.productos.find(p => p.id === id);
    }
    update(id, data) {
        const producto = this.findById(id);
        if (!producto)
            return null;
        Object.assign(producto, data);
        return producto;
    }
    delete(id) {
        const index = this.productos.findIndex(p => p.id === id);
        if (index === -1)
            return false;
        this.productos.splice(index, 1);
        return true;
    }
}
exports.ProductoRepository = ProductoRepository;
