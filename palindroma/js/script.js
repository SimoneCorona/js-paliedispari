// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const word = prompt("Dimmi una parola e ti dirò se è palindroma");
console.log(word);

const wordReverse = reverse(word);
console.log(wordReverse);

const palindrom = palindromeCheck(word, wordReverse)
console.log(palindrom);

//FUNCTIONS

// Reverse user' s word 
function reverse(word) {
    let wordReverse = '';
    for (let index = word.length - 1; index >= 0; index--) {
        wordReverse += word[index];  
    }
    return wordReverse;
}

//Check if user' s word and user word' s reversed are ugual
function palindromeCheck(word, wordReverse) {
    let palindrom;
    if (word === wordReverse) {
        palindrom = 'palindroma'
    } else  
        palindrom = 'no'   
    return palindrom;
} 