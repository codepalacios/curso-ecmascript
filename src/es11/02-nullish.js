const anotherNumber = null;
const validate = anotherNumber ?? 5;
console.log(validate);

/* 
Nullish

El operador nullish coalescing (??) consiste en evaluar una variable 
si es undefined o nul para asignarle un valor.

Diferencia entre el operador OR y el Nullish coalescing

El operador OR (||) evalúa un valor false. Un valor false es aquel 
que es falso en un contexto booleano, esto son: 0, "" (string vacío), 
false, NaN, undefined o null.

Puede que recibas una variable con un valor false que necesites 
asignarle a otra variable, que no sea null o undefined. Si evalúas 
con el operador OR, este lo cambiara, provocando un resultado erróneo.
*/

const id = 0;

const orId = id || "Sin id";
const nullishId = id ?? "Sin id";

console.log(orId); //  'Sin id'
console.log(nullishId); // 0
