let pokemonList = [
    {   name: 'Charizard',
        height: 5.7,
        types: ['fire', 'flying']
    },

    {   name: 'Ampharos',
        height: 4.7,
        types: 'electric',
    },

    {   name: 'Aggron',
        height: 6.11,
        types: ['steel', 'rock']
    }
];

    // Creating a list of pokemon and their heights. Adding conditionals to highlight large pokemon!
    
for (let i=0; i < pokemonList.length; i++){
    document.write('<p>' + pokemonList[i].name + " (Height:" + pokemonList[i].height + ")  ");

    if (pokemonList[i].height > 6){
        document.write(" Wow that's huge!");
    }


};