// import functions and grab DOM elements

import { rawPokeData } from './data.js';

export function rawPokeData(someArray){

    const index = Math.floor(Math.random() * someArray.length);

    return someArray[index];


}

let pokemonOne = rawPokeData(rawData);
let pokemonTwo = rawPokeData(rawData);
let pokemonThree = rawPokeData(rawData);

while (pokemonOne.id === pokemonTwo.id) {
    pokemonOne = rawPokeData(rawData);

}
while (pokemonTwo.id === pokemonThree.id) {
    pokemonTwo = rawPokeData(rawData);

}
while (pokemonThree.id === pokemonOne.id) {
    pokemonThree = rawPokeData(rawData);

}

radios[0].value = pokemonOne.id;
images[0].src = pokemonOne.url_image;

radios[1].value = pokemonTwo.id;
images[1].src=pokemonTwo.url_image;

radios[2].value = pokemonThree.id;
images[2].src = pokemonThree.id;





// set event listeners to update state and DOM