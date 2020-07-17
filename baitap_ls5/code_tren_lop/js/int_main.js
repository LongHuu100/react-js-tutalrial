// Normal Function
function runInBrows() {
    return intToFix();
}

var intToString = () => {
    var number = new Number(1000);
    console.log("number", number);
    console.log("to String", number.toString());
    return number.toString();
}

var intToFix = () => {
    var numb = 80.728121;
    return numb.toFixed(2);
}

document.getElementById("demo").innerHTML = runInBrows();