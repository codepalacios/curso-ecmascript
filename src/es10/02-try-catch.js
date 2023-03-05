try {
    hello();
} catch (error) {
    console.log(error);
}

try {
    anotherFn();
} catch {
    console.log('Esto es un error');
}

/* 
Try catch

El parámetro opcional de catch permite omitir el error si es necesario.

try {
  // Manejar el código
} catch (err) {
  // Se utiliza el parámetro `err`
}

try {
  // Manejar el código
} catch {
  // Manejar el error sin el parámetro.
}

Aunque siempre es recomendable manejar el error como parámetro, ya que 
más información del problema.
*/
