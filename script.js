const display = document.getElementById("display");

let currentNumber = "";
let previousNumber = "";
let operator = null;

function updateDisplay(value) {
    display.textContent = value;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    }
}

function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "÷":
            return divide(a, b);
        default:
            return "Invalid operator";
    };
}

document.querySelectorAll(".btn").forEach(button => {
    const value = button.dataset.value;

    button.addEventListener("click", () => {
        if (!isNaN(value)) {
            currentNumber += value;
            updateDisplay(currentNumber);
        }

        if (["+", "-", "x", "÷"].includes(value)) {
            if (currentNumber === "") {
                return;
            }

            operator = value;
            previousNumber = currentNumber;
            currentNumber = "";
        }
    });
});

document.getElementById("equals").addEventListener("click", () => {
    if (previousNumber === "" || currentNumber === "" || operator === null) {
        return;
    }

    const result = operate(operator, previousNumber, currentNumber);
    updateDisplay(result);
    currentNumber = result.toString();
    previousNumber = "";
    operator = null;
});

document.getElementById("clear").addEventListener("click", () => {
    currentNumber = "";
    previousNumber = "";
    operator = null;
    updateDisplay("0");
});