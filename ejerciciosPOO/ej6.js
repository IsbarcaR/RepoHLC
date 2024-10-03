class Televisor extends Producto {
    constructor(nombre, categoria, unidades, precio, tamaño) {
        super(nombre, categoria, unidades, precio);
        this.tamaño = tamaño;
    }

    getInfo() {
        return `${this.nombre} (${this.categoria}, ${this.tamaño}"): ${this.unidades} uds x ${this.precio} € = ${this.importe()} €`;
    }
}

let televisor = new Televisor("LG OLED", "Televisores", 4, 800, 55);
console.log(televisor.getInfo());
