/* An easy way to append data to the end of an array is via the push method.
push() takes an one or more parameters and "pushes" them onto the end of the array.)*/
const array = [1, 2, 3, 4];
const array2 = [10, 20, 30, 40];

// We can append a single element
array.push(5);
console.log(array);

// We can append multiple elements
array.push(6, 7);
console.log(array);

// We can append a variable
array.push(array2);
console.log(array);

// We can append different data types
array.push("a", "b", 5.6)
console.log(array);

// We can append another array
array.push([50, 60], [70, 80]);
console.log(array);

// The final result will be [1, 2, 3, 4, 5, 6, 7, [ 10, 20, 30, 40 ], 'a', 'b', 5.6, [ 50, 60 ], [ 70, 80 ]]