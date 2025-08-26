let display = document.getElementById('display');
    let currentInput = '0';

    function updateDisplay() {
        display.textContent = currentInput;
    }

    function appendNumber(number) {
        if (currentInput === '0') {
            currentInput = number;
        } else {
            currentInput += number;
        }
        updateDisplay();
    }

    function appendOperator(operator) {
        if (!isNaN(currentInput.slice(-1))) {
            currentInput += operator;
            updateDisplay();
        }
    }

    function clearDisplay() {
        currentInput = '0';
        updateDisplay();
    }

    function calculateResult() {
        try {
            currentInput = eval(currentInput).toString();
            updateDisplay();
        } catch {
            currentInput = 'Erro';
            updateDisplay();
            setTimeout(clearDisplay, 1000);
        }
    }
