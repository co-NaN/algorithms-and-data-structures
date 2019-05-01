// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function splitToDigits(num) {
    num = Math.abs(num);
    let digits = [];
    while (Math.floor(num) / 10 > 0) {
        let digit = Math.floor(num % 10);
        digits.unshift(digit);
        num = num / 10;
    }
    return digits;
}

function reverseInt(num) {
    let digits = splitToDigits(num);
    let reversed = digits[digits.length - 1];
    for (let i = digits.length - 1; i > 0; i--) {
        reversed = (reversed * 10) + digits[i - 1];
    }
    return reversed;
}

module.exports = reverseInt;
