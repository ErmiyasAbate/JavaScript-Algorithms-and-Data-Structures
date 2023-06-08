/* In JavaScript there are many characters that can be escaped
inside a string. This is due to the use of characters we may not
otherwise be able to type out. (Such as new lines) and the other reason
is to represent multiple quote in a single string without
Javascript misinterpreting. */
console.log("My name is \"Ermiyas Abate\""); // Double quote
console.log("My name is \'Ermiyas Abate\'"); // Single quote
console.log("My name is \\Ermiyas Abate\\"); // Backlash
console.log("My name is \nErmiyas\nAbate"); // New line
console.log("My name is \t\tErmiyas\t\tAbate"); // Tab
console.log("My name is \rErmiyas\rAbate"); // Carriage Return
console.log("My name is \bErmiyas\bAbate"); // Word Boundary
console.log("My name is \fErmiyas\fAbate"); // Form Feed