let tvSamsung = {
    nombre: "TV Samsung 42”",
    categoria: "Televisores",
    unidades: 4,
    precio: 345.95,
    importe() {
        return this.unidades * this.precio;
    }
};

console.log(tvSamsung.importe()); // 1383.8
