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