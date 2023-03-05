const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2022-01-01');
console.table(matchers);

/* 
Expresiones regulares

Las expresiones regulares o RegEx (regular expresions) son patrones 
de búsqueda y manipulación de cadena de caracteres increíblemente 
potente y están presentes en todos los lenguajes de programación.

En JavaScript se crea este patrón entre barras inclinadas (/patrón/) 
y se utiliza métodos para hacer coincidir la búsqueda.
*/