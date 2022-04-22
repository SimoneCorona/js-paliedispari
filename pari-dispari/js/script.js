// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// L’utente sceglie un numero da 1 a 5
let userNum = parseInt(prompt("Scegli un num da 1 a 5"));

// L’utente sceglie pari o dispari
const userEvenOrOdd = prompt("Scegli pari o dispari");

// CP numero random
const cpuNum = generateNumber();
console.log(cpuNum);

// Somma dei 2 num 
const sum = userNum + cpuNum;
console.log(sum);

//Decreta chi ha vinto la partita
const result = isWinner(sum, userEvenOrOdd);
if (result) {
    console.log('Hai vinto');
} else {
    console.log('Hai perso');
}

//FUNCTIONS

//Genera un numero random per il CP
function generateNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

//Determina se la somma dei 2 numeri è pari o dispari
function isWinner(number, value) {

    let winner = false;
    if (number % 2 == 0 && value == "pari") {
        winner = true;
    }
    if (number % 2 == 1 && value == "dispari") {
        winner = true;
    }
    return winner;
}