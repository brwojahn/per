// ==========================================
// HOW TIMERS WORK IN JAVASCRIPT
// ==========================================

// setInterval() - runs code REPEATEDLY at a fixed interval
// Syntax: setInterval(function, milliseconds)

let intervalID = setInterval(function() {
    console.log('This runs every second');
}, 1000);

// Why save it to a variable? So you can STOP it later
// Without stopping it, it runs forever

clearInterval(intervalID);


// ==========================================
// HOW TO BUILD A STOPWATCH
// ==========================================

// WRONG WAY - Don't do this:
let seconds = 0;
setInterval(function() {
    seconds++;
    console.log(seconds);
}, 1000);

// Problem: Not accurate. If your computer is busy, intervals can drift
// After 10 minutes, might be off by seconds


// CORRECT WAY - Use timestamps:

// Step 1: Save the START time when timer begins
let startTime = Date.now();

// Step 2: Every frame, calculate how much time has passed
setInterval(function() {
    let currentTime = Date.now();
    let elapsed = currentTime - startTime;
    console.log(elapsed + ' milliseconds have passed');
}, 10);

// Why this works: Date.now() gives you the ACTUAL current time
// So you're always comparing against reality, not counting intervals


// ==========================================
// COMPLETE TIMER EXAMPLE
// ==========================================

let timerStartTime;
let timerInterval;
let isRunning = false;

function startTimer() {
    timerStartTime = Date.now();
    isRunning = true;
    
    timerInterval = setInterval(function() {
        let elapsed = Date.now() - timerStartTime;
        displayTime(elapsed);
    }, 10);
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    
    let finalTime = Date.now() - timerStartTime;
    return finalTime;
}

function displayTime(milliseconds) {
    let totalSeconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let ms = Math.floor((milliseconds % 1000) / 10);
    
    console.log(minutes + ':' + seconds + '.' + ms);
}


// ==========================================
// WHY Date.now() INSTEAD OF COUNTING?
// ==========================================

// Date.now() returns milliseconds since January 1, 1970
// Example: 1700000000000

// When you start timer:
// startTime = 1700000000000

// 5 seconds later:
// currentTime = 1700000005000
// elapsed = currentTime - startTime = 5000 milliseconds

// This is ALWAYS accurate because you're asking "what time is it NOW?"
// Not "how many intervals have passed?"


// ==========================================
// FORMATTING TIME
// ==========================================

function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let milliseconds = Math.floor((ms % 1000) / 10);
    
    let formattedSec = seconds.toString().padStart(2, '0');
    let formattedMs = milliseconds.toString().padStart(2, '0');
    
    if (minutes > 0) {
        return minutes + ':' + formattedSec + '.' + formattedMs;
    } else {
        return seconds + '.' + formattedMs;
    }
}

// Examples:
formatTime(5432);
formatTime(65432);
formatTime(125432);


// ==========================================
// KEY CONCEPTS
// ==========================================

// 1. setInterval(function, time) - runs function repeatedly
// 2. clearInterval(id) - stops the interval
// 3. Date.now() - gets current timestamp in milliseconds
// 4. elapsed = Date.now() - startTime - calculates time passed
// 5. Format milliseconds into readable format (min:sec.ms)