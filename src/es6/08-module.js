import hello from "./module.js";

hello();

/*
Module

Para que el código de JavaScript sea más ordenado, legible y mantenible; ES6 
introduce una forma de manejar código en archivos de manera modular. Esto 
involucra exportar funciones o variables de un archivo, e importarlas en 
otros archivos donde se necesiten.

Las exportaciones de código consisten en crear funciones o variables para 
utilizarlas en otros archivos mediante la palabra reservada export.

Las importaciones de código consisten en usar funciones o variables de otros 
archivos mediante la palabra reservada import, que deberán estar siempre lo 
más arriba del archivo y utilizando el mismo nombre que el archivo original.
*/

// module.js
export const myExport = "hola";
function myFunction() {
  console.log("myFunction");
}

export default myFunction;

// main.js
import myFunction, { myExport } from "/module.js";
