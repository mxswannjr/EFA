/*
Comparison Operators
*/

//Equality Comparison Operator -- dictates whether two values/two contents are the same. Uses two ='s.
console.log('3' == 3); // true
console.log(4 == 4); //true
console.log(3 == '4'); //false

//Strict Equality Comparison Operator -- similar to equality comparison operator, but to be equal, it has to be the exact same. Uses three ='s.
console.log(3 === 3); //true
console.log('3' === 3); //false, a number is not a string

//Not Equal Comparison Operator -- Doesn't look for sameness. It looks for differentiation. Uses '!='. Does not care about type, only value.
console.log('3' != 4); // true, 3 and 4 are both different values 
console.log('3' != 3); //false, '3' & 3 are the same

//Strict Not Equal -- Similar to Not Equal Comparison, but also examines the type as well as the value.
console.log('3' !== 3); //true
console.log(3 !== 3); //false, there is no difference in either value or type.

//Greater Than 
console.log(3 > 2); //true
console.log(2 > 3); //false, wrong operand

//Less Than
console.log(2 < 3); //true
console.log(3 < 2); //false, wrong operand

//Greater than or Equal To
console.log(3 >= 2); // true
console.log(3 >= 3); // true
console.log(3 >= 4); // false

//Less than or Equal To
console.log(2 <= 3); //true
console.log(3 <= 2); //false

//And (both expressions on either side of the operator must be true 'And' to return true)
console.log(1<2 && 3>0); //true, all expressions are true
console.log(2<1 && 3>0); //false, both expressions are not resulting in true

//Or (either expression on one side of the operator must be true for 'Or' to return true)
console.log(1<2 || 3<0); //true, only one has to be true for the full expression to become true.
console.log(2<1 || 3<0); //false, neither expression is true therefore the whole OR operator results in false.

let obj = {key: 'test'}
console.log(obj == {key: 'test'}); //false, the object as a whole is not the same as its contents.
console.log(obj == obj); //true, object is the same as itself here.

//same principle applies to arrays. make sure they are the exact same thing.

let arr= [1,2,3,4];
console.log(arr == [1,2,3,4]); //false
console.log(arr == arr); //true