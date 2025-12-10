
import { FastifyInstance } from "fastify";
import calculatorTool from "../tools/calculator.tools.json";
import CalculatorRequest from "../tools/calculator.tools.json";

interface CalculatorRequest {
    operation: 'add' | 'substract' | 'multiply' | 'divide';
    a: number;
    b: number;
}

export async function calculatorRoutes(fastify: FastifyInstance) {
    fastify.post<{ Body: CalculatorRequest }>(
        '/tools/calculator', //especifica ruta
        {
            schema: {
                description: 'Ejecutar operaciones aritméticas ',
                tags: ["calculator"],
                body: calculatorTool.inputSchema,
                response: {
                    200:{
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
        },
        async (request, reply) => {
            const { operation, a, b } = request.body;
            let result: number;
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
                    break
                default:
                    return reply.status(400).send({
                        error: 'Operador inválido'
                    });
            }   
            return { result, operation };     
        } 
    );
}