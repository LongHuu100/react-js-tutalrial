// This được gọi từ thằng nào thì nó chính bằng thằng đó

let person = {
    name : 'Bob',
    sayName : function() {
        // this = person
        console.log("this ab setTimeout", this);
        var _this = this;
        setTimeout(function() {
            // this được gọi từ setTimeout function nên this là đối tượng gần nhất của setTimeout là = window
            // this = window
            console.log(_this);
            console.log(`I'm ${this.name}`);
            console.log(`this in persion name ${_this.name}`);
        }, 1000);
    }
};
person.sayName();

// Trường hợp này this được gọi trong arrow function nên this = window.
let person = {
    name : 'Bob',
    sayName : () => {
        // this = window
        console.log("this ben ngoai setTimeout", this);
        setTimeout(() => {
            // this = window
            console.log("this ben trong setTimeout", this);
            console.log(`I'm ${this.name}`);
        }, 1000);
    }
};
person.sayName();

// this được gọi trong setTimeout arrow function nên this là đối tượng chứa setTimeout, do đó this = person
let person = {
    name : 'Bob',
    sayName : function() {
        // this = person
        setTimeout(() => {
            // this = person
            console.log(`I'm ${this.name}`);
        }, 1000);
    }
};
person.sayName();

// Giải thích như hai trường hợp ở trên.
let person = {
    name : 'Bob',
    sayName : () => {
        // this = window
        setTimeout(function() {
            // this = window
            console.log(`I'm ${this.name}`);
        }, 1000);
    }
};
person.sayName();

*/
// Trường hợp muốn gọi this trong setTimeout function thì gán selt = this rồi gọi sau.
let person = {
    name : 'Bob',
    sayName : function() {
        let self = this;
        // this = person, self = person
        setTimeout(function() {
            // this = window, self = person
            console.log(`I'm ${self.name}`);
        }, 1000);
    }
};
person.sayName();
