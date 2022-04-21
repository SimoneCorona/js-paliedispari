// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// L’utente sceglie un numero da 1 a 5
// const userNum = parseInt(prompt("Scegli un num da 1 a 5"));

// 1
// console.log(userNum);
let userNum = parseInt(prompt("Scegli un num da 1 a 5"));

// L’utente sceglie pari o dispari
const userEvenOrOdd = prompt("Scegli pari o dispari");

// 2
const cpuNum = generateNumber();
console.log(cpuNum);

// 3
const sum = userNum + cpuNum;
console.log(sum);

const result = isWinner(sum, userEvenOrOdd);

if (result) {
    console.log('Hai vinto');
} else {
    console.log('Hai perso');
}


function generateNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

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