/*
SWITCH STATEMENTS
*/

let friend;

switch(friend){
case 'Tom':
console.log('Hey Tom, when will you pay me my money?');
	break;
case 'Ken':
console.log('Hey Ken, do you really own a wolf?');
	break;
case 'Alex':
console.log('Hey Alex, how many magic cards do you own?');
	break;
default:
console.log('Im sorry, but do I know you?');
}

//Without the variable 'friend' being defined, it will default to the default response, but if you assign it a value of any of the cases, then the response to render what the console.log string is.

//Cannot forget to use the break, to seperate code blocks.


let yep = true;

switch(typeof yep == 'string' || typeof yep == 'boolean'){
case true:
console.log('yep is a string or a boolean');
	break;
default:
console.log('yep is not a string or a number');
}