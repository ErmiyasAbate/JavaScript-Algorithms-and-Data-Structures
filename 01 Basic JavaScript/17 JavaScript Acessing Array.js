/* We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, 
except that instead of specifying a character, they are specifying 
an entry in the array. Like strings, arrays use zero-based indexing, 
so the first element in an array has an index of 0. */
let array = [50, 60, 70];
let firstIndex = array[0];
let lastIndex = array[array.length - 1];

console.log(array);
console.log(firstIndex);
console.log(lastIndex);