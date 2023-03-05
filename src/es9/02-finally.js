const anotherFuncion = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!!");
    } else {
      reject("Whoooooops!");
    }
  });
};

anotherFuncion()
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finally"));

/* 
Promise.finally

El método finally para promesas consiste en ejecutar código después 
que una promesa haya sido ejecutada como resulta o rechazada.
*/
