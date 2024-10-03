let notasRef = notas; // Copia por referencia
let notasValor = notas.slice(); // Copia por valor

// Modificar el array original
notas.push(11);
console.log(notasRef);  // Afecta: [4, 8, ..., 11]
console.log(notasValor); // No afecta: [4, 8, ..., 1]
