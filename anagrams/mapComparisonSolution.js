// map comparison solution
function anagrams(stringA, stringB) {
    let result = false;
    const prependedString1 = prepend(stringA);
    const prependedString2 = prepend(stringB);
    if (prependedString1.length === prependedString2.length) {
        const charFrequencies1 = toObjectWithFrequencies(prependedString1);
        const charFrequencies2 = toObjectWithFrequencies(prependedString2);
        result = haveSameFrequencies(charFrequencies1, charFrequencies2);
    }
    return result;
}

// removing spaces and punctuation then converting string to lower case
function prepend(str) {
    return str.replace(/[^\w]/g, "").toLowerCase();
}

// creates an object from a string which contains char frequencies
function toObjectWithFrequencies(str) {
    const charFrequencies = {};
    for (let char of str) {
        charFrequencies[char] = charFrequencies[char]++ || 1;
    }
    return charFrequencies;
}

// checks if two objects containing character frequencies has the same values
function haveSameFrequencies(charFrequencies1, charFrequencies2) {
    for (let char in charFrequencies1) {
        if (charFrequencies2[char] !== charFrequencies1[char]) {
            return false;
        }
    }
    return true;
}