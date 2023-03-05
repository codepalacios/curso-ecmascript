var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();

/*
Let y Const

En ES6 se implemento dos nuevas formas de declaración de variables con las palabras reservadas let y const.

Las variables declaradas con la palabra reservada var se pueden re-declarar y reasignar. Las variables declaradas 
con let solo se pueden reasignar y las variables declaradas con const no se pueden re-declarar ni reasignar. 
El declarar variables con var podría generar problemas, por tanto, se dejó de utilizar. 

Las variables declaradas con la palabra reservada var son de function scope, mientras que las variables 
declaradas con let y const son block scope.
*/
