/* Bracket notation is a way to get a character at a specific 
index within a string. Most modern programming languages, like 
JavaScript, don't start counting at 1 like humans do. They start at 0. 
This is referred to as Zero-based indexing. */
let firstName = "Ermiyas";
console.log(firstName);
console.log(firstName[0]);
console.log(firstName[1]);
console.log(firstName[2]);

/* In order to get the last letter of the string, we can subtract
one from the string's length */
console.log(firstName[firstName.length - 1]);

/* We can also use the same principle we just used to retrieve the 
the last character in a string to retrieve the Nth to 
the last character. */
console.log(firstName[firstName.length - 2]);
console.log(firstName[firstName.length - 3]);