/*
TERNARIES
*/


let x = 6;

x > 0 ? console.log('x is positive') : console.log('x is negative') 
//The '?' seperates the expression from the to-be-determined conditionals.

if (x>0){
console.log('x is positive');
} else {
console.log('x is negative');
}
//Renders the same result, but using a ternary is much more concise and clean.

let greeting = 'salutations';

if(greeting.length > 10){
console.log('that is a long greeting');
} else if (greeting.length == 10) {
console.log('your greeting is exactly ten characters');
} else {
console.log('what a normal greeting');
}

//How to make this a ternary

greeting.length > 10 ? console.log('that is a long greeting') :
greeting.length == 10 ? console.log('your greeting is exactly 10 characters') :
console.log('what a normal greeting');

//More than two ternaries means that you have to include the next expression directly after the colon that serves as 'else'.

