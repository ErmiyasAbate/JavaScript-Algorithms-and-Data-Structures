/* One of the problem with var keyword arguments is that 
it is easily overwrite the variable declaration.*/
// var camper = "James";
// var camper = "David";
// console.log(camper);
// The output shows "David" because "James" is overwritten.

/* But the keyword called "let" is a major update to JavaScript,
and it solves the potential issue with the var keyword */
let camper = "James";
let camper = "David";
console.log(camper);
// The result is error messages.