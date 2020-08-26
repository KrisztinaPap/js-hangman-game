// Pseudo code - to be deleted when program is finished

// on document load -   secretWord is chosen randomly from wordArray
//                      Underscores are displayed to represent length of SecretWord
//                      number of chances (integer) is set to starting value
const wordArray = [ "elephant", "automobile", "vegetable", "waterfall", "elementary", "pseudocode", "pharmacy", "thunder" ];

const previousGuesses = [];

let guessChances = 6;

// Citation:
//      https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
//      The below function works as follows: Math.random() provides a random number between 0 and 1. It then multiplies that by the number of array items and rounds it down to get a number between 0 and the number of items in the array.
function findRandomNumber (min, max) {
    return Math.floor(Math.random() * (max-min));
}
let randomNumber = findRandomNumber( 0, wordArray.length );
let secretWord = wordArray[randomNumber];
let secretWordUnderscore = "";

for ( let i = 0; i < secretWord.length; i++ ) {
    secretWordUnderscore += "_";
};

// Underscores displayed for each letter in the secretWord
// Where do we want to put it?
const UnderscoreSpot = document.getElementById( 'secretWordUnderscoreSpot' );

// What do we want to put there?
let underscoreSPAN = document.createElement( 'SPAN' );
underscoreSPAN.textContent = `${ secretWordUnderscore }`;

// Add it the HTML
UnderscoreSpot.appendChild( underscoreSPAN );

// Number of chances remaining
// Where do we want to put it?
const chances = document.getElementById( 'guessChances' );

// What do we want to put there?
let chancesSPAN = document.createElement( 'SPAN' );
chancesSPAN.textContent = `${ guessChances }`;

// Add it the HTML
chances.appendChild( chancesSPAN );

// Previously guessed letter list
// Where do we want to put it?
const prevGuesses = document.getElementById( 'previousGuesses' );

// What do we want to put there?
let preGuessesSPAN = document.createElement( 'SPAN' );
preGuessesSPAN.textContent = `${ previousGuesses }`;

// Add it the HTML
prevGuesses.appendChild( preGuessesSPAN );


// User enters a letter letterGuess

// If secretWord contains letterGuess, letter is displayed instead of underscores

// ELSE -   letterGuess is added to wrongGuess array and gets added to Previous Guesses list on screen
//          chances --

// Breakout conditions   -  If number of underscores in secretWord == 0 (WIN)
//                          If chances == 0 (LOSE)

// Breakout action      -   Alert (win) OR alert (lose)

// Ask if user wants to play again
            

// Variables planned:
// - letterGuess = ""; string or char???? (User input (form, text)) 
// - wordArray = [];
// - previousGuesses = [];
// - randomNumber (to select a random secretWord from the wordArray)
// - secretWord = ""; (string, one of the words from wordArray)
// - secretWordUnderscore = secretWordLength * underscores;
// - underscoreNumber (integer - the number of underscores left in the secretWord)
// - guessChances = 6 (integer that counts down)

// - win alert message
// - lose alert message