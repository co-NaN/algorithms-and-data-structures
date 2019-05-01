// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse1(str) {
    return str === '' ? '' : reverse(str.substring(1)) + str.charAt(0);
}

function reverse2(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function reverse3(str) {
    return str
        .split('')
        .reverse()
        .join('');
}

function reverse(str) {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

function reverse5(str) {
    return str.split('').reduce((reverse, char) => char + reverse, '');
}

function reverse6(str) {
    let reverse = '';
    for (let i = 0; i < str.length; i++) {
        reverse = str[i] + reverse;
    }
    return reverse;
}

module.exports = reverse;
