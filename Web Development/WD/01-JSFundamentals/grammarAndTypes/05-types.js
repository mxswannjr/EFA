/*
TYPES
*/

// Boolean
var on = true;
console.log(on);

let off = false;
console.log(off);

// Boolean can represent: true/false, yes/no, on/off, 0/1

// Undefined

/*
Undefined usually means a variable has been declared but it's not been assigned a value.
 */

let grass;
console.log(grass); //undefined
// this output generated undefined because the 'let' represents a valuation that has yet to be intialized. Undefined serves as a hint that something was forgotten about, and can still be added. Bucket can still be filled.

let undef = undefined;
console.log(undef);

//Null

/*
Null mean a variable has been declared and assigned a value of null.
*/

var empty = null;
console.log(empty);
// We have blatantly delcared a var to hold the valuation of nothing at all. absolute zero.

/* 
Null and Undefined both represent variables with no value inside of them. Think of it this way -- null values are for gag gifts that are boxes intentionally given with nothing inside (because that the gag).

Undefined values are gifts given when the person giving the gift has forgotten to put the gift inside. 
*/

//Numbers
let  myLiteralAge = 65;
console.log(myLiteralAge); //65

let precise = 999999999999999;
console.log(precise); //999999999999999

let rounded = 9999999999999999;
console.log(rounded); // 10000000000000000
//JavaScipt is capable of working with large numbers, but there is a storage capacity.

let notQuite = 0.2 + 0.1;
console.log(notQuite); //0.30000000000000004
//JavaScript has a problem working with decimals at times.

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard); // 0.3
// JavaScript has issues with working with numbers. It is always smart to try and use open source code when dealing with numbers; be weary when working with large numbers and decimals.

//Strings
//A String is any value within quotes; JS spits out the value within the quotes.
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);
// It does not matter whether double or single quotes are used for stings.

//String Concatenation vs Addition
let first = 1050 + 100
let second = '1050' + '100';
//Notice the difference.
console.log(first);
console.log(second);

let third = 1050 + 'ABC';
console.log(third);
//This console.log renders a valuation of 1050ABC. It combines the numbers and letters into one. Numbers can be in the quotes, as well ... same result will occur.

console.log(typeof third); //Details the type of content you're working within your bucket.

//Interpolation
//Interpolation allows you to use strings with dynamic content (they require backticks)

//Example 1:
let age = 32;
let string = `my age is ${age}`;
console.log (string);
