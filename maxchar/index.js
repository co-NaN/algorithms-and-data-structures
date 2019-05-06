// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let frequencies = {};
    let max = 1;
    let maxChar = str.charAt(0);
    for (let char of str) {
        if (frequencies.hasOwnProperty(char)) {
            frequencies[char]++;
            if (frequencies[char] > max) {
                max = frequencies[char];
                maxChar = char;
            }
        } else {
            frequencies[char] = 1;
        }
    }
    return maxChar;
}

module.exports = maxChar;
