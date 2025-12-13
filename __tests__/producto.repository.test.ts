import { ProductoRepository } from '../src/repositories/producto.repository.ts';

describe('ProductoRepository', () => {
  let repository: ProductoRepository;

  beforeEach(() => {
    repository = new ProductoRepository();
  });

  test('create(): debe crear un producto con ID autoincrementado', () => {
    const producto = repository.create({
      nombre: 'Arroz',
      precio: 2.5,
      categoria: 'Granos'
    });

    expect(producto.id).toBe(1);
  });

  test('create(): debe incrementar el ID en cada inserción', () => {
    repository.create({ nombre: 'Arroz', precio: 2, categoria: 'Granos' });
    const producto = repository.create({ nombre: 'Azúcar', precio: 1.5, categoria: 'Granos' });

    expect(producto.id).toBe(2);
  });

  test('findAll(): debe retornar todos los productos', () => {
    repository.create({ nombre: 'A', precio: 1, categoria: 'Granos' });
    repository.create({ nombre: 'B', precio: 2, categoria: 'Lácteos' });

    const productos = repository.findAll();

    expect(productos.length).toBe(2);
  });

  test('findAll(): debe filtrar productos por categoría', () => {
    repository.create({ nombre: 'Leche', precio: 1, categoria: 'Lácteos' });
    repository.create({ nombre: 'Queso', precio: 3, categoria: 'Lácteos' });
    repository.create({ nombre: 'Arroz', precio: 2, categoria: 'Granos' });

    const filtrados = repository.findAll('Lácteos');

    expect(filtrados.length).toBe(2);
  });

  test('findById(): debe retornar producto existente', () => {
    const producto = repository.create({
      nombre: 'Pan',
      precio: 0.5,
      categoria: 'Panadería'
    });

    const encontrado = repository.findById(producto.id);

    expect(encontrado).toBeDefined();
  });

  test('findById(): debe retornar undefined si no existe', () => {
    const encontrado = repository.findById(999);
    expect(encontrado).toBeUndefined();
  });

  test('update(): debe actualizar un producto existente', () => {
    const producto = repository.create({
      nombre: 'Huevos',
      precio: 2,
      categoria: 'Proteínas'
    });

    const actualizado = repository.update(producto.id, { precio: 2.5 });

    expect(actualizado?.precio).toBe(2.5);
  });

  test('update(): debe retornar null si el ID no existe', () => {
    const resultado = repository.update(999, { precio: 10 });
    expect(resultado).toBeNull();
  });

  test('delete(): debe eliminar un producto existente', () => {
    const producto = repository.create({
      nombre: 'Sal',
      precio: 1,
      categoria: 'Condimentos'
    });

    const eliminado = repository.delete(producto.id);
    expect(eliminado).toBe(true);
  });

  test('delete(): debe retornar false si el ID no existe', () => {
    const eliminado = repository.delete(999);
    expect(eliminado).toBe(false);
  });
});
