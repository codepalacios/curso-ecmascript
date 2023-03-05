// enahced object literals

function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    id: uId,
  };
}

console.log(newUser("gndx", 34, "MX", 1));

/* 
Object literals

Los objetos literales consis en crear objetos a partir de variables
sin repetir el nombre.

Con los parámetros de objetos puedes obviar la repetición de nombres, 
JavaScript creará la propiedad a partir del nombre de la variable con 
su respectivo valor.

El resultado es el mismo, pero sin la necesidad de repetir palabras. 
Puedes combinarlo con variables que su propiedad tiene un nombre diferente.
*/