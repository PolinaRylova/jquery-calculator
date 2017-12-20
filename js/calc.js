var leftOperand = "";

function showValueToResultBlock(value) {
    $(".result-block").text(value);
}

function saveValue(event) {
    if (leftOperand.length < 20) {
        if (event.target.innerText === "." && jQuery.inArray(".", leftOperand) >= 0) {
            alert("Вы не можете ввести более 1 точки");
        } else {
            leftOperand += event.target.innerText;
            showValueToResultBlock(leftOperand);
        }
    } else {
        alert("Вы не можете ввести более 20 символов");
    }
    console.log(leftOperand);
}

$(".operand-btn").on("click", saveValue);
$(".dot-btn").on("click", saveValue);