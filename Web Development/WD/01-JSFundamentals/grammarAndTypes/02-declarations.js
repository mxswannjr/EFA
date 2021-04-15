// VARIABLE
/* variable = var
the concept of a variable is that it is a "bucket" to store something*/

// What is a variable?
var a = 1;
var b  = 2;
// var can in clue numbers, strings, t/f, etc. but there are some limitations.
console.log(a+b);


// Notes on naming varibales:
// 1) a variable must begin with a letter, underscore, or dollar sign
// 2) numbers may follow the above characters, but cannot come first
// 3) JavaScript is case-sensitive -- 'hello' and 'Hello' are different variables.

/*
DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
*/

/*
Declarations refer to when we 'declare' a variable.

Initializations refer to when a variable is assigned a value.

Assignment refers to giving a variable a value. This can be after initialization.
*/

var x;
console.log('Declaration 1:', x); // undefined -- x has yet to be assigned a value, therefore x is undefined. 


x = 10;
console.log('Intialization 1:', x); // 10 -- here we have initialized for x to now hold a value of 10.

x = 33;
console.log('Assignment 1:', x); // 33 -- in this console.log we have assigned x to hold a new valuation of 33, rather than 10.


var y;
console.log(y);

y = 'hello';
console.log(y) // initialization

y = 'you are my fren';
console.log(y) // assignment

/*
VAR, LET, & CONST

Var = 'old' keyword for variables
Let = 'new' keyword for variables (introdeuced with ES6)
Const = also 'new', declares unchangeable variables
 */

let tonight = 'great!';
const elevenFifty = 'Amazing!';
console.log(tonight, elevenFifty);

tonight = 'lovely!';
console.log (tonight, elevenFifty);

 // elevenFifty = 'Super!' -- attempting to change a const will create an error. const is like a bucket with a lid. when it is declared, it cannot be assigned a new value.