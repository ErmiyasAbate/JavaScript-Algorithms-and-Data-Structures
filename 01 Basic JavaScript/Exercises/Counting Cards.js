/*
    ------ Counting Cards --------
    In the casino game Blackjack, a player can determine whether they have an advantage on the next 
    hand over the house by keeping track of the relative number of high and low cards remaining in the deck. T
    his is called Card Counting.
    
    Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. 
    When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

        Count Change	        Cards
        +1                      2, 3, 4, 5, 6
        0                       7, 8, 9
        -1                      10, 'J', 'Q', 'K', 'A'

    You will write a card counting function. It will receive a card parameter, which can be a number or a string, and 
    increment or decrement the global count variable according to the card's value (see table). The function will then return 
    a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. 
    The current count and the player's decision (Bet or Hold) should be separated by a single space.
*/

let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
    // Only change code above this line
}

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));

/*
    Explanation:
        - Check the value of each card via a switch statement.
        - The variable count:
            ~ Increases by 1 if the card is a 2, 3, 4, 5, or 6.
            ~ Since 7, 8, and 9 aren’t worth anything, we ignore those cards in our switch statement.
            ~ Decreases by 1 if the card is a 10, ‘J’, ‘Q’, ‘K’, or ‘A’.
        - Check the value of count and return the appropriate response.
        
    Example Run
        - cc(2); runs.
        - The switch statement hits case 2, jumps down and adds 1 to the variable count.
        - The switch statement then hits the break and cc(3); runs.
        - This cycle continues until the final call is made, cc('A');.
        - After the switch statement, the if statement checks count, which is now 0.
        - This then drops down to the else statement, which will return 0 Hold.
*/