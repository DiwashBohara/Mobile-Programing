function calculate(op) {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let r;

    if (isNaN(a) || isNaN(b)) {
        r = "Enter numbers!";
    } else if (op === "+") {
        r = a + b;
    } else if (op === "-") {
        r = a - b;
    } else if (op === "*") {
        r = a * b;
    } else if (op === "/") {
        r = (b === 0) ? "Cannot divide by 0" : a / b;
    }

    document.getElementById("result").value = r;
}