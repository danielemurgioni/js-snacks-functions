/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function arrayWordCapitalLetter(arr){
    let newArray = []
    for(let i=0; i<arr.length; i++){
        if(arr[i].charAt(0) === "A"){
            newArray.push(arr[i])
        }
    }

    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(arrayWordCapitalLetter(names));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]