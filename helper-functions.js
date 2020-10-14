
import { rawPokeData } from './data.js';
import { RESULTS } from './constants.js';

export function getFromLocalStoragePoke() {

    let localStoragePoke = JSON.parse(localStorage.getItem(RESULTS));

    if (!localStoragePoke) {
    
        const stringyPoke = JSON.stringify(rawPokeData);

        localStorage.setItem(RESULTS, stringyPoke);
        localStoragePoke = rawPokeData;
    }
    return localStoragePoke;
}


export function getFromLocalStorage(key) {

    const getKey = localStorage.getItem(key);

    return JSON.parse(getKey);


}

export function setInLocalStorage(key, value) {

    const stringyItem = JSON.stringify(value);

    localStorage.setItem(key, stringyItem);

    return value;
}