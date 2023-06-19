/*
    The greater than operator (>) compares the values of two numbers. If the number to the left is 
    greater than the number to the right, it returns true. Otherwise, it returns false.

    Like the equality operator, the greater than operator will convert data types of values while comparing.

    Examples
        5   >  3  // true
        7   > '3' // true
        2   >  3  // false
        '1' >  9  // false

    Question
        Compares two numbers
*/

function compares(number1, number2) {
    if (number1 > number2) {
        return number1 + " is greater than " + number2;
    } else {
        return number1 + " is less than " + number2;
    }
}

console.log(compares(5, 3));
console.log(compares(7, '3'));
console.log(compares(2, 3));
console.log(compares('1', 9));

// Example 2

function testGreaterThan(val) {
    if(val > 100) {
        return "Over 100";
    }

    if (val > 10){
        return "Over 10";
    }

    return "10 or Under";
}

console.log(testGreaterThan(10));
console.log(testGreaterThan(110));
console.log(testGreaterThan(11));


// Greater than or Equal
function testGreaterThanOrEqual(val) {
    if(val >= 20){
        return "20 or Over";
    }

    if(val >= 10){
        return "10 or Over";
    }

    return "Less than 10"
}

console.log(testGreaterThanOrEqual(10));
console.log(testGreaterThanOrEqual(110));
console.log(testGreaterThanOrEqual(11));
console.log(testGreaterThanOrEqual(5));