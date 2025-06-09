// Basis variables
let firstNumber = "";
let secondNumber = "";
let result = 0;
let operator = 0;
let shouldClearDisplay = false;
let resultShown = false;

// Functions for add, subtract, multiply and divide
function add(a, b) {return result = a + b;}
function subtract(a, b) {return result = a - b;}
function multiply(a, b) {return result = a * b;}
function divide(a, b) {
    if (b === 0) {
        return result = NaN
    } else {
        return result = a / b;
    }
};

// Rounds the result to 6 decimals
function roundDecimal(value, decimals = 6) {
    return parseFloat(value.toFixed(decimals)).toString();
}

// Function to pick the right operator
function operate(a, b, operatorFunction) {
    return operatorFunction(parseInt(a), parseInt(b));
};

// Check if an operator is selected
function checkOperator() {
    if (operator) {
        operate(firstNumber, secondNumber, operator);
        display.textContent = roundDecimal(result);
        firstNumber = result;
        secondNumber = "";
}};

// Check if is screen should be cleared after result
function newDigitCheck () {
    if (resultShown) {
        display.textContent = ""
        firstNumber = "";
        secondNumber = "";
        result = 0;
        operator = 0;
        resultShown = false;
    }
};

// Event listener to get input
const displayCalc = document.querySelector(".display-calc")
const display = document.querySelector(".display-operator")
const buttonPressed = document.querySelectorAll("button");

// Functions for the buttons
buttonPressed.forEach((button) => {
    button.addEventListener("click", () => {
        const input = button.textContent;

        switch(input) {
            case "+":
                checkOperator();

                displayCalc.textContent = firstNumber + " + ";
                operator = add;
                shouldClearDisplay = true;
                break;
            
            case "-":
                checkOperator();

                displayCalc.textContent = firstNumber + " - ";
                operator = subtract;
                shouldClearDisplay = true;
                break;

            case "x":
                checkOperator();

                displayCalc.textContent = firstNumber + " x ";
                operator = multiply;
                shouldClearDisplay = true;
                break;

            case "/":
                checkOperator();

                displayCalc.textContent = firstNumber + " / ";
                operator = divide;
                shouldClearDisplay = true;
                break;

            case "=":
                if (operator) {
                    console.log(operate(firstNumber, secondNumber, operator));
                    display.textContent = roundDecimal(result);
                    displayCalc.textContent += secondNumber;
                    resultShown = true;
                    secondNumber = "";
                    firstNumber = result;
                    operator = 0;
                } else {}
                break;

            case "AC":
                display.textContent = ""
                displayCalc.textContent = ""
                firstNumber = "";
                secondNumber = "";
                result = 0;
                operator = 0;
                break;

            case "DEL":
                if (operator) {
                    secondNumber = secondNumber.slice(0, -1);
                    display.textContent = display.textContent.slice(0, -1);
                } else {
                display.textContent = display.textContent.slice(0, -1);
                firstNumber = firstNumber.slice(0, -1);
                }
                break;

            // input for numbers
            default:
                if (operator) {
                    if(shouldClearDisplay) {
                    display.textContent = "";
                    shouldClearDisplay = false;
                }

                    display.textContent += input;
                    secondNumber += input;
                    console.log("secondNumber", secondNumber);
                } else {
                    newDigitCheck();
                    display.textContent += input;
                    firstNumber += input;
                    console.log("firstNumber", firstNumber);
                }
        }
    });
});