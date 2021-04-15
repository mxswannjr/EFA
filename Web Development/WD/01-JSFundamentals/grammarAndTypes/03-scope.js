/*
What is scope?
JavaScript has both local and global scope
 */

//EXAMPLE 1
var x = 12;

function scope(){
    var x =33;
    console.log(x);
}

scope(); //logs 33 -- calling the function to console log 33
console.log(x); //logs 12



//EXAMPLE 2

var x = 12;

function scope(){
    x = 33; //variable reassingment
    console.log(x);
}
scope(); // logs 33
console.log(x); //logs 33


//EXAMPLE 3

var x = 1;

function scope(){
    var x = 2;
    function scopeInner(){
        var x = 3;
        console.log(x); // logs 3
    }
    scopeInner();
    console.log(x); // logs 2, outside of scopeInner.
}

scope();
console.log(x); //logs 1, outside of function tool.


//EXAMPLE 4
//Contrasting with Example 5

var x = 12;

function scope(){
    var x = 33;
    if (true){
        let x= 45;
        console.log(x); // First conosle log is 45
    }
    console.log(x); // Second console log is 33
}

scope();
console.log(x); //Logs global scope x=12


//EXAMPLE 5
//Contrasts with Example 4

var x = 12;

function scope(){
    var x = 33;
    if (true){
        var x = 45;
        console.log(x); //45 
    }
    console.log(x); //log 45 becasue var doesnt obey block scope
}

scope();
console.log(x);
