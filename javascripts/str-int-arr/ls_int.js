// Show number ở dạng số mũ
var num = 77.1234;
var val = num.toExponential();

// Chuyển đổi một số thành kiểu chuỗi, giữ lại số chữ số thập phân do người dùng xác định.
num.toFixed(2)

// Chuyển đổi số thành dạng chuỗi với Local trình duyệt
var sum=2282.0000;
var formated_sum = Number(sum.toFixed(2)).toLocaleString("de-DE", {style: "currency", currency: "EUR"});

// Trả về giá trị số của một đối tượng Number.
var num = new Number(15.11234);
document.write("num.valueOf() is " + num.valueOf());

// Chuyển đổi số thành chuỗi
num = new Number(15);
document.write("num.toString() is " + num.toString());
