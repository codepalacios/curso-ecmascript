// Arrays destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);

// Object destructuring
let user = { username: "Oscar", age: 34 };
let { username, age } = user;
console.log(username, user.age);

// Spread operator
let person = { name: "Oscar", age: 28 };
let country = "MX";
let data = { id: 1, ...person, country };
console.log(data);

// rest
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}
sum(1, 1, 2, 3);

/* 
Asignación de destructuración

La desestructuración (destructuring) consiste en extraer los valores 
de arrays o propiedades de objetos en distintas variables.

Spread operator

El operador de propagación, como su nombre lo dice, consiste en propagar 
los elementos de un iterable, ya sea un array o string utilizando tres 
puntos (...) dentro de un array.

También se utiliza para objetos, pero esta característica fue añadida en 
versiones posteriores de ECMAScript y es denominada propeidades de propagación.

Para realizar una copia de un array, deberás tener cuidado de la referencia en
memoria. Los arrays se guardan en una referencia en la memoria del computador, 
al crear una copia, este tendrá la misma referencia que el original. Debido a 
esto, si cambias algo en la copia, también lo harás en el original. Para evitar 
esto, utiliza el operador de propagación para crear una copia del array que 
utilice una referencia en memoria diferente al original.

Parámetro rest

El parámetro rest consiste en agrupar el residuo de elementos mediante la 
sintaxis de tres puntos (...) seguido de una variable que contendrá los 
elementos de un array.

Esta característica sirve para crear funciones que acepten cualquier número 
de argumentos para agruparlos en un array.

Diferencia entre el parámetro rest y el operador de progagación

Aunque el parámetro rest y el operador de progagación utilicen la misma 
sintaxis, son diferentes.

El parámetro rest agrupa el residuo de lementos y siempre debe estar en la 
última posición, mientras que el operador de propagación expande los elementos 
de un iterable en un array y no importa en que lugar esté situado.
*/

// Para strings
const array = [ ..."Hola"];    // [ 'H', 'o', 'l', 'a' ]
console.log(array);

// En arrays
const otherArray = [ ...array];   //[ 'H', 'o', 'l', 'a' ]
console.log(otherArray);

// Copiar array con spread operator
const originalArray = [1,2,3,4,5]
const copyArray = [...originalArray]
copyArray[0] = 0

console.log(originalArray); // [1,2,3,4,5]
console.log(copyArray); // [0,2,3,4,5]
console.log(originalArray === copyArray); // false
