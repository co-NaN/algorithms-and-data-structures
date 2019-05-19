function vowels(str) {
    const vowels = str.match(/[aeiouAEIOU]/g);
    return vowels === null ? 0 : vowels.length;
}