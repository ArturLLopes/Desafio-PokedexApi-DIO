
const pokeApi = {}



function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.front_shiny

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)

}

pokeApi.getPokemons = (offset = 0, limit = 9) => {
    //uso de uma api

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`//chamo a url da api e passo os parametros de offset e limit

    //forma de chamar a api promise
    return fetch(url) //retorna a lista de pokemons da api
        // forma elegante simplificada
        .then((response) => response.json())//promise de transformar a resposta em json
        .then((jsonBody) => jsonBody.results)//promise de pegar os dados do json
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))//promise de chamar a api de cada pokemon
        .then((detailRequests) => Promise.all(detailRequests))//promise de pegar os detalhes de cada pokemon
        .then((pokemonsDetails) => pokemonsDetails)
}


const getPokemonsDetailed = async (pokemon_name) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`;

    const data = await fetch(URL);
    const response = await data.json();
    return response;
  };


  

pokeApi.getPokemonDetailById = (pokemonId) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

    return fetch(url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon);
};

// .then(function (response) {
//     return response.json()
// })
// .then(function (jsonBody) {
//     console.log(jsonBody)
// })
// .catch(function (error) {
//     console.log(error)
// })

// Promise.all([
//     fetch('https://pokeapi.co/api/v2/pokemon/1'),
//     fetch('https://pokeapi.co/api/v2/pokemon/2'),
//     fetch('https://pokeapi.co/api/v2/pokemon/3'),
//     fetch('https://pokeapi.co/api/v2/pokemon/4')
// ]).then(responses) => {

// }
