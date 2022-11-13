const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
function getUserNumberInputAsFloat() {
    return parseFloat(userInput.value);
}

function getUserNumberInputAsSrting() {
    return userInput.value;
}

function setUserNumberInput(value) {
    userInput.value = value;
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
    setUserNumberInput(0);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInputAsFloat();
    const initialResult = currentResult;
    const enteredNumberAsSrting = getUserNumberInputAsSrting();
    let mathOperator;

    if (!enteredNumberAsSrting) {
        alert("Enter a valid number");
        return;
    }

    if (calculationType === "ADD") {
        currentResult += enteredNumber;
        mathOperator = "+";
    } else if (calculationType === "SUBTRACT") {
        currentResult -= enteredNumber;
        mathOperator = "-";
    } else if (calculationType === "MULTIPLY") {
        currentResult *= enteredNumber;
        mathOperator = "*";
    } else if (calculationType === "DIVIDE") {
        if (!enteredNumber) {
            alert("Dividing by 0 is undefined");
            return;
        }
        currentResult /= enteredNumber;
        mathOperator = "/";
    } else {
        alert("Invalid Operator !!!");
        return;
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
}

setUserNumberInput(0);
addBtn.addEventListener("click", calculateResult.bind(this, "ADD"));
subtractBtn.addEventListener("click",  calculateResult.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click",  calculateResult.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click",  calculateResult.bind(this, "DIVIDE"));
