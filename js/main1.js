/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */
var parola = prompt('Inserisci una parola').trim();
parola = parola.charAt(0).toLowerCase() + parola.slice(1);
console.log(parola);
//Invocazione funzione
var parolaInvers = inverti(parola);
console.log(parolaInvers);

if (parola == parolaInvers ) {
    console.log('La parola inserita è un palindromo');
} else {
    console.log('La tua parola con caratteri invertiti è ' + parolaInvers);
    
}


//Creazione funzione
function inverti(word) {
    var reverse = '';

    for (var i = word.length - 1; i >= 0; i--) {
        reverse += word[i]
    }
    return reverse;
}