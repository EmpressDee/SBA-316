// Create a mini Pokemon database using arrays

/*
const Gen1poke = [ 
{ id: ,
 name: "",
 type: "",
 level: ,
 abilities: ""

}
]
*/
// should i add evolutions in arrays
//use split method on string (abilities) const ability = pokemon.abilities.split() ***check mdn to verify method***
// cache requirement.



const Gen1poke = [
    {
        id: 25,
        name: "Pikachu",
        type: "Electric",
        level: 20,
        abilities: "Static/Lightening Rod",
        image:""

    },
    { id: 1,
 name: "Bulbasaur",
 type: "Grass/Poison",
 level: 24,
 abilities: "Overgrow/Chlorophyll",
 image:""

},
{ id: 4,
 name: "Charmander",
 type: "Fire",
 level: 25,
 abilities: "Blaze/Solar Power",
 image:""

},
{ id: 7,
 name: "Squirtle",
 type: "Water",
 level: 18,
 abilities: "Torrent/Rain Dish",
 image:""

},
{ id: 10,
 name: "Caterpie",
 type: "Bug",
 level: 13,
 abilities: "Shield Dust/Run Away",
 image:""

},
{ id: 16,
 name: "Pidgey",
 type: "Normal/Flying",
 level: 20,
 abilities: "Keen Eye/Tangled Feet/Bug Pecks",
 image:""

},
{ id: 19,
 name: "Rattata",
 type: "Normal",
 level: 15,
 abilities: "Run Away/Guts/Hustle"

},
{ id: 27,
 name: "Sandshrew",
 type: "Ground",
 level: 21,
 abilities: "Sand Veil/Sand Rush"

},
{ id: 29,
 name: "Nidoran(F)",
 type: "Poison",
 level: 22,
 abilities: "Poison Point/Rivalry/Hustle"

},
{ id: 32,
 name: "Nidoran(M)",
 type: "Poison",
 level: 22,
 abilities: "Poison Point/Rivalry/Hustle"

},
{ id: 35,
 name: "Clefairy",
 type: "Fairy",
 level: 25,
 abilities: "Cute Charm/Magic Guard/Friend Guard"

},
{ id: 37,
 name: "Vulpix",
 type: "Fire",
 level: 26,
 abilities: "Flash Fire/Drought"

},
{ id: 52,
 name: "Meowth",
 type: "Normal",
 level: 17,
 abilities: "Pick Up/Technician/Unnerve"

},
{ id: 54,
 name: "Psyduck",
 type: "Water",
 level: 22,
 abilities: "Damp/Cloud Nine/Swift Swim"

},
//current count 14 pokemon
{ id: 130,
 name: "Gyrados",
 type: "Water/Flying",
 level: 26,
 abilities: "Intimidate/Moxie"

},
{ id: 133 ,
 name: "Eevee",
 type: "Normal",
 level: 24,
 abilities: "Run Away/Adaptability/Anticipation"

},
{ id: 147 ,
 name: "Dratini",
 type: "Dragon",
 level: 21,
 abilities: "Shed Skin/Marvel Scale"

},
{ id: 106,
 name: "Hitmonlee",
 type: "Fighting",
 level: 27,
 abilities: "Limber/Reckless/Unburden"

},
{ id: 56,
 name: "Mankey",
 type: "Fighting",
 level: 24,
 abilities: "Vital Spirit/Anger Point/Defiant"

},
{ id: 74,
 name: "Geodude",
 type: "Rock/Ground",
 level: 21,
 abilities: "Rock Head/Sturdy/Sand Veil"

}
]
//20 total

/* array.forEach(function(item){
    something happens
});

or arrow function

array.forEach((item) =>{
    something happens
    
    })
*/

//store pokemon
const pokemonDatabase = document.getElementById("pokemonDatabase");
// container for the users team
const teamContainer = document.getElementById("teamContainer");
const pokemonContainer = document.getElementById("pokemonContainer");

//const container = document.getElementById("pokemonContainer")
const pokemonList = document.getElementById("pokeList");
const pokemonCard = document.getElementById("pokeCards");

const searchPokemon = document.getElementById("searchPokemon");



//const ability = pokemon.abilities.split("/"); //error -forgot to add a pokemon variable, maybe make a display function and put it there instead
// loop through pokemon database to display it 

//comment out because when ran it shows a long list of pokemon. Just wanted it displayed when button is pressed.
// Gen1poke.forEach((pokemon) =>{
//    // need to create a pokemon info card
    
//     const card = document.createElement("div");
    

//     const name = document.createElement("h2");
//     name.textContent = pokemon.name;

//     const type = document.createElement("p");
//     type.textContent = `Type: ${pokemon.type}`;

//     const level = document.createElement("p");
//     level.textContent = `Level: ${pokemon.level}`;

//     const abilities = document.createElement("p");
//     abilities.textContent = `Abilities: ${pokemon.abilities}`;

//     card.append(name, type, level, abilities);

//     pokemonContainer.appendChild(card) //wasnt displaying becasue i put container instead of pokemonContainer
//     });
// need a button to click through each pokemon

    // function displayPokemon(pokemon) {
    //     console.log(pokemon.name);
    // }
    function displayPokemon(pokemon) {

    pokemonCard.innerHTML = "";

    const name = document.createElement("h2");
    name.textContent = pokemon.name;

    const type = document.createElement("p");
    type.textContent = `Type: ${pokemon.type}`;

    const level = document.createElement("p");
    level.textContent = `Level: ${pokemon.level}`;

    const abilities = document.createElement("p");
    abilities.textContent =
        `Abilities: ${pokemon.abilities}`;
    
    const addButton = document.createElement("button");
    addButton.textContent = "Add To Team";

    addButton.addEventListener("click", (e) => addTeam(pokemon));
    pokemonCard.append(name, type, level, abilities, addButton);

    pokemonCard.append(
        name,
        type,
        level,
        abilities
    );
}

let team = [];

function addTeam(pokemon) {
    if (team.length >=6) {
        alert("Your team is full")

        return;
    }
    team.push(pokemon);
 const removeButton = document.createElement("button");
 removeButton.addEventListener("click", (e) => {
    team = team.filter(p => p.id !== pokemon.id); // *note to future self* using p as a variable for filter method
 })
    displayTeam();
}

function displayTeam() {
    teamContainer.innerHTML = "";
    const fragment = document.createDocumentFragment(); //requirement

    team.forEach((pokemon) => {

        const teamMember = document.createElement("p");

        teamMember.textContent = pokemon.name;

        teamContainer.appendChild(teamMember);
    })
}

// creating button for pokemon
    Gen1poke.forEach((pokemon) => {
        const button = document.createElement("button");

        button.textContent = pokemon.name;

        button.addEventListener("click", () =>{
            displayPokemon(pokemon); // error forgot to add the display function
        });
        pokemonList.appendChild(button)
    });

// second event listener req
    searchPokemon.addEventListener("input", (e) => {

        const search = searchPokemon.value.toLowerCase();

        console.log(search);
    })
   //  :( 
    // Search how to not have 20 buttons and 20 cards. Want one card to update when pokemon button is clicked.

    /* create other html elements
     card = div
     name = h2
     type = p 
     level = p
     abilities = p */

    


