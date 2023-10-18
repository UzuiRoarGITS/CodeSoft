document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".button");

    let currentInput = "";
    let result = 0;
    let currentOperator = "";

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = button.textContent;

            if (value >= "0" && value <= "9" || value === ".") {
                currentInput += value;
            } else if (value === "C") {
                clear();
            } else if (value === "←") {
                backspace();
            } else if (value === "=") {
                calculate();
            } else {
                if (currentOperator) {
                    calculate();
                }
                currentOperator = value;
                result = parseFloat(currentInput);
                currentInput = "";
            }

            display.textContent = currentInput || result;
        });
    });

    function clear() {
        currentInput = "";
        result = 0;
        currentOperator = "";
    }

    function backspace() {
        currentInput = currentInput.slice(0, -1);
    }

    function calculate() {
        if (currentOperator === "+") {
            result += parseFloat(currentInput);
        } else if (currentOperator === "-") {
            result -= parseFloat(currentInput);
        } else if (currentOperator === "*") {
            result *= parseFloat(currentInput);
        } else if (currentOperator === "/") {
            result /= parseFloat(currentInput);
        }
        currentInput = "";
        currentOperator = "";
    }
});
