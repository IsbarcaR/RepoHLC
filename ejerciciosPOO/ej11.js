function prodsSortByName(arr) {
    return arr.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));
}

function prodsSortByPrice(arr) {
    return arr.slice().sort((a, b) => a.importe() - b.importe());
}

function prodsTotalPrice(arr) {
    return arr.reduce((total, prod) => total + prod.importe(), 0).toFixed(2);
}

function prodsWithLowUnits(arr, unidades) {
    return arr.filter(prod => prod.unidades < unidades);
}

function prodsList(arr) {
    return 'Listado de productos:\n' + arr.map(prod => `- ${prod.getInfo()}`).join('\n');
}

let productosArray = [
    new Producto("Laptop", "Computadoras", 5, 1000),
    new Producto("TV Samsung", "Televisores", 2, 600),
    new Producto("iPhone", "Teléfonos", 3, 1200),
    new Producto("Lavadora", "Electrodomésticos", 1, 300),
    new Producto("Cafetera", "Electrodomésticos", 10, 50)
];

console.log(prodsSortByName(productosArray));
console.log(prodsSortByPrice(productosArray));
console.log(prodsTotalPrice(productosArray));
console.log(prodsWithLowUnits(productosArray, 3));
console.log(prodsList(productosArray));
