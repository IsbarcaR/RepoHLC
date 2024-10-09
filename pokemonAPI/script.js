async function getPokemon() {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Pokémon no encontrado');
        }

        const pokemonData = await response.json();
        displayPokemonInfo(pokemonData);
    } catch (error) {
        document.getElementById('pokemonInfo').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function displayPokemonInfo(pokemon) {
    const pokemonInfo = `
        <h2>${pokemon.name.toUpperCase()}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p><strong>ID:</strong> ${pokemon.id}</p>
        <p><strong>Altura:</strong> ${pokemon.height / 10} m</p>
        <p><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
        <p><strong>Tipos:</strong> ${pokemon.types.map(type => type.type.name).join(', ')}</p>
    `;
    document.getElementById('pokemonInfo').innerHTML = pokemonInfo;
}
