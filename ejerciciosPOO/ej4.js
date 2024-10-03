function multiplicarPropiedades(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

let objetoNumerico = { a: 2, b: 4, c: "texto" };
multiplicarPropiedades(objetoNumerico);
console.log(objetoNumerico); // { a: 4, b: 8, c: 'texto' }
