/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function helloTime(yourName){
    let day = new Date();
    let hour = day.getHours();
    if(hour<=13){
        console.log(`Buongiorno ${yourName}`)
    }
    else if(hour<=17){
        console.log(`Buon pomeriggio ${yourName}`)
    }
    else{
        console.log(`Buonasera ${yourName}`)
    }
}

// Invoca la funzione qui e stampa il risultato in console

helloTime(name);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.