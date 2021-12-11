/*
>>> Task
    Given a string s, return the longest palindromic substring in s.

>>> Example 1:
    Input: s = "babad"
    Output: "bab"
    Note: "aba" is also a valid answer.

>>> Example 2:
    Input: s = "cbbd"
    Output: "bb"

>>> Example 3:
    Input: s = "a"
    Output: "a"

>>> Example 4:
    Input: s = "ac"
    Output: "a"
*/
/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = s => {
    let start = end = num = 0, len = s.length;
    for (let i = 0; i < len; i++) {
        num = Math.max(eac(s, i, i), eac(s, i, i + 1));
        if (num > end - start) {
            start = i - Math.floor((num - 1) / 2);
            end = i + Math.floor(num / 2);
        }
    }
    return s.slice(start, end + 1);
};

const eac = expandAroundCenter = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("ac"));
