"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the framework and instantiate it
const fastify_1 = __importDefault(require("fastify"));
const calculator_routes_1 = require("./routes/calculator.routes");
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const fastify = (0, fastify_1.default)({
    logger: true
});
const PORT = 3000;
// Configurar Swagger
fastify.register(swagger_1.default, {
    openapi: {
        info: {
            title: 'Calculator API',
            description: 'API para realizar operaciones aritméticas básicas',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor local'
            }
        ],
        tags: [{ name: 'calculator', description: 'Operaciones de calculadora' }]
    }
});
fastify.register(swagger_ui_1.default, {
    routePrefix: '/docs',
    uiConfig: {
        docExpansion: 'list',
        deepLinking: true
    },
});
// Declare a route
fastify.get('/', async (request, reply) => {
    return { message: 'MCP Calculator Server is running' };
});
fastify.register(calculator_routes_1.calculatorRoutes);
// Run the server!
const start = async () => {
    try {
        await fastify.listen({ port: PORT, host: '0.0.0.0' });
        console.log(`Server listening on http://localhost:${PORT}`);
        console.log(`Swagger docs available at http://localhost:${PORT}/docs`);
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
