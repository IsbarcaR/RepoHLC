const funOriginal=  function (texto){
    console.log(texto);
}
const funCopia= funOriginal;
console.log("Ejercicio 5");
funOriginal("Hola, soy una función");
funCopia("Hola, soy una función copia");