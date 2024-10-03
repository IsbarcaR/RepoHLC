function ordenarPorEdad(usuarios) {
    return usuarios.sort((a, b) => a.edad - b.edad);
}

let usuarios = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 35 }
];

console.log(ordenarPorEdad(usuarios));
