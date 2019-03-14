var exp = "";
function getData(data) {
    exp = exp + data;
    document.getElementById("inputData").value = exp;
}
function inputValidation() {
    var expression = document.getElementById("inputData").value;
    try {
        document.getElementById("inputData").value = eval(expression);
    } catch (e) {
        document.getElementById("inputData").value = "Invalid Expression";
    }
}
function clearAll() {
    exp = "";
    document.getElementById("inputData").value = "0";
}