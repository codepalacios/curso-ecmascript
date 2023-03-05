function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('David', 15, 'CO');

function newAdmin(name = 'Oscar', age = 32, country = 'CL') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'PE');

/* 
Default params

Los parámetros por defecto consisten en establecer un valor por defecto a los parámetros 
de una función, para asegurar que el código se ejecute correctamente en el caso de que no 
se establezcan los argumentos correspondientes en la invocación de la función.
*/
