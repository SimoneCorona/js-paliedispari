// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// L’utente sceglie un numero da 1 a 5
// const userNum = parseInt(prompt("Scegli un num da 1 a 5"));
// console.log(userNum);
let userNum;
do{
    userNum = parseInt(prompt("Scegli un num da 1 a 5"));
}
while (userNum < 5) || (isNaN(userNum)); 
    alert("Non è un num da 1 a 5");

console.log(userNum);

// L’utente sceglie pari o dispari
const userEvenOrOdd = prompt("Scegli pari o dispari");

const cpuNum = Math.floor(Math.random() * 5) + 1;
console.log(cpuNum);

const sum = userNum + cpuNum;
console.log(sum);

let sumEvenOrOdd;

if (sum % 2 === 0) {
    sumEvenOrOdd = "even"
} else {
    sumEvenOrOdd = "odd";
}
console.log(sumEvenOrOdd);

let winner;
if (userEvenOrOdd === sumEvenOrOdd) {
    alert("Hai vinto")
} else {
    alert("Hai perso")
}
