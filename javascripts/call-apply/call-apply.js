// Call
var person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person2 = {
    firstName:"John",
    lastName: "Doe",
}
person1.fullName.call(person2);  // Will return "John Doe"

// Applay
var person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName: "Mary",
    lastName: "Doe"
}
person.fullName.apply(person1);  // Will return "Mary Doe"
