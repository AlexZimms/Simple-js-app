//IIFE
let pokemonRepository = (function () {
    //Pokemon array
    let pokemonList = [
    {   name: "Charizard",
        height: 5.7,
        types: ["fire', 'flying"],
    },

    {   name: "Ampharos",
        height: 4.7,
        types: "electric",
    },

    {   name: "Aggron",
        height: 6.11,
        types: ["steel", "rock"],
    }]
    //Function to add to pokemonList
    function add (pokemon) {
        pokemonList.push(pokemon);
      }
    //Function to get
      function getAll() {
        return pokemonList;
      }

    // Creating a function that will return each iteration of the pokemon list

    function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list");
        let listPokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);
        button.addEventListener('click', () => showDetails(pokemon))
    };
    function showDetails(pokemon){
      console.log(pokemon)
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
     };

    //adding a consol read out for each pokemon
     function showDetails(pokemon){
        console.log(pokemon)
     }
   
 })(); 
   //   Adding a new pokemon to the pokemonList
 pokemonRepository.add({ name:"Pikachu", height: 1.4, types:["electric"] });
//  console.log(pokemonRepository.getAll());

 pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
 });
 
    