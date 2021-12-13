/*
>>> Given a signed 32-bit integer x, return x with its digits reversed.
    If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

    Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

>>> Example 1:
    Input: x = 123
    Output: 321

>>> Example 2:
    Input: x = -123
    Output: -321

>>> Example 3:
    Input: x = 120
    Output: 21

>>> Example 4:
    Input: x = 0
    Output: 0
*/

/**
 * @param {number} x
 * @return {number}
 */

const reverse = x => {
    let max = 2147483647,
        min = - max - 1,
        result = 0;

    while (x !== 0) {
        result = (result * 10) + (x % 10)
        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10); // decrement x
        if (result > max || result < min) return 0;
    }
    
    return result;
};

let x;

x = 123
console.log(reverse(x))

x = -123
console.log(reverse(x))

x = 120
console.log(reverse(x))

x = 0
console.log(reverse(x))