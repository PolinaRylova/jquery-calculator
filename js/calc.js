let currentOperand = "";
let previousOperand = "";
let operator = "";

function showValueToResultBlock(value) {
  $(".result-block").text(value);
}

function saveOperandValue(value) {
  if (currentOperand.length < 20) {
    if (value === "." && jQuery.inArray(".", currentOperand) >= 0) {
      alert("Вы не можете ввести более 1 точки");
    } else if (value === "." && currentOperand.length <= 0) {
      currentOperand = "0" + value;
      showValueToResultBlock(currentOperand);
    } else {
      // конкатенация, а не простое присваивание необходимо для возможности ввода многозначных чисел
      currentOperand += value;
      showValueToResultBlock(currentOperand);
    }
  } else {
    alert("Вы не можете ввести более 20 символов");
  }
}

function saveOperatorValue(value) {
  // если оператор есть, то есть уже было введено два операнда и оператор
  if (operator !== "") {
    calculateValue();
  }  else if (previousOperand === "") { // если previousOperand пустой, то есть ещё не были произведены вычисления
    previousOperand = currentOperand;
    // очищаем, чтобы не сконкатенировалось с предыдущим результатом при новом вызове функции saveOperandValue
    currentOperand = "";
  }
  operator = value;
}

function calculateValue() {
  switch (operator) {
    case '+':
      previousOperand = Number(previousOperand) + Number(currentOperand);
      break;
    case '-':
      previousOperand = previousOperand - currentOperand;
      break;
    case '*':
      previousOperand = previousOperand * currentOperand;
      break;
    case '/':
      previousOperand = previousOperand / currentOperand;
      break;
  }
  // очищаем, чтобы не сконкатенировалось с предыдущим результатом при новом вызове функции saveOperandValue
  currentOperand = "";
}

function clearValues() {
  previousOperand = "";
  currentOperand = "";
  operator = "";
  showValueToResultBlock(currentOperand);
}

function showFinalValue() {
  calculateValue();
  previousOperand = previousOperand.toString();
  if (previousOperand.length > 20) {
    alert("Ваш результат " + previousOperand + " превышает доступные размеры поля, поэтому не может быть отображен полностью");
    showValueToResultBlock("E" + previousOperand.slice(0, 19));
  } else {
    showValueToResultBlock(previousOperand);
  }
  operator = "";
}

$(".operand-btn").on("click", (event) => saveOperandValue(event.target.innerText));
$(".dot-btn").on("click", (event) => saveOperandValue(event.target.innerText));
$(".operator-btn").on("click", (event) => saveOperatorValue(event.target.innerText));
$(".equal-btn").on("click", showFinalValue);
$(".cancel-btn").on("click", clearValues);