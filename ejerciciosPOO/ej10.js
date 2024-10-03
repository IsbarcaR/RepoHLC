class Producto {
    constructor(nombre, categoria, unidades, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.unidades = unidades;
        this.precio = precio;
    }

    valueOf() {
        return this.unidades;
    }
}

let prod1 = new Producto("Tablet", "Electrónica", 10, 200);
let prod2 = new Producto("Smartwatch", "Accesorios", 15, 150);

console.log(prod1 > prod2); // false
