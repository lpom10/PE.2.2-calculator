import { Request, Response } from 'express';
import { ProductoRepository } from '../repositories/producto.repository';
import { productoSchema } from '../schemas/producto.schema';

const repository = new ProductoRepository();

export const crearProducto = (req: Request, res: Response) => {
  try {
    const data = productoSchema.parse(req.body);
    const producto = repository.create(data);
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ error: 'Datos inválidos' });
  }
};
