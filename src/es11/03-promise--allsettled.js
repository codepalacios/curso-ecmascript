const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2"));

Promise.allSettled([promise1, promise2, promise3])
    .then(reponse => console.log(reponse));

/* 
Promise.allSettled

En alguna situación necesitarás manejar varias promesas y obtener sus resultados.

El método Promise.all sirve para manejar varias promesas al mismo tiempo. Recibe 
como argumento un array de promesas.

El probema es que Promise.all() se resolverá, si y solo si todas las promesas 
fueron resueltas. Si al menos una promesa es rechazada, Promise.all() será rechazada.

Promise.allSettled permite manejar varias promesas, que devolverá un array de objetos 
con el y el valor de cada promesa, haya sido resuelta o rechazada.
*/
