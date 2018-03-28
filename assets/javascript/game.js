document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    let wins = document.querySelector("#winNumber");
    const losses = document.querySelector("#lossNumber").textContent = 0;
    let guessesLeft = document.querySelector("#guessesLeft");
    const currentGuesses = document.querySelector("#currentGuesses");
    let keyString = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let gameWon = false;
    let guesses = 6;
    let winNumber = 0;
    
    // Getting random letter from alphabet array
    const randomLetter = function(alphabet) {
        alphabet.splice(Math.floor(Math.random()* alphabet.length), 1).join("");
    }

    document.addEventListener("keypress", matchKey);
    
    function matchKey(e) {
        var regex = /[a-zA-Z]/g;
        if(e.key.match(regex)) {
            keyString += e.key;
            currentGuesses.textContent = keyString;
        }
        loseAlert(keyString);
        validateKey(e);
    }

    function loseAlert(keyString) {
        if(keyString.length > 6 && gameWon === false) {
            alert("You lose!");
            newGame();
        }
    }
    
    function validateKey(e) {
        if(e.key !== randomLetter) {
            guesses -= 1;
            guessesLeft.innerHTML = guesses;
        } else if(e.key === randomLetter) {
            alert("You win!");
            winNumber += 1;
            gameWon = true;
            wins.textContent = winNumber;
            newGame();
        }
    }

    function newGame() {
        if(gameWon === true || keyString.length > 6) {
            guesses = 6;
            keyString = "";
            gameWon = false;
        }
    }
});