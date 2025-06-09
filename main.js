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
const buttonPressed = document.querySelectorAll("button");

buttonPressed.forEach((button) => {
    button.addEventListener("click", () => {
        const input = button.textContent;

        switch(input) {
            case "+":
                if (operator) {
                    operate(firstNumber, secondNumber, operator);
                    display.textContent =+ result;
                    firstNumber = result;
                    secondNumber = "";
                }
                operator = add;
                shouldClearDisplay = true;
                console.log(operator);
                break;
            
            case "-":
                if (operator) {
                    operate(firstNumber, secondNumber, operator);
                    display.textContent =+ result;
                    firstNumber = result;
                    secondNumber = "";
                }
                operator = subtract;
                shouldClearDisplay = true;
                console.log(operator);
                break;

            case "x":
                if (operator) {
                    operate(firstNumber, secondNumber, operator);
                    display.textContent =+ result;
                    firstNumber = result;
                    secondNumber = "";
                }
                operator = multiply;
                shouldClearDisplay = true;
                console.log(operator);
                break;

            case "/":
                if (operator) {
                    operate(firstNumber, secondNumber, operator);
                    display.textContent =+ result;
                    firstNumber = result;
                    secondNumber = "";
                }
                operator = divide;
                shouldClearDisplay = true;
                console.log(operator);
                break;

            case "=":
                console.log(operate(firstNumber, secondNumber, operator));
                display.textContent =+ result;
                break;

            case "AC":
                display.textContent = ""
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
                    display.textContent += input;
                    firstNumber += input;
                    console.log("firstNumber", firstNumber);
                }
        }
    });
});