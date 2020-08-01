// Multi-line String in ES6
var kevin = {
    profile_image: 'http://lorempixel.com/300/300',
    name: 'Kevin',
    title: 'Mover, Shaker, Risk Taker'
}

function get_user_widget_markup (user) {
    return [
        '<div class="user-profile">',
        '<img src="' + user.profile_image + '" alt="" class="user-image">',
        '<h2 class="user-name">',
        user.name,
        '</h2>',
        '<p class="user-title">',
        user.title,
        '</p>',
        '</div>'
    ].join('')
}

let kevin = {
    profile_image: 'http://lorempixel.com/300/300',
    name: 'Kevin',
    title: 'Mover, Shaker, Risk Taker'
}

function get_user_widget_markup (user) {
    return `<div class="user-profile">
    <img src="${user.profile_image}" alt="" class="user-image">
    <h2 class="user-name">${user.name}</h2>
    <p class="user-title">${user.title}</p>
  </div>`
}

// Object Method Definition Shorthand
// ES5 code
var lib = {
    sum:  function(a, b) { return a + b; },
    mult: function(a, b) { return a * b; }
};

console.log( lib.sum(2, 3) );  // 5
console.log( lib.mult(2, 3) ); // 6

// ES6 code
const lib = {
    sum(a, b)  { return a + b; },
    mult(a, b) { return a * b; }
};

console.log( lib.sum(2, 3) );  // 5
console.log( lib.mult(2, 3) ); // 6

// Dynamic Property Keys
// Enhanced Object Literals in ES6
// ES5 code
var
    key1 = 'one',
    obj = {
        two: 2,
        three: 3
    };

obj[key1] = 1;
// obj.one = 1, obj.two = 2, obj.three = 3

// ES6 code
const
    key1 = 'one',
    obj = {
        [key1]: 1,
        two: 2,
        three: 3
    };
// obj.one = 1, obj.two = 2, obj.three = 3
