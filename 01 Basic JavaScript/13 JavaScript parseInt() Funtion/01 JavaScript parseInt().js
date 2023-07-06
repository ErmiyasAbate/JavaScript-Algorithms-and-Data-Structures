/*
    The parseInt() function parses a string and returns an integer.
        const a = parseInt("007");

    The above function converts the string 007 to the integer 7. 
    If the first character in the string can't be converted into a number, then it returns NaN.
*/

function convertToInteger(str) {
    return parseInt(str);
}

console.log(convertToInteger("007"))
console.log(convertToInteger("40 years"))
console.log(convertToInteger("   60   "))
console.log(convertToInteger("10.33"))
console.log(convertToInteger("He was 40"))