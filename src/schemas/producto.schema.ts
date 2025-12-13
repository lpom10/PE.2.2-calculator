import { z } from 'zod';

export const productoSchema = z.object({
  nombre: z
    .string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .transform(v => v.trim()),

  precio: z
    .number()
    .positive('El precio debe ser positivo'),

  categoria: z.string().min(3)
});
