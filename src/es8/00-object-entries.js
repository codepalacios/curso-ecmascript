const countries = { MX: "Mexico", CO: "Colombia", CL: "Chile", PE: "Peru" };
console.log(Object.entries(countries));

/*
Object entries

Los métodos de transformación de objetos a arrays sirven para obtener la 
información de las propiedades, sus valores o ambas.

Obtener los pares de valor de un objeto en un array

Object.entries() devuelve un array con las entries en forma [propiedad, valor] 
del objeto enviado como argumento.

Obtener las propiedades de un objeto en un array

Object.keys() devuelve un array con las propiedades (keys) del objeto enviado 
como argumento.
*/

const usuario = {
  name: "Andres",
  email: "andres@correo.com",
  age: 23,
};

console.log(Object.keys(usuario));
// [ 'name', 'email', 'age' ]
