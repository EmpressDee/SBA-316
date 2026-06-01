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
 type: "Posion",
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
 level: "26",
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
 level: "22",
 abilities: "Damp/Cloud Nine/Swift Swim"

},
//current count 14 pokemon
{ id: 130,
 name: "Gyrados",
 type: "Water/Flying",
 level: 26,
 abilities: ""

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

const ability = pokemon.abilities.split("/");
// loop through pokemon database to display it 
Gen1poke.forEach((pokemon) =>{
   // need to create a pokemon info card
    
    const card = document.createElement("div");
    

    const name = document.createElement("h2");
    name.textContent = pokemon.name;

    const type = document.createElement("p");
    type.textContent = `Type: ${pokemon.type}`;

    const level = document.createElement("p");
    type.textContent = `Level: ${pokemon.level}`;

    const abilities = document.createElement("p");
    type.textContent = `Abilities: ${pokemon.abilities}`;
    
    card.append(name, type, level, abilities);

    container.appendChild(card)
    });
// need a button to click through each pokemon

    Gen1poke.forEach((pokemon) => {
        const button = document.createElement("button");

        button.textContent = pokemon.name;

        button.addEventListener("click", () =>{
            
        })
    })
   
    

    /* create other html elements
     card = div
     name = h2
     type = p 
     level = p
     abilities = p */

    


