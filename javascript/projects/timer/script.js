let spacebarPress = document.addEventListener('keydown', startPreTimer())
let spacebarUp = document.addEventListener('keyup', startTimer())
const time = document.getElementById('timer');
let minutes = null;
let seconds = null;
let milliseconds = null;


function startPreTimer() {
    if (spacebarPress=="spacebar") {
        startingTime = Date.now();
        time.textContent = "00:00";
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
    } else {
        return;
    }
}

function startTimer() {
    if (startingTime >= 1000) {
        
    }
}
   

