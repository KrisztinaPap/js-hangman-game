const wordArray = [ "elephant", "automobile", "vegetable", "waterfall", "elementary", "pseudocode", "pharmacy", "thunder" ];

const previousGuesses = [];
let guessChances = 6;

let randomNumber = findRandomNumber( 0, wordArray.length );
let secretWord = wordArray[randomNumber].toUpperCase();
console.log(secretWord);
let secretWordUnderscore = "";

for ( let i = 0; i < secretWord.length; i++ ) {
    secretWordUnderscore += "_";
};

displayWordToGuess( secretWordUnderscore );

displayNumberOfChances( guessChances );

displayPreviousGuesses( previousGuesses );



function findRandomNumber (min, max) {
    // Citation:
    //      https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
    //      The below function works as follows: Math.random() provides a random number between 0 and 1. It then multiplies that by the number of array items and rounds it down to get a number between 0 and the number of items in the array.
    return Math.floor(Math.random() * (max-min));
}

function replaceAt(target, index, replacement) {
    // Citation:
    //      https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript#1431113
    // The below code block creates a custom function to replace a specific character in a target word with another specific character
    // Shout-out to Warren Uhrich for his guidance!
    return target.substr(0, index) + replacement + target.substr(index + replacement.length);
}; 

function displayWordToGuess( secretWordUnderscore ) {
    // Underscores displayed for each letter in the secretWord
    // Where do we want to put it?
    const UnderscoreSpot = document.getElementById( 'secretWordUnderscoreSpot' );

    // What do we want to put there?
    let underscoreSPAN = document.createElement( 'SPAN' );
    underscoreSPAN.textContent = `${ secretWordUnderscore }`;

    // Add it the HTML
    UnderscoreSpot.appendChild( underscoreSPAN );
}


function displayNumberOfChances( guessChances ) {
    // Number of chances remaining
    // Where do we want to put it?
    const chances = document.getElementById( 'guessChances' );

    // What do we want to put there?
    let chancesSPAN = document.createElement( 'SPAN' );
    chancesSPAN.textContent = `${ guessChances }`;

    // Add it the HTML
    chances.appendChild( chancesSPAN );
}


function displayPreviousGuesses ( previousGuesses ) {
    // Previously guessed letter list
    // Where do we want to put it?
    const prevGuesses = document.getElementById( 'previousGuesses' );
    
    let prevGuessesSPAN = document.createElement( 'SPAN' );
    prevGuessesSPAN.id = "guessSPAN";
   
    // What do we want to put there?
    for ( let i = 0; i < previousGuesses.length; i++ )
    {
        prevGuessesSPAN.textContent = `${ previousGuesses[i] } `;
    }
    

    // Add it the HTML
    prevGuesses.appendChild( prevGuessesSPAN );    
};

/* function addNewPreviousGuess( previousGuesses ) {
    console.log("Additional prevguess!");
    let prevGuessesSPAN = document.getElementById( "guessSPAN" );
    prevGuessesSPAN.textContent = `${ previousGuesses }`;
    prevGuesses.appendChild( prevGuessesSPAN );
}; */


// User enters a letter letterGuess
let guessForm = document.getElementById( "guess-form" );

// Huge shout-out to Zhen Liu for his assistance with the below code block!
guessForm.addEventListener( "submit", ( event ) => {
    event.preventDefault();
    let userInput = document.getElementById( "user-guess" ).value.toUpperCase();
    let letterGuess = userInput;

    // If secretWord contains letterGuess, letter is displayed instead of underscores
    if ( secretWord.includes( letterGuess ))
    {
        for ( let i = 0; i < secretWord.length; i++ )
        {
            if ( secretWord[i] === letterGuess )
            {
                // Citation:
                //      https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript#1431113
                // The below code uses a custom function to replace the underscore in secretWordUnderScore at the matching index
                // Shout-out to Warren Uhrich for his guidance!
                secretWordUnderscore = replaceAt( secretWordUnderscore, Number([i]), letterGuess );
                console.log( secretWordUnderscore );
            } 
        }   
    }
    else
    {
        console.log("That letter is not in the secret word!");
        previousGuesses.push( letterGuess );
        displayPreviousGuesses ( previousGuesses );
        console.log( previousGuesses );
    }
    return secretWordUnderscore;
});



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