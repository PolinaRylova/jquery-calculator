var currentOperand = "";
var previousOperand = "";
var operator = "";
var result;

function showValueToResultBlock(value) {
    $(".result-block").text(value);
}

function saveOperandValue(value) {
    if (currentOperand.length < 20) {
        if (value === "." && jQuery.inArray(".", currentOperand) >= 0) {
            alert("Вы не можете ввести более 1 точки");
        } else {
            currentOperand += value;
            showValueToResultBlock(currentOperand);
        }
    } else {
        alert("Вы не можете ввести более 20 символов");
    }
    console.log('currentOperand ' + currentOperand);
}

function saveOperatorValue(value) {
    if (operator !== "") {
        calculateValue();
    }
    previousOperand += currentOperand;
    currentOperand = "";
    operator = value;
    console.log('operator ' + operator);
}

function calculateValue() {
    previousOperand = +previousOperand;
    currentOperand = +currentOperand;
    switch (operator) {
        case '+':
            result = previousOperand + currentOperand;
        break;
        case '-':
            result = previousOperand - currentOperand;
        break;
        case '*':
            result = previousOperand * currentOperand;
        break;
        case '/':
            result = previousOperand / currentOperand;
        break;
    }
    console.log('result ' + result);
    currentOperand = "";
    previousOperand = result;
    operator = "";
}

function clearValues() {
    previousOperand = "";
    currentOperand = "";
    operator = "";
    showValueToResultBlock(currentOperand);
}

function showFinalValue() {
    calculateValue();
    showValueToResultBlock(result);
}

$(".operand-btn").on("click", function (event) {
    console.log(event);
    saveOperandValue(event.target.innerText);
});

$(".dot-btn").on("click", function (event) {
    console.log(event);
    saveOperandValue(event.target.innerText);
});
$(".operator-btn").on("click", function (event) {
    console.log(event);
    saveOperatorValue(event.target.innerText);
});
$(".equal-btn").on("click", showFinalValue);
$(".cancel-btn").on("click", clearValues);