function arrayAObjeto(array) {
    let [id, nombre, edad] = array;
    return { id, nombre, edad };
}

let datos = [1, "Juan", 30];
console.log(arrayAObjeto(datos)); // { id: 1, nombre: "Juan", edad: 30 }
