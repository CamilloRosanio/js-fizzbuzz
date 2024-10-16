
/**********************************************************
| # TRACCIA ESERCIZIO
**********************************************************/

/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/



/**********************************************************
| # PSEUDO-CODICE
**********************************************************/

// PER OGNI (FOR) numero da 1 a 100 partendo da 1

// SE il numero è divisibile per 3 AND per 5
    // ALLORA preparo l'output "FizzBuzz"

    // ALTRIMENTI

// SE il numero è divisibile per 3
    // ALLORA preparo l'output "Fizz"

    // ALTRIMENTI

// SE il numero è divisibile per 5
    // ALLORA preparo l'output "Buzz"

    // ALTRIMENTI

// Stampo solo il numero in tutti gli altri casi



/**********************************************************
| # ESECUZIONE
**********************************************************/

// Dichiaro la variabile i
let i;

// DA CHIARIRE: come mai non mi rileva queste variabili all'interno del FOR se le uso al posto della condizione "scritta a mano" per intero?

// CORREZIONE DAL TUTOR: Le variabili dichiarate fuori dal ciclo non vengono utilizzate perchè 'i' non ha ancora un valore e le condizioni non sono verificabili.
// Per questo sono state dichiarate all'interno del FOR.

// let isValid_FizzBuzz = (i % 3 == 0) && (i % 5 == 0);
// let isValid_Fizz = (i % 5 == 0);
// let isValid_Buzz = (i % 3 == 0);


// Preparo i diversi tipi di output.
const printFizzBuzz = 'FizzBuzz';
const printFizz = 'Fizz';
const printBuzz = 'Buzz';

// PER OGNI (FOR) numero da 1 a 100 partendo da 1
for (let i = 1; i <= 100; i++) {

    // Dichiaro i criteri secondo cui viene assegnato ciascun output all'interno del CICLO.
    let isValid_FizzBuzz = (i % 3 == 0) && (i % 5 == 0);
    let isValid_Fizz = (i % 5 == 0);
    let isValid_Buzz = (i % 3 == 0);

    // SE il numero è divisibile per 3 AND per 5 (isValid)
    // if ((i % 3 == 0) && (i % 5 == 0))
    if (isValid_FizzBuzz) {
        // ALLORA stampo l'output designato
        console.log(printFizzBuzz)
    // ALTRIMENTI
    // SE il numero è divisibile per 3 (isValid)
    } else if (isValid_Fizz) {
        // ALLORA stampo l'output designato
        console.log(printFizz)
    // ALTRIMENTI
    // SE il numero è divisibile per 5 (isValid)
    } else if (isValid_Buzz) {
        console.log(printBuzz)
    // ALTRIMENTI
    } else {
        // Stampo solo il numero.
        console.log(i)
    }

}
