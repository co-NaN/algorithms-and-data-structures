// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// a slightly wonkier solution using checksum
function anagrams3(stringA, stringB) {
    const charValues = {};
    const string1 = prepend(stringA);
    const string2 = prepend(stringB);

    if (string1.length !== string2.length) {
        return false;
    }

    let start = 0;
    let string1Sum = 0;

    for (let char of  string1) {
        if (!charValues[char]) {
            charValues[char] = ++start;
            string1Sum += start;
        } else {
            string1Sum += charValues[char];
        }
    }

    let string2Sum = 0;
    for (let char of string2) {
        let value = charValues[char];
        if (value) {
            string2Sum += value;
        } else {
            return false;
        }
    }

    return string1Sum === string2Sum;
}

// sorting solution
function anagrams2(stringA, stringB) {
    const sorted1 = stringA.replace(/[^\w]/g, "").toLowerCase().split("").sort().join();
    const sorted2 = stringB.replace(/[^\w]/g, "").toLowerCase().split("").sort().join();
    return sorted1 === sorted2;
}

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

module.exports = anagrams;
