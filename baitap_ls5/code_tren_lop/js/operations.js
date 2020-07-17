function runInBrows() {
    return jsDoWhile();
}

var jsDoWhile = () => {
    var x = 20;
    do {
        console.log("Trong do while .!");
    } while(x < 10);

    while(x < 10) {
        console.log("Trong while .!");
    }
};

var jsTinhTong = () => {
    var a = 0;
    for(var i = 0; i < 100; i++){
        a += i;
    }
    console.log(a);
    return "InW";
}

var jsWhile = () => {
    var a = 0;
    while(a < 10) {
        console.log("Trong while .!", a);
        a++;
    }
    return "InW";
}

var jsSwitch = () => {
    var a = 100;
    var b = 0;
    switch (a) {
        case 100:
            b = a * 2;
            break;
        case 200 :
            b = a * 4;
            break;
        default:
            break;
    }
    return b;
}

var jsIfElse = () => {
    var x = 100;
    x += 20;
    console.log("x = ", x);
    var b = 10;
    // Khuyet
    if(x > 100) {
        b += x;
    }

    // Full
    var c = 0;
    if(x > 100) {
        console.log(">100")
        c = 50;
    } else {
        console.log("<100")
        c = 40;
    }
    // Sumary
    var c = x == 100 ? 50 : 40;
    return c;
}

document.getElementById("demo").innerHTML = runInBrows();