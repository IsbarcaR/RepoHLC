class Producto {
    constructor(nombre, categoria, unidades, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.unidades = unidades;
        this.precio = precio;
    }

    static getCategories() {
        return ["Televisores", "Computadoras", "Teléfonos", "Electrodomésticos"];
    }
}

console.log(Producto.getCategories()); // ["Televisores", "Computadoras", "Teléfonos", "Electrodomésticos"]
