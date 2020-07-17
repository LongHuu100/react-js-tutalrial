// Normal Function
function runInBrows() {
    return arrFilter();
}

// Filter
var arrFilter = () => {
    var arr = [10,20,60];
    return arr.filter(item => {
        return item > 20;
    })
}

var arrMap = () => {
    var arr = [10,20,60];
    const newArr = arr.map( (item) => {
        return {
            cong10: item + 10,
            nhan2: item * 2
        };
    } );
    console.log('newArr', newArr);
    return "arrMap"
}

// Reduc
function arrReducer() {
    var arr = [1,5,9,7];
    return arr.reduce((a, b) => {
        return a + b;
    });
}

// Iterator .... 
function arrIterator() {
    var arr = [10,50,90,72];
    for(var i = 0; i< arr.length; i++) {
        console.log("Gia tri mang for: " + arr[i]);
    }
    return arr.forEach(item => {
        console.log("Gia tri mang forEach: " + item);
    });
}

Array.prototype.layGiaTriDau = function () {
    console.log(this);
    return this[0];
}

// Array LIFO (Stack)
function liFo() {
    var arr1 = [10,9,8,7];
    return arr1.pop();
}
// Array FiFo (Queue)
function fiFo() {
    var arr1 = [10,9,8,7];
    return arr1.shift();
}

// Array Sort
function arrSort() {
    var arr1 = [10,100,80,70];
    return arr1.sort( (soa, sob) => sob - soa);
    // return arr1.sort();
}

function arrConcat() {
    var arr1 = [10,100,80,70];
    var arr2 = [9,100,8,7];
    return arr1.concat(arr2);
}

// Kiem tra neu tat ca thanh phan trong mang deu thoa man dk thi
// return true, nguoc lai return false
function arrEvery() {
    var arr1 = [10,100,80,70];
    const cond = arr1.every(item => item > 5);
    console.log("cond: ", cond);
    return cond;
}

// Kiem tra neu mot phan tu bat ky thoa man dk se return true;
function arrSome() {
    var arr1 = [10,100,80,70];
    const cond = arr1.some(item => item > 90);
    console.log("cond arrSome: ", cond);
    return cond;
}

function arrnew() {
    var arr1 = [10,9,8,7];
    var arr2 = new Array(100,9,8,7);
    const getFirstInArray1 = arr1.layGiaTriDau();
    const getFirstInArray2 = arr2.layGiaTriDau();
     return "arr1 index 0 = " + getFirstInArray1 + ", arr2 index 0= " + getFirstInArray2;
}

document.getElementById("demo").innerHTML = runInBrows();