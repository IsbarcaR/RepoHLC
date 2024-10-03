// Objeto creado con new Object
let obj1 = new Object();
obj1.nombre = "Juan";
obj1.edad = 30;
obj1.profesion = "Ingeniero";
obj1.saludar = function() {
    console.log(`Hola, soy ${this.nombre}`);
};
obj1.trabajar = function() {
    console.log(`${this.nombre} está trabajando como ${this.profesion}`);
};

// Objeto literal (JSON notation)
let obj2 = {
    nombre: "Ana",
    edad: 25,
    profesion: "Doctora",
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    },
    trabajar() {
        console.log(`${this.nombre} está trabajando como ${this.profesion}`);
    }
};

obj1.saludar();
obj2.trabajar();
