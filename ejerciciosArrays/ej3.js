let copiaMeses = meses.slice(); // Copia del array
while (copiaMeses.length > 1) {
    copiaMeses.pop();   // Elimina desde el final
    copiaMeses.shift(); // Elimina desde el inicio
}
console.log(copiaMeses); // ["junio"]
