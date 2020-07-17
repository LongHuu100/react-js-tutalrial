console.log("log hello");

// Normal Function
function runInBrows() {
    return strUpperCase();
}
// anomoys Function
var chartAt = function() {
    var myString = 'jQuery FTW!!!';
    return myString.charAt(7);
}
// Arrow funciont
var strConcat = () => {
    var str = "This content";
    return str.concat(" is good .!");
}

var strIsMatch = () => {
    var intRegex = /[0-9 -()+]+$/;
    var number = "999";
    var isM = number.match(intRegex);
    console.log("isM", isM);
    return isM ? "true" : "false";
}

var strReplace = () => {
    // IIFE Function
    ( () => {
        var strRes = "999 this reps";
        console.log(strRes.replace("999", ""));
    }) ();
}

var strSplit = () => {
    const strP = "Chuoi can Chia ra boi dau cach";
    console.log(strP, strP.split(" "));
}

var strUpperCase = () => {
    const strP = "Chuoi can Chia ra boi dau cach";
    return strP.toUpperCase();
}

document.getElementById("demo").innerHTML = runInBrows();