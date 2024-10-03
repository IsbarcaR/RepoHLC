function ordenarNotas(array) {
    return array.sort((a, b) => a - b);
}

console.log(ordenarNotas([4, 8, 3, 10, 5])); // [3, 4, 5, 8, 10]
