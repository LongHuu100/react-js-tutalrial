//charAt(x)
var myString = 'jQuery FTW!!!';
console.log(myString.charAt(7));
//output: F

//charAt(position)
var message="jquery4u"
//alerts "q"
alert(message.charCodeAt(1));

//concat(v1, v2,..)
var message="Sam"
var final=message.concat(" is a"," hopeless romantic.")
//alerts "Sam is a hopeless romantic."
alert(final)

//fromCharCode(c1, c2,...)
console.log(String.fromCharCode(97,98,99,120,121,122))
//output: abcxyz
console.log(String.fromCharCode(72,69,76,76,79))
//output: HELLO
//(PS - I have no idea why you would use this? any ideas?)

//indexOf(char/substring)
var sentence="Hi, my name is Sam!"
if (sentence.indexOf("Sam")!=-1)
    alert("Sam is in there!")

//lastIndexOf(substr, [start])
var myString = 'javascript rox';
console.log(myString.lastIndexOf('r'));
//output: 11

//match(regexp) //select integers only
var intRegex = /[0-9 -()+]+$/;
var myNumber = '999';
var myInt = myNumber.match(intRegex);
console.log(isInt);
//output: 999
var myString = '999 JS Coders';
var myInt = myString.match(intRegex);
console.log(isInt);
//output: null


//replace(substr, replacetext)
var myString = '999 JavaScript Coders';
console.log(myString.replace(/JavaScript/i, "jQuery"));
//output: 999 jQuery Coders
//replace(regexp, replacetext)
var myString = '999 JavaScript Coders';
console.log(myString.replace(new RegExp( "999", "gi" ), "The"));
//output: The JavaScript Coders


//search(regexp)
var intRegex = /[0-9 -()+]+$/;
var myNumber = '999';
var isInt = myNumber.search(intRegex);
console.log(isInt);
//output: 0
var myString = '999 JS Coders';
var isInt = myString.search(intRegex);
console.log(isInt);
//output: -1

//slice(start, end)
var text="excellent"
text.slice(0,4) //returns "exce"
text.slice(2,4) //returns "ce"

//split(delimiter)
var message="Welcome to jQuery4u"
//word[0] contains "We"
//word[1] contains "lcome to jQuery4u"
var word=message.split("l")

//substring(from, to)
var text="excellent"
text.substring(0,4) //returns "exce"
text.substring(2,4) //returns "ce"

//substring(from, [to])
var myString = 'javascript rox';
myString = myString.substring(0,10);
console.log(myString)
//output: javascript

//toLowerCase()
var myString = 'JAVASCRIPT ROX';
myString = myString.toLowerCase();
console.log(myString)
//output: javascript rox

//toUpperCase()
var myString = 'javascript rox';
myString = myString.toUpperCase();
console.log(myString)
//output: JAVASCRIPT ROX
