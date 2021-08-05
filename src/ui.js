//change the fox

export const modFox = function modFox(state) {
document.querySelector('.fox').className = `fox fox-${state}`; //sleep,celebrate,poop..
}



//change the scene
export const modScene = function modScene(state) {
    document.querySelector('.game').className = `game ${state}`;
}

export const togglePoopBag = function togglePoopBag(show) { //show is positive
    document.querySelector('.poop-bag').classList.toggle('hidden', !show); // hidden is "negative". If you are not showing it, add hidden class.
}

export const writeModal = function writeModal (text = '') {
    document.querySelector('.modal').innerHTML = `<div class='modal-inner'>${text}</div>`;
}
