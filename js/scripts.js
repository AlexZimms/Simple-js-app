//IIFE
let pokemonRepository = (function () {
    let pokemonList = []
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    
    //Function to add to pokemonList
    function add(pokemon) {
      if (typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
      ) {
        pokemonList.push(pokemon);
      } else {
        console.error("pokemon is not correct");
      }
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
      loadDetails(pokemon).then(function () {
      }
      )};
    function loadList() {
      return fetch(apiUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url,
            };
            add(pokemon);
            console.log(pokemon);
          });
        })
        .catch(function (e) {
          console.error(e);
        });
    }
    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // adding the details 
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }

    

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadDetails: loadDetails,
        loadList: loadList,
        showDetails: showDetails,
     };

    //adding a consol read out for each pokemon
     function showDetails(pokemon){
        console.log(pokemon)
     }
   
 })(); 
   //   Adding a new pokemon to the pokemonList
   pokemonRepository.loadList().then(function () {
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});
});
    