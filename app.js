// import functions and grab DOM elements

import { rawPokeData } from './data.js';
import { findByName } from './utils.js';

const images = document.querySelectorAll('.pokeIm');
const radios = document.querySelectorAll('input');
const pokeCart = [];
let encounters = 10;

//const getPokemonById = document.querySelectorAll('');



function getRandomPokemon(){
const index = Math.floor(Math.random() * rawPokeData.length);
    return rawPokeData[index];
}











function renderPokemon() {
let pokemonOne = getRandomPokemon(rawPokeData);
let pokemonTwo = getRandomPokemon(rawPokeData);
let pokemonThree = getRandomPokemon(rawPokeData);

while (pokemonOne.id === pokemonTwo.id) {
    pokemonOne = getRandomPokemon(rawPokeData);

}

const test = findByName(rawPokeData, pokemonOne.pokemon);
console.log(test)
while (pokemonTwo.id === pokemonThree.id) {
    pokemonTwo = getRandomPokemon(rawPokeData);

}
while (pokemonThree.id === pokemonOne.id) {
    pokemonThree = getRandomPokemon(rawPokeData);

}

radios[0].value = pokemonOne.pokemon;
images[0].src = pokemonOne.url_image;

radios[1].value = pokemonTwo.pokemon;
images[1].src = pokemonTwo.url_image;

radios[2].value = pokemonThree.pokemon;
images[2].src = pokemonThree.url_image;
}
renderPokemon();


for (let i = 0; i < radios.length; i++) {
radios[i].addEventListener('change', (e) => {
    const caught = e.target.value;

    //const pokemonInCart = findByName(pokeCart, captured);
  
    renderPokemon();
    
     
for (let i = 0; i < radios.length; i++){
    let item = findByName(pokeCart, radios[i].value);
   console.log(item)
    if (!item) {
        item = {
            name: radios[i].value,
            encounters: 1,
            captured: 0
        };
        pokeCart.push(item);

       }  else {
        item.encounters++;
       }
        if (caught === radios[i].value) {
            item.captured++;
            
        }
    };
    console.log(pokeCart)
    
})
}

