// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// const userWorldchoice = prompt("Dimmi una parola e ti dirò se è palindroma")
// checkPalindrom()

// function checkPalindrom (){
    const userWorldchoice = prompt("Dimmi una parola e ti dirò se è palindroma") 
    console.log(userWorldchoice, userWorldchoice.length, userWorldchoice[]);

    // const userWorldsplit = userWorldchoice.split();
    console.log(userWorldsplit);

    // const reverseWorld = userWorldchoice[]
    // console.log(reverseWorld);



    let palindrom = userWorldchoice.reverse();
    console.log(palindrom);

    if (userWorld === palindrom) {
        alert("La parola è palindroma")
    } else alert("Non è palindroma")


