//EXAMPLE 1

console.log(scissors);
var scissors = 'blue';

//Example 1 breakdown:
//JS pulls all the funcitons to the top-left of the file.
var scissors;
console.log(scissors);
scissors = 'blue';

//EXAMPLE 2
function hoistTest(){
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}

hoistTest();

//EXAMPLE 2 breakdown:
function hoistTest(){
    var testVar;
    console.log(testVar);
    testVar = 10;
    console.log(testVar);
}

hoistTest(); //Always be sure to initialize the variable before you declare for the variable.