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

// Check if an operator is selected
function checkOperator() {
    if (operator && secondNumber > 0) {
        operate(firstNumber, secondNumber, operator);
        display.textContent =+ result;
        firstNumber = result;
        secondNumber = "";
}};

// Event listener to get input
const display = document.querySelector(".display")
const buttonPressed = document.querySelectorAll("button");

// Functions for the buttons
buttonPressed.forEach((button) => {
    button.addEventListener("click", () => {
        const input = button.textContent;

        switch(input) {
            case "+":
                checkOperator();

                operator = add;
                shouldClearDisplay = true;
                console.log(operator);
                break;
            
            case "-":
                checkOperator();

                operator = subtract;
                shouldClearDisplay = true;
                console.log(operator);
                break;

            case "x":
                checkOperator();

                operator = multiply;
                shouldClearDisplay = true;
                console.log(operator);
                break;

            case "/":
                checkOperator();

                operator = divide;
                shouldClearDisplay = true;
                console.log(operator);
                break;

            case "=":
                if (operator === divide && secondNumber === 0) {
                    console.log("operator", operator)
                    display.textContent = "Zero division error"
                } else if (operator) {
                    console.log(operate(firstNumber, secondNumber, operator));
                    display.textContent =+ result;
                } else {}
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