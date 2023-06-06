/*
    Weu can run the same code multiple times by using a loop.
    
    This runs while a specified condition is true and stops once that condition is no longer true.
*/

let ourArrays = [];
let i = 0;

while (i < 5) {
    ourArrays.push(i);
    i++;
}

console.log("Array: " + ourArrays);

/*
    Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
*/
let ourArraysTwo = [];
let j = 5;

while (j >= 0) {
    ourArraysTwo.push(j);
    j--;
}

console.log("Array: " + ourArraysTwo);