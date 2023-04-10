/* .pop() is used to pop a value off the end of an array and we can also
store the popped off value by assigning it to a variable.

In other words, .pop() removes the last element from an array 
and returns that element. */

const threeArr = [1, 2, 3];
const oneDown = threeArr.pop();

console.log(threeArr); // This  will display the value [1, 2]
console.log(oneDown); // This will display the value 3