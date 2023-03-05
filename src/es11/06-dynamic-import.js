const button = document.getElementById('btn');

button.addEventListener('click', async function () {
    const module = await import('./module.js');
    console.log(module);
    module.hello();
});

/* 
Dynamic Import

La importación dinámica consiste en cargar los módulos cuando 
el usuario los vaya a utilizar, y no al iniciar la aplicación. 
Esto permite que la página web se más rapida, porque descarga 
menos recursos.

La expresión import() recibe un argumento de tipo string con 
la ruta del módulo a importar y devuelve una promesa.
*/