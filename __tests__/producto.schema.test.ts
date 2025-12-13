import { productoSchema } from '../src/schemas/producto.schema.ts';

describe('Producto Schema (Zod)', () => {
  test('Debe validar datos correctos', () => {
    const data = {
      nombre: 'Arroz',
      precio: 2.5,
      categoria: 'Granos'
    };

    expect(() => productoSchema.parse(data)).not.toThrow();
  });

  test('Debe rechazar nombre muy corto', () => {
    const data = { nombre: 'A', precio: 1, categoria: 'Granos' };
    expect(() => productoSchema.parse(data)).toThrow();
  });

  test('Debe rechazar precio negativo', () => {
    const data = { nombre: 'Arroz', precio: -1, categoria: 'Granos' };
    expect(() => productoSchema.parse(data)).toThrow();
  });

  test('Debe rechazar categoría inválida', () => {
    const data = { nombre: 'Arroz', precio: 1, categoria: 123 };
    expect(() => productoSchema.parse(data)).toThrow();
  });

  test('Debe validar campos requeridos', () => {
    const data = { precio: 1, categoria: 'Granos' };
    expect(() => productoSchema.parse(data)).toThrow();
  });

  test('Debe aplicar trim en strings', () => {
    const data = {
      nombre: '  Arroz  ',
      precio: 2,
      categoria: 'Granos'
    };

    const result = productoSchema.parse(data);
    expect(result.nombre).toBe('Arroz');
  });
});
