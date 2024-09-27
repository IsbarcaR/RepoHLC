console.log("Ejercicio 16");
function sumaOri(num, num2) {
    // Verificar si los valores no son numéricos
    if (isNaN(num) || isNaN(num2)) {
        alert("Uno o ambos valores no son numéricos");
    } else {
        console.log("Suma Original: " + (parseFloat(num) + parseFloat(num2)));
    }
}
function multOri(num, num2) {
    if (isNaN(num) || isNaN(num2)) {
        alert("Uno o ambos valores no son numéricos");
    } else {
    console.log("Multiplicación Original: " + (parseFloat(num) * parseFloat(num2)));
    }
}

function potOri(num, num2) {
    if (isNaN(num) || isNaN(num2)) {
        alert("Uno o ambos valores no son numéricos");
    } else {
    console.log("Potencia Original: " + (parseFloat(num) ** parseFloat(num2)));
    }
}
function cuboOri(num) {
    if (isNaN(num) ) {
        alert("Uno o ambos valores no son numéricos");
    } else {
    console.log("Cubo Original: " + Math.pow(parseFloat(num), 3));
    }
}
function mayorOri(num, num2) {
    if (isNaN(num) ) {
        alert("Uno o ambos valores no son numéricos");
    } else {
        if (parseFloat(num) > parseFloat(num2)) {
            console.log(num + " es mayor que " + num2);
        } else {
            console.log(num2 + " es mayor que " + num);
        }
    }
}
sumaOri(10, "a");
multOri(10, 20);
potOri(10, 2);
cuboOri(10);
mayorOri(10, 20);