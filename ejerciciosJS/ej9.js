console.log("Ejercicio 9: ");
let opcion = prompt("Seleccione una opción:\n1: Sumar\n2: Multiplicar\n3: Potencia\n4: Cubo\n5: Mayor de 2 números");
num=parseFloat(prompt("Ingrese el primer número"));
num2=parseFloat(prompt("Ingrese el segundo número"));

if (opcion === "1") {
    console.log(sumArrow(num, num2));
} else if (opcion === "2") {
    console.log( multArrow(num, num2));
} else if (opcion === "3") {
    console.log( potArrow(num, num2));
} else if (opcion === "4") {
    console.log(cuboArrow(num));
} else if (opcion === "5") {
    console.log( mayorArrow(num, num2));
} else {
    console.log("Opción inválida.");
}