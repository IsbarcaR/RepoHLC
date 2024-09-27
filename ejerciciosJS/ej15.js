console.log("Ejercicio 15");

console.log(parseInt("756"));//pasa a entero
console.log(parseFloat("123.45"));//pasa a decimal
console.log(isNaN("abc")); //manda true porque no es un número
console.log(isFinite(123)); // true (es un número finito)
console.log(Number("123")); //manda 123 (pasa a número como int, si fuera decimal lo pasa como float)
console.log(String(123));  // "123" (número a str)
console.log(Boolean(123));     // true (números diferentes de 0 son true)pasa lo mismo con str que no esten vacios
console.log(Boolean(0));       // false (0 es false) pasa lo mismo con cadenas vacías, undefined, null, NaN