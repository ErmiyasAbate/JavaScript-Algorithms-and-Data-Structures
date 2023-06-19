/*
    The less than operator (<) compares the values of two numbers. If the number to the left is less than 
    the number to the right, it returns true. Otherwise, it returns false. 
    
    Like the equality operator, the less than operator converts data types while comparing.

    Examples
        2   < 5 // true
        '3' < 7 // true
        5   < 5 // false
        3   < 2 // false
        '8' < 4 // false

    Question
        Compares two numbers
*/

function compares(number1, number2) {
    if (number1 < number2) {
        return number1 + " is less than " + number2;
    } else {
        return number1 + " is greater than " + number2;
    }
}

console.log(compares(5, 3));
console.log(compares(7, '3'));
console.log(compares(2, 3));
console.log(compares('1', 9));

// Example 2

function testLessThan(val) {
    if(val < 25) {
        return "Under 25";
    }

    if (val < 55){
        return "Under 55";
    }

    return "55 or Over";
}

console.log(testLessThan(10));
console.log(testLessThan(110));
console.log(testLessThan(11));
console.log(testLessThan(30));


// Less than or Equal
function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }

console.log(testLessOrEqual(10));
console.log(testLessOrEqual(110));
console.log(testLessOrEqual(11));
console.log(testLessOrEqual(5));
