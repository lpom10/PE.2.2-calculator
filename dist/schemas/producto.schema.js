"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productoSchema = void 0;
const zod_1 = require("zod");
exports.productoSchema = zod_1.z.object({
    nombre: zod_1.z
        .string()
        .min(3, 'El nombre debe tener al menos 3 caracteres')
        .transform(v => v.trim()),
    precio: zod_1.z
        .number()
        .positive('El precio debe ser positivo'),
    categoria: zod_1.z.string().min(3)
});
