// import functions and grab DOM elements

import { rawPokeData } from './data.js';

const images = document.querySelectorAll('.pokeIm');
const radios = document.querySelectorAll('input');
const button = document.querySelector('button');



export function getRandomPokemon(){

    const index = Math.floor(Math.random() * rawPokeData.length);

    return rawPokeData[index];


}
let encounters = 10;

let pokemonOne = getRandomPokemon();
let pokemonTwo = getRandomPokemon();
let pokemonThree = getRandomPokemon();

while (pokemonOne.id === pokemonTwo.id) {
    pokemonOne = getRandomPokemon(rawData);

}
while (pokemonTwo.id === pokemonThree.id) {
    pokemonTwo = getRandomPokemon(rawData);

}
while (pokemonThree.id === pokemonOne.id) {
    pokemonThree = getRandomPokemon(rawData);

}

radios[0].value = pokemonOne.id;
images[0].src = pokemonOne.url_image;

radios[1].value = pokemonTwo.id;
images[1].src = pokemonTwo.url_image;

radios[2].value = pokemonThree.id;
images[2].src = pokemonThree.url_image;





//set event listeners to update state and DOM

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('change', (e) =>
    {


    })
}