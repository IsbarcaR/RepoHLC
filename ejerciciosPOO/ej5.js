class Producto {
    constructor(nombre, categoria, unidades, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.unidades = unidades;
        this.precio = precio;
    }

    importe() {
        return this.unidades * this.precio;
    }

    getInfo() {
        return `${this.nombre} (${this.categoria}): ${this.unidades} uds x ${this.precio} € = ${this.importe()} €`;
    }
}

let producto1 = new Producto("TV Samsung 42\"", "Televisores", 3, 400);
let producto2 = new Producto("Laptop HP", "Computadoras", 5, 600);
let producto3 = new Producto("iPhone", "Teléfonos", 2, 1000);

console.log(producto1.getInfo());
