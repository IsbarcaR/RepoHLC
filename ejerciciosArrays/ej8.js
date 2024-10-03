let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// Días que empiezan por M
let diasM = dias.filter(dia => dia.startsWith("M"));
console.log(diasM); // ["Martes", "Miércoles"]

// Primer día que empieza por M
let primerDiaM = dias.find(dia => dia.startsWith("M"));
console.log(primerDiaM); // "Martes"

// Posición del primer día que empieza por M
let indexDiaM = dias.findIndex(dia => dia.startsWith("M"));
console.log(indexDiaM); // 1

// Si algún día empieza por 'S'
let hayDiaS = dias.some(dia => dia.startsWith("S"));
console.log(hayDiaS); // true

// Si todos los días terminan por 's'
let todosTerminanS = dias.every(dia => dia.endsWith("s"));
console.log(todosTerminanS); // false

// Array con los días en mayúsculas
let diasMayus = dias.map(dia => dia.toUpperCase());
console.log(diasMayus); // ["LUNES", "MARTES", ...]

// Array con los días en minúsculas
let diasMinus = Array.from(dias, dia => dia.toLowerCase());
console.log(diasMinus); // ["lunes", "martes", ...]

// Cadena de texto con los días separados por comas
let diasCadena = dias.reduce((acc, dia) => acc + (acc ? ', ' : '') + dia, '');
console.log(diasCadena); // "Lunes, Martes, Miércoles, ..."

// Días con su posición
dias.forEach((dia, i) => console.log(`${i}: ${dia}`));

// Si algún día es 'Martes'
let contieneMartes = dias.includes("Martes");
console.log(contieneMartes); // true
