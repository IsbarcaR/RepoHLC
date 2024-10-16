//Escribe una función en JS que haga una petición HTTP GET y devuelva una
//promesa con la información obtenida de respuesta.

const endpoint = 'https://pokeapi.co/api/v2/pokemon/tyranitar';
new Promise((resolve, reject) => {
    fetch(endpoint).then(response=> {
        if(!response.ok){
            reject('Errror respuesta no valiada');
        }
        else {
            return response.json();
        }
    }).then(data=>{
        //trabajaremos con el obejeto de la respuesta
        resolve(data);
        let nombre= data.name;
        let tipo=data.type;
        console.log(`El pokemon es ${nombre} y su tipo es ${tipo}`);
    }).catch(error=>{
        reject ('Error algo no ha ido bien');
    })    
})