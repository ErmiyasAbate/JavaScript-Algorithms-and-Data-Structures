/*
    The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
*/

const ourStorage = {
    "desk": {
        "drawer": "Stapier"
    },
    "cabinet": {
        "top drawer": {
            "folder 1": "A file",
            "folder 2": "secret"
        }
    },
    "bottom drawer": "soda"
};

console.log(ourStorage.cabinet["top drawer"]["folder 1"])
console.log(ourStorage.desk.drawer);