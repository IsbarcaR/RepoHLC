// Rest (convertir argumentos a array)
function sumar(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sumar(1, 2, 3)); // 6

// Spread (convertir array a argumentos)
let nums = [4, 5, 6];
console.log(Math.max(...nums)); // 6
