//Bronze 
/* Create a for loop  that runs until it has reached the end of the alphabet array, and prints each letter to the console.*/ 

let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


// //i = start variable; stop.variable; step parameter
// for (let i = 0; i < alphabet.length; i++) {
//     console.log(alphabet[i]); //access alphabet array by index of i.
// }

//Silver

/* Write a conditional nested inside of a for loop that checks if the index of each character in the alphabet array is even or odd. If the index is even, console log letter. If index is odd, console.log 'index is an odd number' */

for (letter in alphabet) {
    if (letter % 2 === 0) {
        console.log(`The letter is ${alphabet[letter]}`)
        
    } else {
        console.log(`Index is an odd number`);
    };
} 


let myNums = [1, 2, 3, 4, 5, 6];

for (num in myNums) {
    console.log(myNums[num])
}