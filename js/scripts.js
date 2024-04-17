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
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);
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
    function showModal(item) {
            let modalContainer = document.querySelector('#modal-container');
            modalContainer.innerHTML = '';
            let modal = document.createElement('div');
            modal.classList.add('modal');

            let closeButtonElement = document.createElement('button');
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'Close';
            closeButtonElement.addEventListener('click', hideModal);

            let titleElement = document.createElement('h1');
            titleElement.innerText = item.name;

            let heightElement = document.createElement('p');
            heightElement.innerText = 'Height: ' + item.height;

            let imageElement = document.createElement('img');
            imageElement.classList.add('modal-image');
            imageElement.src = item.imageUrl;

            modal.appendChild(closeButtonElement);
            modal.appendChild(titleElement);
            modal.appendChild(heightElement);
            modal.appendChild(imageElement);
            modalContainer.appendChild(modal);

            modalContainer.classList.add('is-visible');
          function hideModal() {
            modalContainer.classList.remove('is-visible');
            modalContainer.addEventListener('click', (e) => {
            let target = e.target;
            if (target === modalContainer) {
                hideModal();
            }
            // adding listener for additional modal closing
            window.addEventListener('keydown', (e) => {
              if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
                hideModal();
              }
            });
          });
        
        document.querySelector('.button-class').addEventListener(
            'click', function () {
                showModal(pokemon);
            })
        };
        };
        // linking css to hide modal
        
        
        
  // adding modal for pokemon
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