var arr = [1, 2, 3, 4];
var arr = new Array(1, 2, 3, 4);

// -- Detecting an array
if (arr instanceof Array) {
// do some array stuff
}

// -- length property
var arr = [1, 2, 3, 4];
console.log(arr.length); // 4
arr[20] = 2;
console.log(arr.length); // 21 - even though there are no elements between index 5 and 19

// -- Array methods
var arr = [2, 2, 3, 4]
Array.prototype.first = function() {
    return this[0];
}
console.log(arr.first()); // prints 1

// -- LIFO behavior (stack)
var arr = [true, 2, 3, "4"];
arr.push(5);
console.log(arr);               // [true, 2, 3, "4", 5]
last_element = arr.pop();
console.log(arr);               // [true, 2, 3, "4"]
console.log(last_element);      // 5

// -- FIFO behavior (queue)
var arr = [true, 2, 3, "4"];
first_item = arr.shift();
console.log(arr);               // [2, 3, "4"]
console.log(first_item);        // true
arr.push(first_item);

// -- Reverse FiFO
var arr = [true, 2, 3, "4"];
new_length = arr.unshift('new_elem');
console.log(arr);               // ["new_elem", true, 2, 3, "4"]
console.log(new_length);        // 5

// -- Reordering methods
var arr = [true, 2, 3, "4"];
new_array = arr.reverse()
console.log(new_array);         // ["4", 3, 2, true]
new_array = arr.sort();
console.log(new_array);         // [2, 3, "4", true]
var arr = [1, 2, 3, 4, 10];
console.log(arr.sort());         // [1, 10, 2, 3, 4]
console.log(arr.sort((el1, el2) => el1 - el2)); // [1, 2, 3, 4, 10]

// -- Manipulation methods
var arr = [true, 2, 3, "4"];
new_array = arr.concat(5, 6, 7)
console.log(new_array);         // [true, 2, 3, "4", 5, 6, 7]

new_array = arr.slice(0, 2);
console.log(new_array);         // [true, 2]

console.log(arr);               // arr not changed - [true, 2, 3, "4"]
arr.splice(0, 1, 1); // I replace the first item with 1
console.log(arr);                // [1, 2, 3, "4"]

// -- Iterative methods every(), filter(), forEach(), map(), some()
// Kiểm tra tất cả các phần tử đều nhỏ hơn 9.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var every_result_is_smaller_than_9 = numbers.every(item => item < 9);

// this is equivalent with
var every_result_is_smaller_than_9 = numbers.every(function(item) { return item < 9; });
console.log(every_result_is_smaller_than_9);  // false

// Kiểm tra nếu một phần tử trong mảng nhở hơn 9 thì trả về true
var some_resulst_are_smaller_than_9 = numbers.some(item => item < 9);
console.log(some_resulst_are_smaller_than_9); // true

var odd_numbers = numbers.filter(item => item % 2 == 1);
console.log(odd_numbers);        // [1, 3, 5, 7, 9]

numbers.forEach(item => console.log("works"));
var numbers_plus_one = numbers.map(item => item + 1);
console.log(numbers_plus_one);

// -- Reduction Methods
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var total = numbers.reduce(function(sum, value) {
    return sum + value;
}, 0);
console.log(total);
// here I don't provide the seconds argument (initial value) ->
// at first call, sum = numbers[0] and value = numbers[1] so the result is the same
var total = numbers.reduce(function(sum, value) {
    return sum + value;
});
console.log(total);
var concatenate = numbers.reduceRight((str, value) => str = str + value, '');
console.log(concatenate); // '987654321'

// we start from '' add concatenate each value, starting from the right
