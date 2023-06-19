/*
    The inequality operator (!=) is the opposite of the equality operator. It means not equal 
    and returns false where equality would return true and vice versa. 
    
    Like the equality operator, the inequality operator will convert data types of values while comparing.

    Examples
        1 !=  2    // true
        1 != "1"   // false
        1 != '1'   // false
        1 != true  // false
        0 != false // false

    Question:
        Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.
*/

function testNotEqual(val) {
    if (val != 99){
        return "Not Equal";
    }

    return "Equal";
}

console.log(testNotEqual(99))