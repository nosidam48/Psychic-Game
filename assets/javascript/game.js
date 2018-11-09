//var to restrict alphabet, wins, losses, guesses left, random letter, guesses array, and to connect to HTML elementsbyID
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var losses = 0;

var guessesLeft = 9;

function randomLetter() {return(alphabet[Math.floor(Math.random() * alphabet.length)])};

var cpChoice = randomLetter();

var directionsText = document.getElementById("directions-text");

var winsText = document.getElementById("wins-text");

var guessLeftText = document.getElementById("guess-left-text");

var alreadyGuessedText = document.getElementById("already-guessed");

var lossesText = document.getElementById("losses-text");

var guesses = [];

var image = document.getElementById("image")

//click event = userGuess
document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    console.log(cpChoice);
    directionsText.textContent = "";
    
    //if loop to check if the usersGuess is already in the alreadyGuessed array AND if the key pressed is a letter
    if (guesses.indexOf(userGuess) === -1 && alphabet.indexOf(userGuess) >= 0) {
    guesses.push(userGuess);
    
    //print already guessed letters to HTML
    alreadyGuessedText.textContent = "Already Guessed: " + guesses;
    
    // subtract 1 from number of guesses left
    guessesLeft--;
    
    //print guesses left to the HTML
    guessLeftText.textContent = "Guesses left: " + guessesLeft;

    //win conditions. If statement comparing userGuess to cpChoice
    if (cpChoice === userGuess) {
        
        //add 1 to wins and log # of wins to console
        wins++;
        console.log(wins);
        //print win message to HTML
        directionsText.textContent = "You win!";

        //print # of wins to HTML
        winsText.textContent = "Wins: " + wins;

        //reset the game conditions
        //guesses array empty
        guesses = [];
        
        //new random letter for cpChoice
        cpChoice = randomLetter();
        
        //GuessesLeft reset
        guessesLeft = 9;
        
        //create a winning image
        image.innerHTML = "<img src=https://i.imgflip.com/phwoa.jpg width=400px height=200px>"
        
        //use winning audio clip
        var audio = new Audio('assets/images/ace.wav');
        audio.play()
    }

    //loss conditions if guesses left = 0 run lose script and reset game
    if (guessesLeft === 0) {
        
        //update directions text to read "you lose"
        directionsText.textContent = "You lose!";
        
        //add 1 to losses
        losses++;

        //update losses text with new loss number
        lossesText.textContent = "Losses: " + losses;
        //reset guesses to empty array
        guesses = [];

        //create a new random letter for cpChoice
        cpChoice = randomLetter();
        
        //reset guessesLeft to 9
        guessesLeft = 9;

        //display losing meme
        image.innerHTML = "<img src=https://media.makeameme.org/created/ever-wonder-why-jfei6i.jpg width=400px height=200px>"

        //run losing audio clip
        var audio = new Audio('assets/images/loser.wav');
        audio.play()
    }

    
    }

}
  