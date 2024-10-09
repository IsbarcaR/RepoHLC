fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
