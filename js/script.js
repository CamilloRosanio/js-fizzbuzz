
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

// devo verificare se il numero è divisibile per 3 AND per 5
    // SE il numero è divisibile per 3 AND per 5
    // ALLORA preparo l'output "fizzbuzz"

// SE il numero non è divisibile per 3 AND per 5
    // ALLORA verifico se il numero è divisibile per 3
    // E preparo l'output "fizz"

// SE il numero non è divisibile per 3
    // ALLORA verifico se il numero è divisibile per 5
    // E preparo l'output "buzz"



/**********************************************************
| # ESECUZIONE
**********************************************************/

const isValid_FizzBuzz = (i % 3 == 0) && (i % 5 == 0);
const isValid_Fizz = (i % 5 == 0);
const isValid_Buzz = (i % 3 == 0);

// Preparo i diversi tipi di output.
const printFizzBuzz = ' FizzBuzz';
const printFizz = ' Fizz';
const printBuzz = ' Buzz';

// PER OGNI (FOR) numero da 1 a 100 partendo da 1
for (let i = 1; i <= 100; i++) {

    // SE il numero è divisibile per 3 AND per 5
    if ((i % 3 == 0) && (i % 5 == 0)) {
        // ALLORA stampo l'output designato
        console.log(i + printFizzBuzz)
    // ALTRIMENTI
    // SE il numero è divisibile per 3
    } else if (i % 3 == 0) {
        // ALLORA stampo l'output designato
        console.log(i + printFizz)
    // ALTRIMENTI
    // SE il numero è divisibile per 5
    } else if (i % 5 == 0) {
        console.log(i + printBuzz)
    // ALTRIMENTI
    } else {
        // Stampo solo il numero senza output
        console.log(i)
    }

}