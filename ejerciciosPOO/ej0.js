let objeto = {};
objeto.nombre = "Juan";
objeto.apellido = "Pérez";
objeto.nombre = "Carlos";
delete objeto.nombre;
console.log(objeto); // { apellido: 'Pérez' }
