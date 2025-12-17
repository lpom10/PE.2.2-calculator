- MCP Calculator API – Documentación OpenAPI -

- Descripción
Esta práctica corresponde a la actividad de trabajo autónomo sobre
documentación OpenAPI, versionado y seguridad del proyecto PE-2.2.

- Documentación OpenAPI
Swagger disponible en:
http://localhost:3000/docs


- Evidencias
[Imagen de captura 1; servidor corriendo ] ("![img/sawgger.png](https://github.com/lpom10/PE.2.2-calculator/blob/7c823cb74dfc98e3f85dcc703149445aff426dc8/img/sawgger.png)")
[Imagen de captura 1; consola en ejecución ] ("![img/pract.png](https://github.com/lpom10/PE.2.2-calculator/blob/7c823cb74dfc98e3f85dcc703149445aff426dc8/img/pract.png)")



practica 1
[Imagen de captura 1; primer GET realizado ] ("![img/holaMundo.png](https://github.com/lpom10/PE.2.2-calculator/blob/8ccf9b16b87de108a8ed183dbe3b269dd6ca5a7b/img/holaMundo.png)")
[Imagen de captura 2; operación SUMA ] ("![img/add.png](https://github.com/lpom10/PE.2.2-calculator/blob/8ccf9b16b87de108a8ed183dbe3b269dd6ca5a7b/img/add.png)")
[Imagen de captura 3; operación MULTIPLICACION] ("![img/multiply.png](https://github.com/lpom10/PE.2.2-calculator/blob/8ccf9b16b87de108a8ed183dbe3b269dd6ca5a7b/img/multiply.png)")
[Imagen de captura 4; operación DIVISION] ("![img/divide.png](https://github.com/lpom10/PE.2.2-calculator/blob/8ccf9b16b87de108a8ed183dbe3b269dd6ca5a7b/img/divide.png)")
[Imagen de captura 5; ERROR de la DIVISION] ("![img/errorDivide.png](https://github.com/lpom10/PE.2.2-calculator/blob/8ccf9b16b87de108a8ed183dbe3b269dd6ca5a7b/img/errorDivide.png)")
[Imagen de captura 6; API en el NAVEGADOR] ("![img/calculatorAPI.png](https://github.com/lpom10/PE.2.2-calculator/blob/8ccf9b16b87de108a8ed183dbe3b269dd6ca5a7b/img/calculatorAPI.png)")

API Marketplace Agrícola – Pruebas Unitarias con Jest
-Descripción del Proyecto

Este proyecto corresponde a la actividad de trabajo autónomo de la asignatura Middleware y Seguridad de Bases de Datos, donde se implementan pruebas unitarias con Jest sobre una API desarrollada previamente (PE-2.1).

El objetivo principal es asegurar la calidad del código, validar la lógica de negocio y comprobar el correcto funcionamiento de las validaciones de datos mediante pruebas automatizadas.

-Tecnologías Utilizadas

Node.js
TypeScript
Jest
ts-jest
Zod (validación de datos)

-Estructura del Proyecto
src/
├── repositories/
│   └── producto.repository.ts
├── schemas/
│   └── producto.schema.ts
__tests__/
├── producto.repository.test.ts
├── producto.schema.test.ts
jest.config.js
package.json
README.md

-Ejecución de Pruebas Unitarias

Para ejecutar todas las pruebas unitarias:
~npm test
[Imagen de captura 7; npm test] ("![img/npmtest.png](https://github.com/lpom10/PE.2.2-calculator/blob/c9c9597d46fa927dedebf5fc056375550c639f1e/img/npmtest.png)")

Reporte de Cobertura de Código

Para generar el reporte de cobertura:
~npm test -- --coverage
[Imagen de captura 8; npm test -- --coverage] ("![img/npmtest--coverage.png](https://github.com/lpom10/PE.2.2-calculator/blob/c9c9597d46fa927dedebf5fc056375550c639f1e/img/npmtest--coverage.png)")

-Resultados de Cobertura

Métrica	Porcentaje
Statements	100%
Branches	100%
Functions	100%
Lines	100%

-Análisis de Cobertura

Los resultados muestran una cobertura del 100% en todas las métricas, lo que indica que todas las líneas de código, funciones y ramas fueron ejecutadas durante las pruebas.

Esto se logró debido a que:

Se implementaron pruebas completas para todos los métodos CRUD del repository.
Se validaron tanto casos positivos como negativos en los esquemas Zod.
Se incluyeron pruebas para escenarios de error y validaciones de datos inválidos.

-Áreas con Baja Cobertura

No se identificaron áreas con baja cobertura en esta implementación, ya que todas las funcionalidades actuales del proyecto fueron correctamente probadas.


-Lista de Pruebas Implementadas


Creación de producto con ID autoincrementado
Incremento correcto de IDs
Obtención de todos los productos
Filtrado por categoría
Búsqueda por ID existente
Manejo de ID inexistente
Actualización correcta de productos
Eliminación de productos existentes
Manejo de eliminación con ID inexistente
Validación (producto.schema.test.ts)
Validación de datos correctos
Rechazo de nombre demasiado corto
Rechazo de precio negativo
Validación de campos requeridos
Validación de tipos de datos inválidos
Transformación automática de strings (trim)

-Conclusión

La implementación de pruebas unitarias permitió garantizar que la lógica de negocio y las validaciones del proyecto funcionen correctamente. El uso de Jest junto con TypeScript y Zod facilita la detección temprana de errores y contribuye a mantener un código más robusto y mantenible.