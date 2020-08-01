class Student {
    constructor(rno,fname,lname){
        this.rno = rno
        this.fname = fname
        this.lname = lname
        console.log('inside constructor')
    }
    get fullName(){
        console.log('inside getter')
        return this.fname + " - "+this.lname
    }
}
let s1 = new Student(101,'Sachin','Tendulkar')
console.log(s1)
//getter is called
console.log(s1.fullName)
/*
// Static
'use strict'
class StaticMem {
    static disp() {
        console.log("Static Function called")
    }
}
StaticMem.disp() //invoke the static metho

// Ke Thua
'use strict'
class Shape {
    constructor(a) {
        this.Area = a
    }
}
class Circle extends Shape {
    disp() {
        console.log("Area of the circle:  "+this.Area)
    }
}
var obj = new Circle(223);
obj.disp()


'use strict'
class Root {
    test() {
        console.log("call from parent class")
    }
}
class Child extends Root {}
class Leaf extends Child {}

//indirectly inherits from Root by virtue of inheritance {}
var obj = new Leaf();
obj.test()


'use strict' ;
//Inheritance and Method Overriding
class PrinterClass {
    doPrint() {
        console.log("doPrint() from Parent called… ");
    }
}
class StringPrinter extends PrinterClass {
    doPrint() {
        console.log("doPrint() is printing a string…");
    }
}
var obj = new StringPrinter();
obj.doPrint();

// The Super Keyword
'use strict'
class PrinterClass {
    doPrint() {
        console.log("doPrint() from Parent called…")
    }
}
class StringPrinter extends PrinterClass {
    doPrint() {
        super.doPrint()
        console.log("doPrint() is printing a string…")
    }
}
var obj = new StringPrinter()
obj.doPrint()
*/
