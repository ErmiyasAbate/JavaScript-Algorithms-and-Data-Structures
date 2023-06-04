/*
    Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

    function phoneticLookup(val) {
        let result = "";

        switch(val) {
            case "alpha":
                result = "Adams";
                break;
            case "bravo":
                result = "Boston";
                break;
            case "charlie":
                result = "Chicago";
                break;
            case "delta":
                result = "Denver";
                break;
            case "echo":
                result = "Easy";
                break;
            case "foxtrot":
                result = "Frank";
        }

        return result;
    }
*/

phoneticLookup("charlie");

function phoneticLookup(val) {
    let result = "";

    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    result = lookup[val];

    return result;
}

console.log(phoneticLookup("charlie"));
console.log(phoneticLookup("delta"));
console.log(phoneticLookup("foxtrot"));
