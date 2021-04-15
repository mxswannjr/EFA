//General Ideas: At their broadest level, functions do the following:
//1 -- they take some input which the function will handle/process
//2 -- they process the input given to them
//3 they usually, but not always, return some value
//4 -- they can be invoked (used) as many times as we want, cutting down on code repetition.

//EXAMPLE ONE
function newFunc(num){
    return num + 1;
}

console.log(newFunc(7));
conosle.log(newFunc(10));
console.log(newFunc(11));
console.log(newFunc(-2));
//You have to call for the function, to see it working, using console.log.

//EXAMPLE TWO
function sentence(firstName, lastName){
    return `My first name is ${firstName} and my last name is ${lastName}`;
}

console.log(sentence('Mario','Swann'));
console.log(sentence('Jovan', 'Swann'));

let superImportantSentence = sentence('Milan', 'Swann');
console.log(superImportantSentence);

//Let's build a function that take a complex type -- an array in this case, and console.logs each item in the input array.

let arr =[1, true, {key: 'string'}, [0, false, null], 'heya!'];
let arr2 = [5, 6, 7, 8, 9, 10];

function iteratorFunc(inputArr){
    for (let element of inputArr){
        console.log(element);
    }
}

iteratorFunc(arr);
iteratorFunc(arr2);