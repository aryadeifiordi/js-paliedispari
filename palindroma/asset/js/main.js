// Funzione per verificare se una parola è palindroma
function isPalindrome(parola) {
    // Step 1. Usa il metodo split() per restituire un nuovo array
    var splitString = parola.split("");
 
    // Step 2. Usa il metodo reverse() per invertire l'array appena creato
    var reverseArray = splitString.reverse();
 
    // Step 3. Usa il metodo join() per unire tutti gli elementi della stringa in un array
    var joinArray = reverseArray.join("");
    
    // Step 4. Confronta la parola originale con la parola invertita e restituisci true se sono uguali, altrimenti false
    return parola === joinArray;
}

// Chiedi all'utente di inserire una parola
const parolaUtente = prompt('Inserisci una parola:');

// Verifica se la parola inserita dall'utente è palindroma
if (isPalindrome(parolaUtente)) {
    console.log(parolaUtente + " è una parola palindroma.");
} else {
    console.log(parolaUtente + " non è una parola palindroma.");
}