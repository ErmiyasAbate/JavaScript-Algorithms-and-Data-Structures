/*
    Recursion is a process of calling itself. A function that calls itself is called a recursive function.

    The syntax for recursive function is:

        function recurse() {
            // function code
            recurse();
            // function code
        }

        recurse();

    A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.
    
    So, it generally looks like this.

        function recurse() {
            if(condition) {
                recurse();
            }
            else {
                // stop calling recurse()
            }
        }

        recurse();

    Example:
        A simple example of a recursive function would be to count down the value to 1.
*/

function countDown(num) {
    console.log(num);

    const newNumber = num - 1;

    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(6);