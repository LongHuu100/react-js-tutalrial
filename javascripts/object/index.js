// Sử dụng Object literals
var liveedu = {
    //declaring properties
    student: "james",
    //declaring methods
    watch: function() {
        console.log("learn new tech skills");
    },
};
//accessing methods and properties
liveedu.watch();
//output is learn new tech skills

// Sử dụng Object constructor functions
function Liveedu(student) {
    // properties
    this.student = student;
    // methods
    this.watch = function() {
        console.log(this.student + "learns new tech skills");
    }
}
Liveedu.prototype.nationality = "English";
// instantiating the object
var liveedu = new Liveedu("James ");
// accessing methods and properties
liveedu.watch(); //output is James learns new tech skills
console.log(Object.getPrototypeOf(liveedu)); // output is object

// Sử dụng prototyping inheritance
var liveedu = {
    student: "james",
    watch: function() {
        return this.student + " is learning new skills";
    }
}
var livecoding = {
    student: "felix",
    watch: function() {
        return this.student + " is learning new skills";
    }
}
/*
// Prototype ES6
var WatchProto = {
    watch: function() {
        return this.student + " is learning new skills";
    }
}

var liveedu = {
    student: "james",
    __proto__: WatchProto
}

var livecoding = {
    student: "felix",
    __proto__: WatchProto
}
*/
console.log(liveedu.watch()); //james is learning new skills
console.log(livecoding.watch()); //felix is learning new skills

// Một lưu ý quan trọng là proto là cú pháp mới chỉ có từ Javascript ES6 trở đi nên có thể sẽ không hoạt động trên các trình duyệt cũ.
// Một cách thay thế khác là bạn có thể sử dụng phương thức Object.create() để tạo ra các prototype.

var WatchProto = {
    watch: function() {
        return this.student + " is learning new skills";
    }
}

var liveedu = Object.create(WatchProto);
liveedu.student = "james";
