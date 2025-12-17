import { OpenAPIV3 } from "openapi-types";

export const openapiDocument: OpenAPIV3.Document = {
  openapi: "3.0.3",

  info: {
    title: "MCP Calculator API",
    description:
      "MCP Calculator Server es una API REST del proyecto PE-2.2 que expone " +
      "operaciones matemáticas básicas (suma, resta, multiplicación y división). " +
      "La API demuestra buenas prácticas de validación, documentación OpenAPI, " +
      "versionado y manejo de errores.",
    version: "1.0.0",
    termsOfService: "https://example.com/terms",
    contact: {
      name: "Luis Poma",
      email: "luis.poma@example.com",
      url: "https://github.com/tu-usuario",
    },
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },

  servers: [
    {
      url: "http://localhost:3000/api/v1",
      description: "Servidor local de desarrollo",
    },
  ],

  paths: {
  "/calculator/add": {
    post: {
      summary: "Add two numbers",
      description: "Returns the sum of two numbers.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            examples: {
              valid: {
                summary: "Suma válida",
                value: { a: 5, b: 3 },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Successful addition",
          content: {
            "application/json": {
              examples: {
                success: {
                  value: { result: 8 },
                },
              },
            },
          },
        },
        400: {
          description: "Invalid input",
          content: {
            "application/json": {
              examples: {
                error: {
                  value: { error: "Invalid input data" },
                },
              },
            },
          },
        },
      },
    },
  },

  "/calculator/divide": {
    post: {
      summary: "Divide two numbers",
      description: "Divides two numbers and returns the result.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            examples: {
              valid: {
                summary: "División válida",
                value: { a: 10, b: 2 },
              },
              divisionByZero: {
                summary: "División por cero",
                value: { a: 10, b: 0 },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Successful division",
          content: {
            "application/json": {
              examples: {
                success: {
                  value: { result: 5 },
                },
              },
            },
          },
        },
        400: {
          description: "Division by zero error",
          content: {
            "application/json": {
              examples: {
                divisionZero: {
                  value: {
                    error: "Division by zero is not allowed",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
},


  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: "apiKey",
        in: "header",
        name: "X-API-KEY",
        description:
          "API Key para identificar al cliente y mitigar ataques como Tool Poisoning.",
      },
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        description:
          "Autenticación mediante Bearer Token (JWT). Se envía en el header Authorization.",
      },
    },
  },

  security: [{ ApiKeyAuth: [] }],
};
