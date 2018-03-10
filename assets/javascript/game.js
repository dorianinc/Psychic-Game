

// Start of Array containing alphabet
var alphabet = ["a", "b" ,"c" ,"d" ,"e" ,"f" ,"g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// End of Array containing alphabet

// Start of scoreboard variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetter = [];
// End of scoreboard variables
                            
// Randomly selects a letter from the 'alphabet' array; this is the computers choice
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
                            
// Console log for computerChoice
console.log(computerChoice)
                            
// Players guess variable along with score +/- function starts here

document.onkeyup = function(event) {
var userGuess = event.key;
guessedLetter.push(userGuess);

// Console log for 'userGuess'
console.log(userGuess)

    if(userGuess === computerChoice){
        wins++;
        guessesLeft = 9;
        //Console log for wins
        console.log(wins)

    } 
    else {
        guessesLeft--;
        //Console log for guesses
        console.log(guessesLeft)

    }
    if(guessesLeft === 0){
        losses++
        guessesLeft = 9;
        //Console log for losses
        console.log(losses)

    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById('guesses_so_far').innerHTML = "Youe guesses so far: " + guessedLetter;

}
// Players guess variable along with score +/- function ends here





