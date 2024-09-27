console.log("Ejercicio 18");
function validarDNI(dni) {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const numero = dni.slice(0, -1); // Extraer la parte numérica del DNI
    const letra = dni.slice(-1).toUpperCase(); // Extraer la letra y convertirla a mayúscula

    // Verificar si la parte numérica es válida y si la longitud del DNI es correcta
    if (!/^\d{8}$/.test(numero)) {
        return "DNI inválido: el formato numérico es incorrecto.";
    }

    const resto = numero % 23; // Calcular el resto de la división
    const letraCorrecta = letras[resto]; // Obtener la letra correspondiente al resto

    if (letra === letraCorrecta) {
        return `DNI correcto: ${dni}`;
    } else {
        return `DNI incorrecto: la letra debería ser ${letraCorrecta}`;
    }
}

// Pruebas en la consola
console.log(validarDNI('12345678Z')); // Cambia este valor por tu propio DNI para probar
console.log(validarDNI('87654321T'));
