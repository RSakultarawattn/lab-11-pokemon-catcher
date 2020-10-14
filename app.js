// import functions and grab DOM elements

import { rawPokeData } from './data.js';
import { findByName } from './utils.js';
import { setInLocalStorage } from './helper-functions.js';

const images = document.querySelectorAll('.pokeIm');
const radios = document.querySelectorAll('input');

const pokeCart = [];

let encounters = 0;





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

//const test = findByName(rawPokeData, pokemonOne.pokemon);
//console.log(test)
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

function addNewEncounter(name, someArray) {

    const result = findByName(rawPokeData, name);
    const newEncounter = {
        pokemon: result.pokemon,
        encounters: 0,
        captured: 0
    };
    someArray.push(newEncounter);
}


function pokeEncountersIncrement(someName, someArray) {

    let result = findByName(someArray, someName);
    if (!result) {

        addNewEncounter(someName, someArray);
        result = findByName(someArray, someName);
    }
    result.encounters++;
}
function captureIncrement(someName, someArray) {

    let result = findByName(someArray, someName);
    if (!result) {

        addNewEncounter(someName, someArray);
        result = findByName(someArray, someName);
    }
    result.captured++;
}

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', (e) => {
        encounters++;
        const caught = e.target.value;
        captureIncrement(caught, pokeCart);
    
        renderPokemon();
        for (let i = 0; i < radios.length; i++){
            pokeEncountersIncrement(radios[i].value, pokeCart);
            
        }
        if (encounters === 10) {

            setInLocalStorage('RESULTS', pokeCart);
            window.location.href = './Results/index.html';
        }
        
            
       
        
    });

    
       
   
    


//setInLocalStorage('RESULTS', pokeCart);
    renderPokemon();
}