const users = {
  gndx: {
    country: "MX",
  },
  ana: {
    country: "CO",
  },
};

console.log(users?.bebeloper?.country);

/* 
Optional chaining

Cuando intentas acceder a propiedades de un objeto que no existe, 
JavaScript te retornará undefined.

const usuario = {}
console.log(usuario.redes) // undefined

Al acceder a una propiedad más profunda de un objeto, que previamente 
fue evalauda como undefined, el programa se detendrá y mostrará un 
error de tipo.

const usuario = {}
console.log(usuario.redes.facebook) 
// TypeError: Cannot read properties of undefined (reading 'facebook')

Es como intentar ejecutar undefined.facebok, lo cual es un error de 
tipo, debido a que undefined es un primitivo, no es un objeto.

Cómo utilizar el encadenamiento opcional

El encadenamiento opcional u optional chaining (?.) detiene la 
evaluación del objeto cuando el valor es undefined o null antes del 
(?.), retornando undefined sin detener el programa por un error.

const usuario = {}
console.log(usuario.redes?.facebook) 
// undefined

Pero, ¿por qué usaría propiedades de un objeto vacío? Cuando realizas 
peticiones, el objeto no contiene la información solicitada en seguida, 
por ende, necesitas que el programa no colapse hasta que lleguen los 
datos y puedas utilizarlos.

No abuses del encadenamiento opcional

El encadenamiento opcional se debe utilizar cuando probablemente un 
valor no exista.

Por ejemplo, en un objeto usuario que siempre existe, pero la propiedad 
redes es opcional, entonces se debería escribir usuario.redes?.facebook 
y no usuario?.redes?.facebook.

Si abusas del encadenamiento opcional y existe un error en un objeto, el 
programa podría "ocultarlo" por un undefined, provocando que el debugging 
sea más complicado.
*/
