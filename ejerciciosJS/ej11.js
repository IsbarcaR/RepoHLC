let numeros=[52, 7, 2, 28, 3, 52, 23, 2, 81];
console.log("Ejercicio 11:");
console.log("For:");
for (var i=0; i<numeros.length; i++){
    console.log(numeros[i]);
}
i=0;
console.log("While:");
while (numeros.length>i){
console.log(numeros[i]);
i++;
}
i=0;
console.log("Do-While:");
do{
    console.log(numeros[i]);
    i++;
}while(i<numeros.length)


console.log("For-In:");
for (let numero in numeros){
    console.log(numero);
}
console.log("For-Of:");
for (let numero of numeros){
    console.log(numero);
}