function capitalize(str) {
    const capitalizedWords = [];
    for (let word of str.split(' ')) {
        capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
    }
    return capitalizedWords.join(' ');
}