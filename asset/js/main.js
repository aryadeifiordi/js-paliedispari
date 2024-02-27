// chiedere all'utente di inserire una parola

const parola = prompt ('inserisci una parola')

console.log(parola);

// verifico sel aparola è pal
function isPalindrome(parola) {
    // Step 1. Usa il metodo split() per restituire un nuovo array
    var splitString = parola.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Usa il metodo reverse() per invertire l'array appena creato
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Usa il metodo join() per unire tutti gli elementi della stringa in un array
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Restituisci la stringa invertita
    return parola === joinArray; // "olleh"
}
 
reverseString("hello");