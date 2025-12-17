// Import the framework and instantiate it
import Fastify from 'fastify'
import { calculatorRoutes } from './routes/calculator.routes'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
import cookie from '@fastify/cookie'
import helmet from '@fastify/helmet'

import { openapiDocument } from "./docs/openapi";


const fastify = Fastify({
  logger: true
})

const PORT = 3000;

// almacenar las sesiones de nuestra autenticacion
fastify.register(cookie,{
  secret: process.env.COOKIE_SECRET,
  parseOptions: {}
})

// configurar un middleware de seguridad  - helment
//fastify.register(helmet, {
//  contentSecurityPolicy: {
//    directives: {
//      default:'self',
//      styleSrc: ["'self'"],
//    } 
//  }
//})
fastify.register(helmet, {
  contentSecurityPolicy: false
});


// Configurar Swagger
//fastify.register(swagger, {
 // openapi: {
  //  info: {
   //   title: 'Calculator API',
    //  description: 'API para realizar operaciones aritméticas básicas',
     // version: '1.0.0'
    //},
    //servers: [
     // { 
      //  url: 'http://localhost:3000', 
       // description: 'Servidor local' 
      //}
    //],
    //tags: [{ name: 'calculator', description: 'Operaciones de calculadora' }]
  //}  
//});
fastify.register(swagger, {
  openapi: openapiDocument
});


fastify.register(swaggerUi,{
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'list', 
    deepLinking: true
  },
})

// Declare a route
fastify.get('/', async (request, reply) =>{
  return { message: 'MCP Calculator Server is running' }
})

fastify.register(calculatorRoutes);

// Run the server!
const start = async () => {
    try {
        await fastify.listen({ port: PORT, host: '0.0.0.0' });
        console.log(`Server listening on http://localhost:${PORT}`);
        console.log(`Swagger docs available at http://localhost:${PORT}/docs`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};



start()