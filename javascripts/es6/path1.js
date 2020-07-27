// Destructuring Assignments in ES6
var introduction = ["Hello", "I" , "am", "Sarah"];
var [greeting, pronoun] = introduction;

console.log(greeting);//"Hello"
console.log(pronoun);//"I"

var obj = {
    ts1: "ts1",
    ts2: "ts2"
}

let {ts1, ts2} = obj;


// Default Parameters in ES6
//ES5
function add(a,b) {
    var b = (typeof(b) !== "undefined") ? b : 5;
    return a + b;
}
add(4,2) //6
add(4) //9
//ES6
function add(a=3, b=5) {
    return a + b;
}
add(4,2) // 6
add(4) // 9
add() // 8

// 5: Rest Parameters in ES6
function sumNumbers(message, ...numbers) {
    let total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(message, total);
}
sumNumbers("Tổng là: ", 2, 3); // Tổng là:  5
sumNumbers("Giá trị của tổng là: ", 2, 3, 100); // Giá trị của tổng là:  105

//Template Literals in ES6
var name = "Brendan";
console.log(`Yo, ${name}!`);

