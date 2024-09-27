let num = 3;
let num2 = 5;
console.log("Ejercicio 7:");
console.log("Los números son: " + num + " y " + num2);

// Funciones de suma
function sumaOri(num, num2) {
    console.log("Suma Original: " + (parseFloat(num) + parseFloat(num2)));
}

const sumArrow = (num, num2) => console.log("Suma Arrow: " + (parseFloat(num) + parseFloat(num2)));

const sumAno = function (num, num2) {
    console.log("Suma Anónima: " + (parseFloat(num) + parseFloat(num2)));
};

// Funciones de multiplicación
function multOri(num, num2) {
    console.log("Multiplicación Original: " + (parseFloat(num) * parseFloat(num2)));
}

const multArrow = (num, num2) => console.log("Multiplicación Arrow: " + (parseFloat(num) * parseFloat(num2)));

const multAno = function (num, num2) {
    console.log("Multiplicación Anónima: " + (parseFloat(num) * parseFloat(num2)));
};

// Funciones de potencia
function potOri(num, num2) {
    console.log("Potencia Original: " + (parseFloat(num) ** parseFloat(num2)));
}

const potArrow = (num, num2) => console.log("Potencia Arrow: " + (parseFloat(num) ** parseFloat(num2)));

const potAno = function (num, num2) {
    console.log("Potencia Anónima: " + (parseFloat(num) ** parseFloat(num2)));
};

// Funciones de cubo
function cuboOri(num) {
    console.log("Cubo Original: " + Math.pow(parseFloat(num), 3));
}

const cuboArrow = (num) => console.log("Cubo Arrow: " + Math.pow(parseFloat(num), 3));

const cuboAno = function (num) {
    console.log("Cubo Anónimo: " + Math.pow(parseFloat(num), 3));
};

// Funciones de comparación (mayor)
function mayorOri(num, num2) {
    if (parseFloat(num) > parseFloat(num2)) {
        console.log(num + " es mayor que " + num2);
    } else {
        console.log(num2 + " es mayor que " + num);
    }
}

const mayorArrow = (num, num2) => (parseFloat(num) > parseFloat(num2)) ?
    console.log(num + " es mayor que " + num2) : console.log(num2 + " es mayor que " + num);

const mayorAno = function (num, num2) {
    if (parseFloat(num) > parseFloat(num2)) {
        console.log(num + " es mayor que " + num2);
    } else {
        console.log(num2 + " es mayor que " + num);
    }
};

// Llamadas a las funciones
sumaOri(num, num2);
sumArrow(num, num2);
sumAno(num, num2);

multOri(num, num2);
multArrow(num, num2);
multAno(num, num2);

potOri(num, num2);
potArrow(num, num2);
potAno(num, num2);

cuboOri(num);
cuboArrow(num);
cuboAno(num);

mayorOri(num, num2);
mayorArrow(num, num2);
mayorAno(num, num2);
