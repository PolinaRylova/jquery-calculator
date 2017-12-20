var currentOperand = "";
var previousOperand = "";
var operator = "";

function showValueToResultBlock(value) {
    $(".result-block").text(value);
}

function saveOperandValue(event) {
    if (currentOperand.length < 20) {
        if (event.target.innerText === "." && jQuery.inArray(".", currentOperand) >= 0) {
            alert("Вы не можете ввести более 1 точки");
        } else {
            currentOperand += event.target.innerText;
            showValueToResultBlock(currentOperand);
        }
    } else {
        alert("Вы не можете ввести более 20 символов");
    }
    console.log(currentOperand);
}

function saveOperatorValue(event) {
    operator += event.target.innerText;
    console.log(operator);
    previousOperand += currentOperand;
    currentOperand = "";
}

function calculateValue(event) {
    var result;
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
    showValueToResultBlock(result);
    currentOperand = "";
    previousOperand = result;
    operator = "";
}

function clearValues(event) {
    previousOperand = "";
    currentOperand = "";
    operator = "";
    showValueToResultBlock(currentOperand);
}

$(".operand-btn").on("click", saveOperandValue);
$(".dot-btn").on("click", saveOperandValue);
$(".operator-btn").on("click", saveOperatorValue);
$(".equal-btn").on("click", calculateValue);
$(".cancel-btn").on("click", clearValues);