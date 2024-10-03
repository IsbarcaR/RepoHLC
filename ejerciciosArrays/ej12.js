let semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// Todos los días en variables independientes
let [Lunes, Martes, Miércoles, Jueves, Viernes, Sábado, Domingo] = semana;

// Lunes a viernes en variables independientes, finde en un array
let [lun, mar, mie, jue, vie, ...finde] = semana;

// Días impares y finde
let [l1, , m1, , j1, ...finde2] = semana;
