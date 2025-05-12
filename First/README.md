<p></p>
<img src="img/logo.png" height="140">

 <img alt="calificación" align="right" height="28" src="../../blob/badges/.github/badges/points-label0.svg" />
  
# 🥷 Examen. Sentencias condicionales

Los temas que se evalúan al realizar este reto son:

- Sintaxis de las estructuras condicionales en TypeScript.
- El operador ternario como una forma concisa de expresar condiciones.
- La sentencia if y su uso en la toma de decisiones.
- La sentencia if...else para manejar casos alternativos.
- La sentencia if...else if para evaluar múltiples condiciones en orden.
- Cómo controlar el flujo de un programa con condicionales.

# 🎯 Objetivos de aprendizaje

- Comprender la sintaxis de las estructuras condicionales en TypeScript y su importancia en la programación.
- Utilizar el operador ternario de manera efectiva para expresar condiciones de forma concisa en sus programas.
- Dominar el uso de la sentencia if para tomar decisiones basadas en condiciones específicas.
- Aplicar la sentencia if...else para manejar casos alternativos y ejecutar diferentes bloques de código según la evaluación de una condición.
- Utilizar la sentencia if...else if para evaluar múltiples condiciones en orden y ejecutar el bloque de código correspondiente al primer caso verdadero.
- Aprender a controlar el flujo de un programa mediante la implementación de estructuras condicionales.

# 📋 Instrucciones

1. Utilizando `typescript` codifica las funciones que se indican en la sección `requerimientos funcionales` de este documento.
2. Las funciones deben ser codificadas en un archivo llamado `app.ts`.
3. Las funciones deben tener el nombre que se indica y el número y tipo de parámetros que se especifican en la sección `requerimientos funcionales`.
4. En el archivo `demo.ts` se deben incluir ejemplos de código que muestren el correcto funcionamiento de las funciones.
5. Las funciones deben ser probadas y ejecutadas utilizando la consola.
6. El código fuente final debe ser almacenado en este repositorio de GitHub.

# 📥 Entregables

- Código fuente de la solución a los requerimientos planteados en la sección `requerimientos funcionales` en este repositorio

# :star: Evaluación

- Para que el ejercicio sea considerada como válido, el repositorio deberá tener por lo menos 1 commit por cada función.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y obtendrán cero como calificación.
- Los ejercicios deben pasar las pruebas automatizadas

# 💯 Calificación

| Num | Función         | Puntos                                                                              |
| --- | --------------- | ----------------------------------------------------------------------------------- |
| 01  | getDiscount     | <img alt="calificación" src="../../blob/badges/.github/badges/points-label1.svg" /> |
| 02  | getAmount       | <img alt="calificación" src="../../blob/badges/.github/badges/points-label2.svg" /> |
| 03  | isInRange       | <img alt="calificación" src="../../blob/badges/.github/badges/points-label3.svg" /> |
| 04  | getShippingCost | <img alt="calificación" src="../../blob/badges/.github/badges/points-label4.svg" /> |
| 05  | calculateTax    | <img alt="calificación" src="../../blob/badges/.github/badges/points-label5.svg" /> |
|     |                 | <img alt="calificación" src="../../blob/badges/.github/badges/points-label0.svg" /> |

# 👨‍💻 Requerimientos funcionales

Los requerimientos funcionales se refieren a las acciones específicas que las funciones deben realizar y los tipos de datos que deben recibir y retornar. Las firmas de las funciones muestran la sintaxis correcta para definir las funciones, especificando los nombres y tipos de los parámetros, así como el tipo de dato que retorna cada función.

### 01 getDiscount

Escribe una función que calcule el descuento en una tienda de ropa según el monto de compra y la temporada de rebajas. Las reglas son las siguientes:

- Si el monto es mayor o igual a $50 y es temporada de rebajas , aplica un descuento del 10%. Debe regresar el número 10
- Si no es temporada de rebajas, no aplica descuento. Debe regresar el número 0

```typescript
getDiscount(amount: number, isSale: boolean): number
```

### 02 getAmount

Escribe una función que calcule el descuento en una tienda en función de la antigüedad del cliente y el monto de compra. Las reglas son las siguientes:

- Si el cliente tiene más de 5 años de antigüedad (seniority) y el monto de compra es mayor o igual a $100 (totalAmount), aplica un descuento del 15%.
- Si el cliente tiene entre 1 y 5 años de antigüedad (seniority) y el monto de compra es mayor o igual a $50 (totalAmount), aplica un descuento del 10%.
- En otros casos, no aplica descuento.

La función debe regresar el monto del descuento.

```typescript
getAmount(totalAmount: number, seniority: number): number
```

### 03 isInRange

Escribe una función que recibe un número y un rango y regresa `true` si el número está en el rango entre star y isEligibleForDiscount. De lo contrario, regresa `false`.

```typescript
isInRange(number: number, start: number, end: number): boolean
```

### 04 getShippingCost

Escribe una función que calcule el costo de envío basado en el precio del producto, la distancia a la dirección de envío, si el cliente tiene membresía premium, y el día de la fecha del envío.

- El costo regular por kilómetro es de $0.5., pero si la distanciaes mayor a 500 km, el costo por kilómetro es de $0.75.
- Los Miércoles, si el precio del producto es mayor o igual a $500 o el cliente tiene membresía premium, el envío es gratis.
- Los Lunes y Jueves hay un descuento del 10% en el costo de envío para los clientes que tienen membresía premium.

```typescript
getShippingCost(price: number, distance: number, isPremium: boolean, date: Date): number
```

### 05 calculateTax

Escribe una función que calcule el impuesto a pagar basado en la cantidad, si el producto es exento de impuestos, si es un artículo de lujo, y el día de la compra.

- Si el producto es exento de impuestos, no se aplica impuesto.
- Si el monto es mayor a $5000 el impuesto es del 10%. y si es menor o igual el descuento es del 5%.
- Los fines de semana, Viernes, Sábado y Domingo, se aplica un 2% adicional de impuesto.
- Si el producto es un artículo de lujo, se aplica un 3% de impuesto adicional.

La función debe regresar el monto del impuesto.

```typescript
calculateTax(amount: number, isTaxFree: boolean, isLuxury: boolean, date: Date): number
```

# 📚 Recursos

Aquí tienes una lista de recursos recomendados que puedes utilizar como referencia y consulta:

- [TypeScript](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [DevDocs](https://devdocs.io/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Awesome TypeScript](https://github.com/dzharii/awesome-typescript)

Estos recursos ofrecen documentación, ejemplos de código, preguntas y respuestas, y otras herramientas útiles para ayudar en el aprendizaje de TypeScript y desarrollo de software. ¡Espero que te resulten útiles!

# ✅ Indicadores de cumplimiento

Utiliza esta lista de verificación para asegurarte de que has completado todos los pasos requeridos en el reto:

- [ ] Implementé las funciones solicitadas en la sección `requerimientos funcionales` en el archivo `app.ts`.
- [ ] Agregué ejemplos de código en el archivo `demo.ts` para mostrar el correcto funcionamiento de las funciones.
- [ ] Ejecuté el programa en la consola y verifiqué que los resultados fueran los esperados.
- [ ] Verifiqué que las funciones pasen todas las pruebas automatizadas.
- [ ] Realicé al menos 1 commit por cada función implementada.
- [ ] Guardé y organicé mi código fuente en el repositorio clonado.
- [ ] Confirmé y envié los cambios al repositorio remoto.
- [ ] Verifiqué que todos los requerimientos funcionales hayan sido cumplidos.

Recuerda que tu repositorio debe tener al menos 1 commit por cada función implementada y debe pasar las pruebas automatizadas para ser considerado válido. ¡Happy coding!

Shield: [![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

Esta obra está bajo una
[Licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg
