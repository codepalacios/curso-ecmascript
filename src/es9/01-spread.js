const user = { username: "gndx", age: 34, country: "CO" };
const { username, ...values } = user;
console.log(username);
console.log(values);

/* 
Spread

Las propiedades de propagación consisten en expandir las propiedades 
de un objeto utilizando el spread operator. Sirve para crear nuevos 
objetos a patir de otros.

Crear copias de objetos utilizando las propiedades de propagación

Semejante a crear copias de arrays utilizando el operador de 
propagación, se puede realizar copias de objetos en un solo nivel 
mediate las propiedades de propagación.

De esta manera el segundo objeto tendrá una referencia en memoria 
diferente al original.

Cuidado con la copia en diferentes niveles de profundidad

El operador de propagación sirve para crear una copia en un solo nivel 
de profundidad, esto queire decir que si existen objetos o arrays 
dentro de un objeto a copiar, entonces los sub-elementos en cada nivel, 
tendrán la misma referencia en la copia y en el original.

La manera de sulucionar esto es más compleja, tendrías que utilizar el 
operador de propagación para cada elemento en cada nivel de profundidad.
*/

// Creando un nuevo objeto
const objeto = {
  nombre: "Andres",
  age: 23,
};

const usuario = {
  ...objeto,
  plataforma: "Platzi",
};

console.log(usuario);

// Crear copias de objetos
const objetoOriginal = {a: 1, b: 2}
const objetoReferencia = objetoOriginal
const objetoCopia = {...objetoOriginal}

console.log(objetoReferencia === objetoOriginal); // true
console.log(objetoOriginal === objetoCopia); // false

// Diferentes niveles de profundidad
const original = { datos: [1, [2, 3], 4, 5] }
const copia = { ...original }

console.log(original === copia); // false
console.log(original["datos"] === copia["datos"]); // true
