// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return reverse(str) === str;
}

function reverse(str) {
    return str === '' ? '' : reverse(str.substring(1)) + str.charAt(0);
}

// succint, but inefficient solution, because every() makes unnecessary comparisons
function palindrome2(str) {
    return str.split('').every((char, i) =>  {
        return char === str[str.length - i - 1];
    });
}

module.exports = palindrome;
