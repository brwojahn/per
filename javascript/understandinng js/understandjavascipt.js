//a Js exectution context utilizes 2 diferent parts, memory and execution

//when initializing a code it "remembers" certain things and others no.

//lets say we have a function

function example() {
    console.log(`This is an Example.`);
}

//in this case when the code initializes, it "remembers" the code inside the function
//in this case
//console.log(`This is an Example.`);

//now lets take this variable

let v = "this is a variable";

//in this case when initialing it will not store the value
//it will only store when the execution passes through the part of code that defines the variable
//if you try to reference the v variable before it being defined, (above it)
//it will return an error, (this doesnt happen with var, only let and const, but we dont use var anymore
//var would return undefined until it passes through.)


//now lets go back to our function.
//a Js exectution context utilizes 2 diferent parts, memory and execution
//a Js function works in the same way, the code inside a function is a block that only referenced inside
//the function
//this basically means it create a new min Js execution inside of the global execution
//these are called scopes
//being global and local, global is the one everything can ref, use, etc
//the local happens inside of the function only.

//example

let module = 1;

function example2() {
    let num = 2;
    console.log(`This is an example. Number $(num)`);
}

//let num = 2 is a local variable and can only be referenced inside of the function (local scope)
//now the variable module is a global scoped value and can be referenced from inside of the function example2


//lets go deeper
//Hoisting

// JS Hoisting Demo

// Hoisting is JavaScript’s hidden two-stage execution.
// 1. Memory phase: JS scans and sets up all declarations (variables, functions)
// 2. Execution phase: It starts running actual code line by line

// Example 1: let variable, function declaration, calling before/after

let x = 7; // declared, value set

function greet(name) {
    console.log(`Hello, ${name}`); // function stored with its code in memory
}

console.log(x); // 7 – let is initialized after declaration
greet("Bruno"); // Hello, Bruno 



// Example 2: TDZ (Temporal Dead Zone) for let

console.log(y); // ReferenceError: y is not in the "memory" yet, can't use it yet!
greet("Bruno"); // This works, function is set in the memory as the code inside
                // Making it possible to call even before the code reader gets to it. 

let y = 7; // Now y is initialized, usable below

function greet(name) { 
    console.log(`Hello, ${name}`);
}

// More notes:
// - let and const: Hoisted but not initialized. You can't use before declaration (TDZ).
// - function declarations: Fully hoisted with code. Usable anytime in scope.
// - function expressions/arrow: Not hoisted! You get undefined or error if you use before.

// Reference patterns

// let example
console.log(b); // ReferenceError since b still isnt defined atp in the code.
let b = 10; //now it is declared, can use below.
console.log(b); // 10

// function declaration: hoisted
sayHi(); // works!

function sayHi() { 
    console.log("Hi!") 
}

// function expression: NOT hoisted
// sayBye(); // TypeError: sayBye is not a function
var sayBye = function() { console.log("Bye!") }

// Arrow function: NOT hoisted
// greetArrow(); // ReferenceError
const greetArrow = (name) => console.log(`Hi, ${name}`);

// Your learning cheat:
/// Hoisting = function declarations available everywhere, let/const not usable before line, var undefined before assignment.


