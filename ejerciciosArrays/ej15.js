function noRepetidos(array) {
    return array.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el));
}

console.log(noRepetidos([1, 2, 2, 3, 4, 4, 5])); // [1, 3, 5]
