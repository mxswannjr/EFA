/*
Literals

*/

let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekdays.toString());
//Remember that arrays are ordered, starting with 0.
console.log(weekdays[2]);

let soup = {
    a: 'chicken noodle', // key = a, value = chicken noodle.
    b: 'tomato',
    c: 'beef and barley'
};

console.log(soup.c);

//Array and object literals can hold primitive and 'complex' types (arrays, objects, functions).

let complexArrLiteral = [1, true, 'Academy', [1,2,3], {key: 'test'}, function(){return 'yes'}];

console.log(complexArrLiteral[5]);
console.log(complexArrLiteral[3]);

let complexObjLiteral = {num: 1, Boolean: true, string: 'Academy', arr: [1,2,3], obj: {key: 'test'},func: function(){return 'yes'}};

console.log(complexObjLiteral.func);
console.log(complexObjLiteral.arr);

