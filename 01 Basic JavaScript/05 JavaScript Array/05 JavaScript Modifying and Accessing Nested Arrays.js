/* One way to think of a multi-dimensional array, is as an array of arrays. 
When we use brackets to access our array, the first set of brackets refers to 
the entries in the outermost (the first level) array, and each additional pair of brackets refers 
to the next level of entries inside. */

// Accessing Multi-dimensional arrays
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];

console.log(arr[1][1]);
console.log(arr[3][0]);
console.log(arr[3][0][2]);

// OR
const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];

console.log(subarray);
console.log(nestedSubarray);
console.log(element);

// Modifying Multi-dimensional arrays
arr[1][1] = 55;
arr[3][2] = 1441;
arr[3][0][2] = 1221;
console.log(arr);