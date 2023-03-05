let numbers = [1, 3, 4, 6, 7, 8];

console.log(numbers.includes(9));

const list = ['oscar', 'David', 'Ana'];

console.log(list.includes('Oscar'));

/*
Array includes

El método includes determina si un array o string incluye un determinado 
elemento. Devuelve true o false, si existe o no respectivamente.

Este método recibe dos argumentos: 
- El elemento a comparar.
- El índice inicial desde donde comprara hasta el último elemento.

El método includes se utiliza para arrays y strings. El método es sendible 
a mayúsculas, minúsculas y espacios.
*/

//Utilizando strings
const saludo = "Hola mundo"

console.log(saludo.includes("Hola")); // true
console.log(saludo.includes("Mundo")); // false
console.log(saludo.includes(" ")); // true
console.log(saludo.includes("Hola", 1)); // false
console.log(saludo.includes("mundo", -5)); // true

// Utilizando arrays
const frutas = ["manzana", "pera", "piña", "uva"]

console.log(frutas.includes("manzana")); // true
console.log(frutas.includes("Pera")); // false
console.log(frutas.includes("sandía")); // false
console.log(frutas.includes("manzana", 1)); //false
console.log(frutas.includes("piña", -1)); // false
console.log(frutas[0].includes("man")); // true
