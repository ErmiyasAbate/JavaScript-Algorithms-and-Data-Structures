/*
    Questions 1
        Write a JavaScript function to check whether an 'input' is a string or not.

        Test Data :
            console.log(is_string('w3resource'));
            true
            console.log(is_string([1, 2, 4, 0]));
            false
*/
function is_string(input) {
    return typeof input === 'string';
}

console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));

/*
    Questions 2
        Write a JavaScript function to check whether a string is blank or not.
        
        Test Data :
            console.log(is_Blank(''));
            console.log(is_Blank('abc'));
            true
            false
*/
function is_Blank(input) {
    if (input.length === 0) {
        return true;
    }
    return false;
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));

/*
    Questions 3
        Write a JavaScript function to split a string and convert it into an array of words.

        Test Data :
            console.log(string_to_array("Robin Singh"));
            ["Robin", "Singh"]
*/
function string_to_array(input) {
    return input.trim().split(" ");
}
console.log(string_to_array("Robin Singh"));
/*
    Questions 4
       Write a JavaScript function to extract a specified number of characters from a string.
       
       Test Data :
            console.log(truncate_string("Robin Singh",4));
            "Robi"
*/

function truncate_string(input, num) {
    let new_text = '';
    
    for(let i = 0; i < num; i++){
        new_text += input[i];
    }

    return new_text;
}

console.log(truncate_string("Robin Singh", 4));

//OR
function truncate_string_two(input, num) {
    if ((input.constructor === String) && (num > 0)){
        return input.slice(0, num);
    }
}
console.log(truncate_string_two("Ermiyas Abate", 4));