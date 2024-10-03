function estaVacio(obj) {
    return Object.keys(obj).length === 0;
}

let objetoVacio = {};
console.log(estaVacio(objetoVacio)); // true
