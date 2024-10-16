//Escribe una función en JS que tome un array de URLs y descargue el
//contenido de cada URL en paralelo usando promesas.
const endpoint1 = "https://jsonplaceholder.typicode.com/users";
const endpoint2 = "https://jsonplaceholder.typicode.com/posts";

let arrayEndpoint = [endpoint1, endpoint2];

ejercicio4 = () =>
  Promise.all([
    fetch(arrayEndpoint[0]).then((response) => response.json()),
    fetch(arrayEndpoint[1]).then((response) => response.json()),
  ])
    .then(([data1, data2]) => {
      console.log(data1);
      console.log(data2);
    })
    .catch((error) => {
      console.error(error);
    });
ejercicio4();