/* .pop() is used to pop a value off the end of an array and we can also
store the popped off value by assigning it to a variable.

In other words, .pop() removes the last element from an array 
and returns that element. */

const threeArr = [1, 2, 3];
const oneDown = threeArr.pop();

console.log(threeArr); // This  will display the value [1, 2]
console.log(oneDown); // This will display the value 3

// Example 2
const myArray = [
    ["John", 23],
    ["Cat", 2]
];
const removedFromMyArray = myArray.pop();
console.log(removedFromMyArray); // This will display the value ["Cat", 2]
console.log(myArray); // This will display the value [["John", 23]]