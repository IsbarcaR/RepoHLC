let productos = [
    new Producto("Laptop", "Computadoras", 5, 1000),
    new Producto("TV Samsung", "Televisores", 2, 600),
    new Producto("iPhone", "Teléfonos", 3, 1200)
];

productos.sort((a, b) => a.toString().localeCompare(b.toString()));
console.log(productos);
