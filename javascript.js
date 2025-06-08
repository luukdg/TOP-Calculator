// Basis variables
let firstNumber = "";
let secondNumber = "";
let result = 0;
let operator = 0;
let shouldClearDisplay = false;

// Functions for add, subtract, multiply and divide
function add(a, b) {return result = a + b;}
function subtract(a, b) {return result = a - b;}
function multiply(a, b) {return result = a * b;}
function divide(a, b) {return result = a / b;}

// Function to pick the right operator
function operate(a, b, operatorFunction) {
    return operatorFunction(parseInt(a), parseInt(b));
};

// Event listener to get number input
const display = document.querySelector(".display")
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        const input = number.textContent;

        if (operator === add) {
            if(shouldClearDisplay) {
                display.textContent = "";
                shouldClearDisplay = false;
            } 

            display.textContent += input;
            secondNumber += input;
            console.log("secondNumber", secondNumber);
        } else {
            display.textContent += input;
            firstNumber += input;
            console.log("firstNumber", firstNumber);
        }
    });
});

const addButton = document.querySelector("#add");
addButton.addEventListener("click", () => {
    operator = add;
    shouldClearDisplay = true;
    console.log(operator);
});

const resultButton = document.querySelector("#equal")
resultButton.addEventListener("click", () => {
    operate(firstNumber, secondNumber, operator);
    display.textContent =+ result;
});