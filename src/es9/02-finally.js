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
    .finally(() => console.log('Finally'));