let level = null;
let randomNumber = null;
let guess = null;
let guessLimit = 1;
let guessLimitHigh;
let guessCount = 0;
let hint = document.getElementById('hints');
    document.getElementById('guess').disabled = true;
    document.getElementById('guessbtn').disabled = true;
let count = document.getElementById('count')
    count.textContent = `Counter: ${guessCount}`

function startGame() {
    level = document.getElementById('level').value
    
    guessCount = 0;
    count.textContent = `Counter: ${guessCount}`;
    hint.textContent = "";
    document.getElementById('guess').value = "";
    
    switch (level) {
        case "Select Difficulty":
            document.getElementById('guess').disabled = true;
            document.getElementById('guessbtn').disabled = true;
            return;
        case "Easy":
            randomNumber = Math.floor(Math.random() * 20) + 1;
            guessLimitHigh = 20;
            document.getElementById('guess').disabled = false;
            document.getElementById('guessbtn').disabled = false;
            break;
        case "Medium":
            randomNumber = Math.floor(Math.random() * 50) + 1;
            guessLimitHigh = 50;
            document.getElementById('guess').disabled = false;
            document.getElementById('guessbtn').disabled = false;
            break;
        case "Hard":
            randomNumber = Math.floor(Math.random() * 100) + 1;
            guessLimitHigh = 100;
            document.getElementById('guess').disabled = false;
            document.getElementById('guessbtn').disabled = false;
            break;
        default:
            reset();
    }

    document.getElementById('guess').disabled = false;
    document.getElementById('guessbtn').disabled = false;
    document.getElementById('guess').placeholder = `Input a number that is between 1 and ${guessLimitHigh}`;
}

function guessNumber() {
    guess = parseInt(document.getElementById('guess').value)
    
    if (guess > guessLimitHigh || guess < guessLimit) {
        hint.textContent = `Insert a number that is in the range of 1 through ${guessLimitHigh}.`
        return;
    } 
    
    let difference = Math.abs(guess - randomNumber)
        if        (guess > randomNumber && difference >= 10) {
            hint.textContent = `The number you chose is way too big`;
            guessCount+= 1;
            count.textContent = `Counter: ${guessCount}`;
        } else if (guess > randomNumber && difference <= 10) {
             hint.textContent = `The number you chose is too big`;
             guessCount+= 1;
             count.textContent = `Counter: ${guessCount}`;
        } else if (guess < randomNumber && difference < 10) {
             hint.textContent = `The number you chose is too small`;
             guessCount+= 1;
             count.textContent = `Counter: ${guessCount}`;
        } else if (guess < randomNumber && difference > 10) {
            hint.textContent = `The number you chose is way too small`;
            guessCount += 1;
            count.textContent = `Counter: ${guessCount}`;
        } else if (guess === randomNumber) {
            hint.textContent = `Well Done! The number you chose is correct!`;
            document.getElementById('guess').disabled = true;
            document.getElementById('guessbtn').disabled = true;
            document.getElementById('level').disabled = true;
            guessCount+= 1;
            count.textContent = `Counter: ${guessCount}`;
        } else {
            hint.textContent = `Please enter a valid number!`;
            return;
        }
    }


function reset() {
    document.getElementById('guess').value = '';
    document.getElementById('guess').placeholder = '';
    document.getElementById('guess').disabled = true;
    document.getElementById('guessbtn').disabled = true;
    document.getElementById('level').disabled = false;
    document.getElementById('level').selectedIndex = 0;
    randomNumber = null;
    guessCount = 0;
    guessLimitHigh = null;
    hint.textContent = '';
    count.textContent = `Counter: ${guessCount}`;
}