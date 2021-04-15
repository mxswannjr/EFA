// = comment for single line of code
/* = comment for multiple lines of code
*/
// value of a comment: 
// a comment communicates to anyone reading our code

//types of comments:
// 1) single line comment
// 2) multi-line comment 

/*
content
*/

//console.log
//outputs some message to the console
//EXAMPLE
console.log('this is a console log output');

// a comma (',') acts a space bar. it seperates values (numbers or strings).
//EXAMPLE:
console.log('you can seperate parts of a console message with commas,', 'just like this!');

console.log(22,33,4,33,5,44,6,777);

//console.log and debugging
//we can debug with console.log messages in 2 big ways:
// 1) we can check the status of some javascript 'thing' -- console.log acts as a magnifying glass.
// 2) we can check a process we have built with repeated console.log messages.

//EXAMPLE: console.log displays the variable that holds the value 'Mario'.
var sampleName = 'Mario';
console.log(sampleName);

//EXAMPLE: 
var sampleNum = 1;
console.log(sampleNum);
sampleNum++;
console.log(sampleNum);
sampleNum++;
console.log(sampleNum);