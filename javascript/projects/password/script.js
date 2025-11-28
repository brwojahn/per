let password;
const description = document.getElementById('desc');
let correct = 0;
let hasNumber = false;
let hasUpperCase = false;
let hasLowerCase = false;
let hasSpecialChar = false;
let hasMoreThan8 = false;
let changes = [];

function checkPassword() {
    password = document.getElementById('password').value; // Get current value
    checkHasNumber();
    checkHasUpperCase();
    checkHasLowerCase();
    checkHasSpecialChar();
    checkHasMoreThan8();
}

function checkHasNumber() {
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 0 && password[i] <= 9) {
            hasNumber = true;
            correct += 1;
            return; 
        }
    }
    hasNumber = false;
    changes.push("Password has to have at least 1 number")
}

function checkHasUpperCase() {
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char !== char.toLowerCase() && char === char.toUpperCase()) {
            hasUpperCase = true;
            correct += 1;
            return;
        }
    }
    hasUpperCase = false;
    changes.push("Password has to have at least 1 uppercase character")
}

function checkHasLowerCase() {
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char !== char.toUpperCase() && char === char.toLowerCase()) {
            hasLowerCase = true;
            correct += 1;
            return;
        }
    }
    hasLowerCase = false;
    changes.push("Password has to have at least 1 lowercase character")
}

function checkHasSpecialChar() {
    const specialchar = ['!', '@', '#', '$', '%', '&', '*'];
    hasSpecialChar = false; 
    for (let i = 0; i < password.length; i++) {
        if (specialchar.includes(password[i])) {
            hasSpecialChar = true;
            correct += 1;
            return;
        }
    }
    hasSpecialChar = false
    changes.push("Password has to have at least 1 special character");
}

function checkHasMoreThan8() {
    if (password.length >= 8) { 
        hasMoreThan8 = true;
        correct += 1;
    } else {
        hasMoreThan8 = false;
        changes.push("Password has to have more than 8 characters")
    }
}

function changeDesc() {
    let needed = 5 - correct;
    for (item of changes) {
        
    }
}

// let hasNumber = false;
// let hasUpperCase = false;
// let hasLowerCase = false;
// let hasSpecialChar = false;
// let hasMoreThan8 = false;