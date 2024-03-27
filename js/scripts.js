
let pokemonList = [
    {   name: 'Charizard',
        height: 5.7,
        types: ['fire', 'flying'],
    },

    {   name: 'Ampharos',
        height: 4.7,
        types: 'electric',
    },

    {   name: 'Aggron',
        height: 6.11,
        types: ['steel', 'rock'],
    }
];

    // Creating a list of pokemon and their heights. Adding conditionals to highlight large pokemon!
    
    function pokemonRepository(pokemon) {
        document.write(pokemon.name + ' is ' + pokemon.height + ' inches and ' + (pokemon.types) + ' types. ');
      }
      pokemonList.forEach(pokemonRepository);