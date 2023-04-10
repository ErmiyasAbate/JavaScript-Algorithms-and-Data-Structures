/* Unlike JavaScript Strings, the entries of an array are mutable
and can be changed freely. (Even the array itself is declared as const.) */
const myArray = [18, 64, 99];
myArray[0] = 15;
console.log(myArray);
// Now myArray has the value [15, 64, 99]