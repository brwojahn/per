document.addEventListener('keydown', function(event) {
    if (event.key === "Enter" && from != null && to != null && number != null) {
        calculate()
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === "Backspace") {
        reset()
    }
})

let resultText = document.getElementById('result');
let number = null;
let from = null;
let to = null;
let result = null;

function setToValue() {
    to = document.getElementById('to').value; //F, C or K
}

function setFromValue() {
    from = document.getElementById('from').value; //F, C or K
}

function displayResult() {
    resultText.textContent = `calculation complete: ${from} to ${to} with the number ${number} is ${result}`; 
}

function calculate() {
    number = parseFloat(document.getElementById('number').value);
    if (from === "F" && to === "C") {
        result = (number - 32) * 5/9;
        displayResult();
    } else if (from === "F" && to ==="K") {
        result = (number - 32) * 5/9 + 273.15;
        displayResult();
    } else if (from === "C" && to === "F") {
        result = (number * 9/5) + 32;
        displayResult();
    } else if (from === "C" && to === "K") {
        result = number + 273.15;
        displayResult();
    } else if (from === "K" && to === "F") {
        result = (number - 273.15) * 9/5 + 32;
        displayResult();
    } else if (from === "K" && to === "C") {
        result = number - 273.15;
        displayResult();
    } else if (from === "K" && to === "K") {
        result = number;
        displayResult();
    } else if (from === "C" && to === "C") {
        result = number;
        displayResult();
    } else if (from === "F" && to === "F") {
        result = number;
        displayResult();
    } else {
        resultText.textContent = "Check if you have filled out all the fields..."
    }
}

function reset() {
    resultText.textContent = ''; 
    document.getElementById('number').value = '';  
    document.getElementById('from').selectedIndex = 0; 
    document.getElementById('to').selectedIndex = 0;  
    number = null;  
    from = null;    
    to = null;      
    result = null;  
}