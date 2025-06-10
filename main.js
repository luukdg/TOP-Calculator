// Basis variables
let firstNumber = "";
let secondNumber = "";
let result = 0;
let operator = 0;
let shouldClearDisplay = false;
let resultShown = false;

// Functions for add, subtract, multiply and divide
function add(a, b) {return a + b;}
function subtract(a, b) {return a - b;}
function multiply(a, b) {return a * b;}
function divide(a, b) { return a / b;};
function remainder(a,b) {return a % b;}

// Rounds the result to 6 decimals
function roundDecimal(value, decimals = 6) {
    return parseFloat(value.toFixed(decimals)).toString();
}

// Function to pick the right operator --- And it converts a and b from string to a parseFloat
function operate(a, b, operatorFunction) {
    return operatorFunction(parseFloat(a), parseFloat(b));
};

// Check if an operator is selected
function checkOperator() {
    if (operator) {
        result = operate(firstNumber, secondNumber, operator);
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

// Query selectors
const displayCalc = document.querySelector(".display-calc")
const display = document.querySelector(".display-operator")
const buttonPressed = document.querySelectorAll("button");

// Functions for the buttons
buttonPressed.forEach((button) => {
    button.addEventListener("click", () => {
        // Text content of the buttons
        const input = button.textContent;

        switch(input) {
            // Add operator
            case "+":
                checkOperator();

                displayCalc.textContent = firstNumber + " + ";
                operator = add;
                shouldClearDisplay = true;
                break;
            
            // Subtract operator
            case "-":
                checkOperator();

                displayCalc.textContent = firstNumber + " - ";
                operator = subtract;
                shouldClearDisplay = true;
                break;

            // Multiply operator
            case "x":
                checkOperator();

                displayCalc.textContent = firstNumber + " x ";
                operator = multiply;
                shouldClearDisplay = true;
                break;

            // Divide operator
            case "/":
                checkOperator();

                displayCalc.textContent = firstNumber + " / ";
                operator = divide;
                shouldClearDisplay = true;
                break;

            // Remainder operator
            case "%":
                checkOperator();

                displayCalc.textContent = firstNumber + " % ";
                operator = remainder;
                shouldClearDisplay = true;
                break;

            // Calculates the result and does nothing if no operator is selected
            case "=":
                if (operator) {
                    console.log(result = operate(firstNumber, secondNumber, operator));
                    display.textContent = roundDecimal(result);
                    displayCalc.textContent += secondNumber;
                    resultShown = true;
                    secondNumber = "";
                    firstNumber = result;
                    operator = 0;
                } else {}
                break;

            // Reset button, removes every input
            case "AC":
                display.textContent = ""
                displayCalc.textContent = ""
                firstNumber = "";
                secondNumber = "";
                result = 0;
                operator = 0;
                break;

            // Backspace button
            case "DEL":
                if (operator) {
                    secondNumber = secondNumber.slice(0, -1);
                    display.textContent = display.textContent.slice(0, -1);
                } else {
                display.textContent = display.textContent.slice(0, -1);
                firstNumber = firstNumber.slice(0, -1);
                }
                break;

            case ".":
                if (!operator) {
                    if (!firstNumber.includes(".")) {
                        firstNumber += ".";
                        display.textContent += ".";
                    }
                } else {
                    if (!secondNumber.includes(".")) {
                        secondNumber += ".";
                        display.textContent += ".";
                    }
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