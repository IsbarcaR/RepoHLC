let notas = [4, 8, 3, 10, 5, 7, 6, 9, 2, 1];

// Nota más baja
let notaBaja = Math.min(...notas);
console.log(notaBaja); // 1

// Nota más alta
let notaAlta = Math.max(...notas);
console.log(notaAlta); // 10

// Media de las notas
let mediaNotas = notas.reduce((a, b) => a + b) / notas.length;
console.log(mediaNotas.toFixed(2)); // 5.50

// Si hay algún 5
let hayCinco = notas.includes(5);
console.log(hayCinco); // true

// Array restando 1 a cada nota
let menosUno = notas.map(nota => nota - 1);
console.log(menosUno); // [3, 7, 2, 9, 4, 6, 5, 8, 1, 0]

// Array sumando 1 a las suspensas
let masUnoSuspensas = notas.map(nota => (nota < 5 ? nota + 1 : nota));
console.log(masUnoSuspensas); // [5, 8, 4, 10, 5, 7, 6, 9, 3, 2]
