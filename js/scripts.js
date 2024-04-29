let pokemonRepository = (function () {
    let pokemonList = [];
    //Url for pokemon API
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    //retrieving date from API
    let getAll = () => pokemonList;
    //Function to add to pokemonList
    function add(pokemon) {
        pokemonList.push(pokemon);
    };
    // Creating a function that will return each iteration of the pokemon list
    function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list");
        let listPokemon = document.createElement("li");
        listPokemon.classList.add("list-group-item", "list-group-item-action");
      

        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add('btn', 'btn-secondary', 'btn-block');
        button.setAttribute('type', 'button');
        button.setAttribute("data-toggle", "modal");
        button.setAttribute("data-target", "#pokemonModal")

        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);

        button.addEventListener('mouseover', function () {
          button.classList.remove('btn-secondary');
          button.classList.add('btn-success');
        });
    
        button.addEventListener('mouseout', function () {
          button.classList.remove('btn-success');
          button.classList.add('btn-secondary');
        });
        
        button.addEventListener('click', function() {
          showDetails(pokemon);
        }); 
    }
    // function to load list of pokemon
    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
      });
      }).catch(function (e) {
        console.error(e);
      })
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
    function showModal(pokemon) {
      let modalTitle = document.querySelector('.modal-title');
      let modalImage = document.querySelector('.modal-image');
      let modalName = document.querySelector('.modal-name');
      let modalHeight = document.querySelector('.modal-height');
  
      modalTitle.innerText = pokemon.name;
      modalImage.setAttribute('src', pokemon.imageUrl);
      modalName.innerText = 'Name: ' + pokemon.name;
      modalHeight.innerText = 'Height: ' + pokemon.height + 'm';
  
    }
        
        
    function showDetails(pokemon) {
      pokemonRepository.loadDetails(pokemon).then(function () {
        showModal(pokemon);
      });
    };
    
  
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
     };

  })();

//Loading the data from the list
  pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });