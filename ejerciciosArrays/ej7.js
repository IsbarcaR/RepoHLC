//funcional
let numeros = [1, 2, 3, 4, 5];
let resultado = [];
for (let i = 0; i < numeros.length; i++) {
    resultado.push(numeros[i] * 2);
}
console.log(resultado); // [2, 4, 6, 8, 10]
//Imperativa
let numeros2 = [1, 2, 3, 4, 5];
let resultado2 = numeros2.map(n => n * 2);
console.log(resultado2); // [2, 4, 6, 8, 10]

