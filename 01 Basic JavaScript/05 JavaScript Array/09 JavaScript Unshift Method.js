/* Unshift() works exactly like push(), but instead of adding the new element
at the end of the array, unshift() adds the new element at the end of the array. */
const array = [1, 2, 3, 4];
const array2 = [10, 20, 30, 40];

// We can append a single element
array.unshift(5);
console.log(array); // This will print [ 5, 1, 2, 3, 4 ]

// We can append multiple elements
array.unshift(6, 7);
console.log(array);// This will print [ 6, 7, 5, 1, 2, 3, 4 ]

// We can append a variable
array.unshift(array2);
console.log(array); // This will print [ [ 10, 20, 30, 40 ], 6, 7, 5, 1, 2, 3, 4]

// We can append different data types
array.unshift("a", "b", 5.6)
console.log(array); // This will print [ 'a', 'b', 5.6, [ 10, 20, 30, 40 ], 6, 7, 5, 1, 2, 3, 4 ]

// We can append another array
array.unshift([50, 60], [70, 80]);
console.log(array);

// And finally result will be [ [ 50, 60 ], [ 70, 80 ], 'a', 'b', 5.6, [ 10, 20, 30, 40 ], 6, 7, 5, 1, 2, 3, 4 ]