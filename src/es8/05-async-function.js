const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve("AsynC!!"), 2000)
      : reject(new Error("Error!"));
  });
};

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log("Hello!");
};

console.log("Before");
anotherFn();
console.log("After");

/*
Funciones asíncronas

Las función asíncrona se crea mediante la palabra reservada async 
y retonar una promesa.

async function asyncFunction () {...}

const asyncFunction = async () => { ... } 

La palabra reservada await significa que espera hasta que una 
promesa sea resuelta y solo funciona dentro de una función asíncrona.

Los bloques try / catch sirven para manejar si la promesa ha sido 
resuelta o rechazada.

async function asyncFunction () {
  try {
    const response = await promesa()
    return response
  } catch (error) {
    return error
  }
}
*/

const fnAsync2 = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve("AsynC!!"), 2000)
      : reject(new Error("Error!"));
  });
};

const anotherFn2 = () => {
  const something = fnAsync2();
  console.log(something);
  console.log("Hello!");
};

console.log("Before");
anotherFn2();
console.log("After");
