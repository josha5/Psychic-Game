document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    let wins = document.querySelector("#winNumber");
    let losses = document.querySelector("#lossNumber");
    let guessesLeft = document.querySelector("#guessesLeft");
    const currentGuesses = document.querySelector("#currentGuesses");
    let keyString = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let gameWon = false;
    let guesses = 6;
    let winNumber = 0;
    let lossNumber = 0;
    let randomElem = "";
    
    // Getting random letter from alphabet array
    const randomLetter = function(alphabet) {
        randomElem = alphabet.splice(Math.floor(Math.random()* alphabet.length), 1).join("");
        console.log(randomElem);
        return randomElem;
    }

    randomLetter(alphabet);
    document.addEventListener("keypress", matchKey);

    function matchKey(e) {
        var regex = /[a-zA-Z]/g;
        if(e.key.match(regex) && e.keyCode !== 13) {
            keyString += e.key;
            currentGuesses.textContent = keyString;
        } 
        loseAlert(keyString);
        validateKey(e);
    }

    function loseAlert(keyString) {
        if(keyString.length >= 6 && gameWon === false) {
            lossNumber += 1;            
            losses.textContent = lossNumber;
            alert("You lose!");
            newGame();
        }
    }
    
    function validateKey(e) {
        if(e.key !== randomElem) {
            guesses -= 1;
            guessesLeft.innerHTML = guesses;
        } else if(e.key === randomElem) {
            alert("You win!");
            winNumber += 1;
            gameWon = true;
            wins.textContent = winNumber;
            newGame();
        }
    }

    function newGame() {
        if(gameWon === true || keyString.length >= 6) {
            randomElem = "";
            guesses = 6;
            keyString = "";
            gameWon = false;
            randomLetter(alphabet);
        }
    }

    var modal = document.getElementById('modal');
    modal.style.display = "block";
});