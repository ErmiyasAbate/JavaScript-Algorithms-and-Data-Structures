/* There are an operators which do both a mathematical operation and
assignments in one step. Remember that everything to the right of 
the equals sign is evaluated first. */
let a = 3;
let b = 17;
let c = 12;
let d = 20;

a += 12;
b -= 5;
c *= 2;
d /= 5;

console.log(a, b, c, d);