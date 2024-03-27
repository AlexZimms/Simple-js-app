let pokemonRepository = (function () {
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
    }]
    function add (pokemon) {
        pokemonList.push(pokemon);
      }
    
      function getAll() {
        return pokemonList;
      }
    
      return {
        add: add,
        getAll: getAll
      };
    })();


    //   Adding a new pokemon to the pokemonList

    pokemonRepository.add({ name:'Pikachu', height: 1.4, types: 'electric'});
    
    // Creating a function that will return each iteration of the pokemon list

    pokemonRepository.getAll().forEach(function (pokemon) {
        document.write(pokemon.name + ' is ' + pokemon.height + ' inches and ' + (pokemon.types) + ' types. ');
      });
