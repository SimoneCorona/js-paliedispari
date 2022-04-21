// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const word = prompt("Dimmi una parola e ti dirò se è palindroma");
console.log(word);

const wordReverse = reverse();
console.log(wordReverse);

const palindrom = palindromeCheck()
console.log(palindrom)


function reverse(world) {
    let wordReverse = '';
    for (let index = word.length - 1; index >= 0; index--) {
        wordReverse += word[index];  
    }
    return wordReverse;
}

function palindromeCheck(word, wordReverse) {
    let palindrom;
    if (word === wordReverse) {
        palindrom = 'palindroma'
    } else  
        palindrom = 'no'   
    return palindrom;
} 
    // if (word === reverse()) {
    //     console.log('palindroma');
    // } else {
    //     console.log('no');
    // }


// creare una funzione che accetti come argomento WORD e che restitusca WORDREVERSE;