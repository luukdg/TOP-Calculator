// Basis variables
let firstNumber = 10;
let secondNumber = 20;
let result = 0;

// Functions for add, subtract, multiply and divide
function add(a, b) {
    return result = a + b;
}

function subtract(a, b) {
    return result = a - b;
}

function multiply(a, b) {
    return result = a * b;
}

function divide(a, b) {
    return result = a / b;
}

// Function to pick the right operator
function operate(a, b, operatorFunction) {
    return operatorFunction(a, b);
};

console.log(operate(firstNumber, secondNumber, divide));