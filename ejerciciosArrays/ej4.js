let listaCompra = ["Peras", "Manzanas", "Kiwis", "Plátanos", "Mandarinas"];

// Eliminar las manzanas
listaCompra.splice(listaCompra.indexOf("Manzanas"), 1);

// Añadir Naranjas y Sandía después de Plátanos
listaCompra.splice(listaCompra.indexOf("Plátanos") + 1, 0, "Naranjas", "Sandía");

// Reemplazar Kiwis por Cerezas y Nísperos
listaCompra.splice(listaCompra.indexOf("Kiwis"), 1, "Cerezas", "Nísperos");

console.log(listaCompra); // ["Peras", "Cerezas", "Nísperos", "Plátanos", "Naranjas", "Sandía", "Mandarinas"]
