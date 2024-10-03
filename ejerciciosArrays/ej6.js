function ordenarPorUltimaLetra(array) {
    return array.sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));
}

let palabras = ["hola", "bienvenido", "adios"];
console.log(ordenarPorUltimaLetra(palabras)); // ["bienvenido", "hola", "adios"]
