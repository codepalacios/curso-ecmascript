async function* anotherGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then((response) => console.log(response.value));
other.next().then((response) => console.log(response.value));
other.next().then((response) => console.log(response.value));
console.log("Hello!");

async function arrayOfNames(array) {
  for await (let value of array) {
    console.log(value);
  }
}

const names = arrayOfNames(["Oscar", "David", "Ana"]);
console.log("After");

/* 
Generadores asíncronos

Los generadores asíncronos son semejantes a los generadores, 
pero combinando la sintáxis de promesas.

Como utilizar for await

De la misma manera, for await es un ciclo repetitivo que se 
maneja asíncronamente. El ciclo siempre debe estar dentro de 
una función con async.
*/
