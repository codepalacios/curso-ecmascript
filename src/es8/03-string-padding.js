const string = 'Hello';

console.log(string.padStart(6, '_'));
console.log(string.padEnd(6, '_'));

/* 
String padding

El padding consiste en rellar un string por el principio o 
por el final, con el carácter especificado, repetido hasta 
que complete la longitud máxima.

Este método recibe dos argumentos:
- La longitud máxima a rellenar, incluyendo el string inicial.
- El tring para rellenar, por defecto, es un espacio.

Si la longitud a rellenar es menor que la longitud del string 
actual, entonces no agregará nada.

El método padStart completa un string con otro string en el 
inicio hasta tener un total de caracteres especificado.

El método padEnd completa un string con otro string en el 
final hasta tener un total de caracteres especificado.
*/

let string2 = "abc";

console.log(string2.padStart(10)); // "       abc"
console.log(string2.padStart(10, "foo")); // "foofoofabc"
console.log(string2.padStart(6,"123465")); // "123abc"
console.log(string2.padStart(8, "0")); // "00000abc"
console.log(string2.padStart(1)); // "abc"

console.log(string2.padEnd(10)); // "abc       "
console.log(string2.padEnd(10, "foo")); // "abcfoofoof"
console.log(string2.padEnd(6,"123465")); // "abc123"
console.log(string2.padEnd(8, "0")); // "abc00000"
console.log(string2.padEnd(1)); // "abc"
