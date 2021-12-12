/*
>>> The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to  display this pattern in a fixed font for better legibility)

    P   A   H   N
    A P L S I I G
    Y   I   R
    And then read line by line: "PAHNAPLSIIGYIR"

    Write the code that will take a string and make this conversion given a number of rows:
    >>> string convert(string s, int numRows);
 
>>> Example 1:
    Input: s = "PAYPALISHIRING", numRows = 3
    Output: "PAHNAPLSIIGYIR"

>>> Example 2:
    Input: s = "PAYPALISHIRING", numRows = 4
    Output: "PINALSIGYAHRPI"
    Explanation:
    P     I    N
    A   L S  I G
    Y A   H R
    P     I

>>> Example 3:
    Input: s = "A", numRows = 1
    Output: "A"
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
    if (s.length <= numRows || numRows < 2) return s;

    let num = 2 * (numRows - 1), result = Array(numRows).fill(''), temp = 0;

    for (let i = 0; i < s.length; i++) {
        temp = i % num
        if (temp < numRows)
            result[temp] += s[i]
        else
            result[num - temp] += s[i]
    }
    return(result.join(''))
};
let s, numRows;

s = "PAYPALISHIRING", numRows = 3
console.log(convert(s, numRows))

s = "PAYPALISHIRING", numRows = 4
console.log(convert(s, numRows))

s = "A", numRows = 1;
console.log(convert(s, numRows))