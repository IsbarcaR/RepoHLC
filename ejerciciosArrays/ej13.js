function filtrarPorRango(array, a, b) {
    return array.filter(num => num >= a && num <= b);
}
console.log(filtrarPorRango([1, 2, 3, 4, 5], 2, 4)); // [2, 3, 4]
