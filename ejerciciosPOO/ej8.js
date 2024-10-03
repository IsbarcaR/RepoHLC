class Producto {
    constructor(nombre, categoria, unidades, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.unidades = unidades;
        this.precio = precio;
    }

    toString() {
        return `${this.categoria} - ${this.nombre}`;
    }
}

let producto = new Producto("PlayStation 5", "Consolas", 10, 499);
console.log(producto.toString()); // "Consolas - PlayStation 5"
