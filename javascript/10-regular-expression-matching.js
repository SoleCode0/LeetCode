/*
>>> Given an input string s and a pattern p,
    implement regular expression matching with support for '.' and '*' where:

    '.' Matches any single character.​​​​
    '*' Matches zero or more of the preceding element.
    The matching should cover the entire input string (not partial).

>>> Example 1:
    Input: s = "aa", p = "a"
    Output: false
    Explanation: "a" does not match the entire string "aa".

>>> Example 2:
    Input: s = "aa", p = "a*"
    Output: true
    Explanation: '*' means zero or more of the preceding element, 'a'.
                    Therefore, by repeating 'a' once, it becomes "aa".

>>> Example 3:
    Input: s = "ab", p = ".*"
    Output: true
    Explanation: ".*" means "zero or more (*) of any character (.)".
*/

const isMatch = (str, pat) => { return recursiveIsMatch(0, 0, str, pat); }

const recursiveIsMatch = (i, j, str, pat) => {
    const stringLength = str.length;
    const patternLength = pat.length;

    // end of the pattern
    if (j == patternLength)
        // also at end of the string
        return i == stringLength;

    // If the current pattern character is followed by '*'
    if (j + 1 < patternLength && pat.charAt(j + 1) == '*') {
        // Assume 0 matches of the current pattern character,
        // move on to the next point in the pattern (after the asterisk)
        if (recursiveIsMatch(i, j + 2, str, pat)) return true;

        // Loop through the remaining characters,
        // so long as they match by character (or .)
        while (i < stringLength && (pat.charAt(j) == '.' || str.charAt(i) == pat.charAt(j)) ) {
            // Check the rest of the string (1 character forward),
            //against the next point in the pattern (after the asterisk)
            if (recursiveIsMatch(++i, j + 2, str, pat)) return true;
        }
    }
    // If the current pattern character is not a `*`, and matches the current string character
    else if (i < stringLength && (pat.charAt(j) == '.' || str.charAt(i) == pat.charAt(j)) ) {
        // Move onto the next character, and the next character of the pattern
        return recursiveIsMatch(i + 1, j + 1, str, pat);
    }

    return false;
}

let s,p;

s = "aa", p = "a"
console.log(isMatch(s,p))

s = "aa", p = "a*"
console.log(isMatch(s,p))

s = "ab", p = ".*"
console.log(isMatch(s,p))