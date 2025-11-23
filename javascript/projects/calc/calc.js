let num1;
let num2;
let operator;

let enter = document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        equals();
    } else {
        return;
    }
});

let bck = document.addEventListener('keydown', function(event) {
    if (event.key === "Backspace") {
        reset();
    } else {
        return;
    }
});

function equals() {
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    operator = document.getElementById('op').value;

    switch (operator) {
    case "+":
        adding();
        break;
    case "-":
        minus();
        break;
    case "*":
        mult();
        break;
    case "/":
        divide();
        break;
    default:
        console.log('caso inválido');
    }
}

function adding() {
    let result_add = num1 + num2;
    let result = document.getElementById('result');
    result.textContent = `The result of your calc (short for calculation) is ${result_add}`;
}

function minus() {
        let result_min = num1 - num2;
    let result = document.getElementById('result');
    result.textContent = `The result of your calc (short for calculation) is ${result_min}`;
}

function mult() {
        let result_mult = num1 * num2;
    let result = document.getElementById('result');
    result.textContent = `The result of your calc (short for calculation) is ${result_mult}`;
}

function divide() {
        let result_div = num1 / num2;
    let result = document.getElementById('result');
    result.textContent = `The result of your calc (short for calculation) is ${result_div}`;
}


function reset() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').textContent = '';
}


