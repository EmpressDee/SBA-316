// Create a mini Pokemon database using arrays

/*
const Gen1poke = [ 
{ id: ,
 name: "",
 type: "",
 level: ,
 abilitiies: ""

}
]
*/
// find out if you can add images to arrays-yes
// should i add evolutions in arrays
//should i make this a separate page
//use split method on string (abilities)


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
 abilitiies: "Overgrow/Chlorophyll",
 image:""

},
{ id: 4,
 name: "Charmander",
 type: "Fire",
 level: 25,
 abilitiies: "Blaze/Solar Power",
 image:""

},
{ id: 7,
 name: "Squirtle",
 type: "Water",
 level: 18,
 abilitiies: "Torrent/Rain Dish",
 image:""

},
{ id: 10,
 name: "Caterpie",
 type: "Bug",
 level: 13,
 abilitiies: "Shield Dust/Run Away",
 image:""

},
{ id: 16,
 name: "Pidgey",
 type: "Normal/Flying",
 level: 20,
 abilitiies: "Keen Eye/Tangled Feet/Bug Pecks",
 image:""

},
{ id: 19,
 name: "Rattata",
 type: "Normal",
 level: 15,
 abilitiies: "Run Away/Guts/Hustle"

},
{ id: 27,
 name: "Sandshrew",
 type: "Ground",
 level: 21,
 abilitiies: "Sand Veil/Sand Rush"

},
{ id: 29,
 name: "Nidoran(F)",
 type: "Poison",
 level: 22,
 abilitiies: "Poison Point/Rivalry/Hustle"

},
{ id: 32,
 name: "Nidoran(M)",
 type: 22,
 level: "Poison",
 abilitiies: "Poison Point/Rivalry/Hustle"

},
{ id: 35,
 name: "Clefairy",
 type: "Fairy",
 level: 25,
 abilitiies: "Cute Charm/Magic Guard/Friend Guard"

},
{ id: 37,
 name: "Vulpix",
 type: "Fire",
 level: "26",
 abilitiies: "Flash Fire/Drought"

},
{ id: 52,
 name: "Meowth",
 type: "Normal",
 level: 17,
 abilitiies: "Pick Up/Technician/Unnerve"

},
{ id: 54,
 name: "Psyduck",
 type: "Water",
 level: "22",
 abilitiies: "Damp/Cloud Nine/Swift Swim"

},
//current count 14 pokemon
{ id: 130,
 name: "Gyrados",
 type: "Water/Flying",
 level: 26,
 abilitiies: ""

},
{ id: 133 ,
 name: "Eevee",
 type: "Normal",
 level: 24,
 abilitiies: "Run Away/Adaptability/Anticipation"

},
{ id: 147 ,
 name: "Dratini",
 type: "Dragon",
 level: 21,
 abilitiies: "Shed Skin/Marvel Scale"

},
{ id: 106,
 name: "Hitmonlee",
 type: "Fight",
 level: 27,
 abilitiies: "Limber/Reckless/Unburden"

},
{ id: 56,
 name: "Mankey",
 type: "Fight",
 level: 24,
 abilitiies: "Vital Spirit/Anger Point/Defiant"

},
{ id: 74,
 name: "Geodude",
 type: "Rock/Ground",
 level: 21,
 abilitiies: "Rock Head/Sturdy/Sand Veil"

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
const pokemonDatabase = []
// loop through pokemon database to display it 
Gen1poke.forEach((pokemon) =>{
    console.log(pokemon);
})

