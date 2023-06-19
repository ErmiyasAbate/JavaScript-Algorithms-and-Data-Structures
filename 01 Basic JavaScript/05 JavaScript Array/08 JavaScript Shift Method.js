// .shift() works just like .pop(), except it removes the first element instead of the last. 
const myArr = [1, 2, 3, 4];
const oneDown = myArr.shift();

console.log(oneDown); // This will print 1
console.log(myArr); // This will print [2, 3, 4]

// Example 2
const myArray = [
    ["John", 23],
    ["Dog", 3]
];
const removedFromMyArray = myArray.shift();

console.log(removedFromMyArray); // This will print ["John", 23]
console.log(myArray); // This will print [["Dog", 3]]