"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatorRoutes = calculatorRoutes;
const calculator_tools_json_1 = __importDefault(require("../tools/calculator.tools.json"));
async function calculatorRoutes(fastify) {
    fastify.post('/tools/calculator', //especifica ruta
    {
        schema: {
            description: 'Ejecutar operaciones aritméticas ',
            tags: ["calculator"],
            body: calculator_tools_json_1.default.inputSchema,
            response: {
                200: {
                    type: 'object',
                    properties: {
                        result: { type: 'number', description: 'Resultado de la operación' },
                        operation: { type: 'string', description: 'Operación realizada' }
                    }
                },
                400: {
                    type: 'object',
                    properties: {
                        error: { type: 'string', description: 'Mensaje de error' }
                    }
                }
            }
        }
    }, async (request, reply) => {
        const { operation, a, b } = request.body;
        let result;
        switch (operation) {
            case 'add':
                result = a + b;
                break;
            case 'substract':
                result = a - b;
                break;
            case 'multiply':
                result = a * b;
                break;
            case 'divide':
                if (b === 0) {
                    return reply.status(400).send({
                        error: 'Division by zero is not allowed.'
                    });
                }
                result = a / b;
                break;
            default:
                return reply.status(400).send({
                    error: 'Operador inválido'
                });
        }
        return { result, operation };
    });
}
