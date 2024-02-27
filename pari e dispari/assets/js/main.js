// Definizione della funzione isDisparo
function isDisparo(num) {
    let risultato = num % 2;
    if (risultato === 0) {
        return false; // Il numero è pari
    } else if (risultato === 1) {
        return true; // Il numero è dispari
    } else {
        alert("Non è un numero intero"); // Gestione eccezione
        return ""; // Restituzione di un valore vuoto
    }
}

// Chiediamo all'utente di scegliere tra pari e dispari
var pariDispari = prompt('Scegli tra pari o dispari');

console.log('Hai scelto: ' + pariDispari);

// Generiamo un numero casuale da 1 a 5
var numeroCasuale = Math.floor(Math.random() * 5) + 1;

// Stampiamo il numero casuale sulla console 
console.log("Il numero casuale generato è: " + numeroCasuale);

// Chiediamo all'utente di inserire un numero da 1 a 5
var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));

console.log('Il numero inserito è: ' + numeroUtente);

// Calcoliamo il totale
var totale = numeroCasuale + numeroUtente;

console.log("Il totale è: " + totale);

// Determiniamo se il totale è pari o dispari usando la funzione isDisparo
if (isDisparo(totale)) {
    console.log("Il totale è dispari.");
} else {
    console.log("Il totale è pari.");
}