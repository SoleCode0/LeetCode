/*
>>> Write a function to find the longest common prefix string amongst an array of strings.
    If there is no common prefix, return an empty string "".

>>> Example 1:
    Input: strs = ["flower","flow","flight"]
    Output: "fl"

>>> Example 2:
    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
*/

const longestCommonPrefix = strs => {
    if (!strs.length) return '';
    // Loop through every letter of first word
    for (let i = 0; i <= strs[0].length; i++) {
        // for every input string
        // check for character at same pos
        if (!strs.every((string) => string[i] === strs[0][i])) {
            // if fails
            // return prefix
            return strs[0].slice(0, i);
        }
    }

    return strs[0];
};

let strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs))

strs = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs))