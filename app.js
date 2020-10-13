// import functions and grab DOM elements

import { rawPokeData } from './data.js';

const images = document.querySelectorAll('.pokeIm');
const radios = document.querySelectorAll('input');




export function getRandomPokemon(){

    const index = Math.floor(Math.random() * rawPokeData.length);

    return rawPokeData[index];


}
let encounters = 10;
renderPokemon();

for (let i = 0; i < radios.length; i++) {
radios[i].addEventListener('change', (e) => {
    const captured = e.target.value;
    console.log(captured)
    renderPokemon();
    
});

}


function renderPokemon() {
let pokemonOne = getRandomPokemon(rawPokeData);
let pokemonTwo = getRandomPokemon(rawPokeData);
let pokemonThree = getRandomPokemon(rawPokeData);

while (pokemonOne.id === pokemonTwo.id) {
    pokemonOne = getRandomPokemon(rawPokeData);

}
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




//set event listeners to update state and DOM



