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
        return a /b;
    }
}

const display = document.getElementById("display");
let currentInput = "";

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;
        currentInput += value;
        display.textContent = currentInput;
    })
})