// Import the framework and instantiate it
import Fastify from 'fastify'
import { calculatorRoutes } from './routes/calculator.routes.js'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui';
import cookie from '@fastify/cookie'
import helmet from '@fastify/helmet'
import rateLimit from '@fastify/rate-limit'
import jwt from '@fastify/jwt'
import oauthPlugin, { OAuth2Namespace } from '@fastify/oauth2'



// Declaración de tipos
declare module 'fastify' {
  interface FastifyInstance {
    auth0OAuth2: OAuth2Namespace;
    authenticate: (request: any, reply: any) => Promise<void>;
  }
}

// Validación rápida de variables de entorno
if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_CLIENT_ID) {
  console.error("ERROR CRÍTICO: Variables de entorno faltantes.");
  console.error("Asegúrate de tener el archivo .env y de ejecutar con: node --env-file=.env ... o usar 'dotenv'");
  process.exit(1);
}

const fastify = Fastify({
  logger: true
})

const PORT = 3000;

//configurar un middleware de seguridad  - helment
// 1. Configurar Helmet (headers de seguridad)
fastify.register(helmet, {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
    }
  }
});

// 2. Configurar Rate Limiting (protección básica DDoS)
fastify.register(rateLimit, {
  max: 5,
  timeWindow: 5000
});


// 3. Configurar cookies (requerido para mantener estado OAuth)
fastify.register(cookie, {
  secret: process.env.COOKIE_SECRET,
  parseOptions: {}
});

// 4. Configurar JWT (para firmar nuestros propios tokens)
fastify.register(jwt, {
  secret: process.env.JWT_SECRET || 'supersecret'
});

// Decorador de autenticación (antes de las rutas)
fastify.decorate('authenticate', async (request: any, reply: any) => {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.code(401).send({
      statusCode: 401,
      error: 'Unauthorized',
      message: 'Token JWT inválido o no proporcionado. Por favor, autentícate en /login'
    });
  }
});

// 5. Configurar Auth0 OAuth2
fastify.register(oauthPlugin, {
  name: 'auth0OAuth2',
  scope: ['openid', 'profile', 'email'],
  credentials: {
    client: {
      id: process.env.AUTH0_CLIENT_ID || '',
      secret: process.env.AUTH0_CLIENT_SECRET || ''
    },
    auth: {
      tokenHost: `https://${process.env.AUTH0_DOMAIN}`,
      tokenPath: '/oauth/token',
      authorizePath: '/authorize'
    }
  },
  startRedirectPath: '/login',
  callbackUri: 'http://localhost:3000/login/callback'
});



// Configurar Swagger
fastify.register(swagger, {
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

// Ruta de callback (Intercambio de token)
fastify.get('/login/callback', async (request, reply) => {
  const token = await fastify.auth0OAuth2.getAccessTokenFromAuthorizationCodeFlow(request);

  // Firmamos nuestro propio JWT
  const jwtToken = fastify.jwt.sign({
    sub: token.token.access_token.substring(0, 10),
    iat: Math.floor(Date.now() / 1000),
  });

  return {
    message: 'Autenticación exitosa. Usa este token en el Header Authorization.',
    jwt_token: jwtToken
  };
});

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