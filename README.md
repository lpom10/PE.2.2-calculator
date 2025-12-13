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
[Imagen de captura 7; npm test] ("![img/npmtest.png](https://github.com/lpom10/PE.2.2-calculator/blob/8ccf9b16b87de108a8ed183dbe3b269dd6ca5a7b/img/calculatorAPI.png)")

Reporte de Cobertura de Código

Para generar el reporte de cobertura:
~npm test -- --coverage
[Imagen de captura 8; npm test -- --coverage] ("![img/npmtest--coverage.png](https://github.com/lpom10/PE.2.2-calculator/blob/8ccf9b16b87de108a8ed183dbe3b269dd6ca5a7b/img/calculatorAPI.png)")