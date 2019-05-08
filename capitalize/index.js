// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
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

console.log(capitalize('hi there, how is it going?'));

module.exports = capitalize;
