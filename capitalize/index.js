// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize3(str) {
    const words = str.split(' ');
    let capitalizedString = '';
    for (let word of words) {
        let uppercaseFirstLetter = word.charAt(0).toUpperCase();
        capitalizedString += uppercaseFirstLetter + word.slice(1);
        if (word !== words[words.length - 1]) {
            capitalizedString += ' ';
        }
    }
    return capitalizedString;
}

function capitalize2(str) {
    const capitalizedWords = [];
    for (let word of str.split(' ')) {
        capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
    }
    return capitalizedWords.join(' ');
}

function capitalize(str) {
    let capitalized = str.charAt(0).toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str.charAt(i - 1) === ' ') {
            capitalized += str.charAt(i).toUpperCase();
        } else {
            capitalized += str.charAt(i);
        }
    }
    return capitalized;
}

module.exports = capitalize;
