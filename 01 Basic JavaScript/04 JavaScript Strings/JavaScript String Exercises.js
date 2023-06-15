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
    return input.length === 0;
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

    for (let i = 0; i < num; i++) {
        new_text += input[i];
    }

    return new_text;
}

console.log(truncate_string("Robin Singh", 4));

//OR
function truncate_string_two(input, num) {
    if ((input.constructor === String) && (num > 0)) {
        return input.slice(0, num);
    }
}
console.log(truncate_string_two("Ermiyas Abate", 4));

/*
    Questions 5
       Write a JavaScript function to convert a string into abbreviated form.

       Test Data :
           console.log(abbrev_name("Robin Singh"));
           "Robin S."
*/
function abbrev_name(name) {
    let split_names = name.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
}

console.log(abbrev_name("Ermiyas Abate"));
console.log(abbrev_name("Robin Singh"));

/*
    Questions 6
       Write a JavaScript function that hides email addresses to prevent unauthorized access.

       Test Data :
           console.log(protect_email("robin_singh@example.com"));
           "robin...@example.com"
*/
function protect_email(name) {
    let split_email = name.trim().split("@");
    let new_email = split_email[0].trim().split("_");
    if (new_email.length > 1) {
        return (new_email[0] + new_email[1].charAt(0) + "...@" + split_email[1])
    }
    return new_email[0];
}
console.log(protect_email("robin_singh@example.com"));

//OR
function protect_email_two(name) {
    let avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(protect_email("robin_singh@example.com"));

/*
    Questions 7
       Write a JavaScript function to parameterize a string.

       Test Data :
            console.log(string_parameterize("Robin Singh from USA."));
            "robin-singh-from-usa"
*/
function string_parameterize(name){
    return name.toLowerCase().replace(/ /g, "_").replace(".", "");
}
console.log(string_parameterize("Robin Singh from USA."));

//OR
function string_parameterize_two(name){
    return name.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
}
console.log(string_parameterize("Robin Singh from USA."));