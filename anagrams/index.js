// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let result = false;
    const string1 = prepend(stringA);
    const string2 = prepend(stringB);
    if (string1.length === string2.length) {
        const frequencies1 = toObjectWithFrequencies(string1);
        const frequencies2 = toObjectWithFrequencies(string2);
        result = haveSameFrequencies(frequencies1, frequencies2);
    }
    return result;
}

// removing spaces and punctuation then converting string to lower case
function prepend(str) {
    return str.replace(/[^\w]/g, "").toLowerCase();
}

// creates an object from a string which contains char frequencies
function toObjectWithFrequencies(str) {
    const frequencies = {};
    for (let char of str) {
        if (frequencies.hasOwnProperty(char)) {
            frequencies[char]++;
        } else {
            frequencies[char] = 1;
        }
    }
    return frequencies;
}

// checks if two objects containing character frequencies has the same values
function haveSameFrequencies(object1, object2) {
    for (let key in object1) {
        if (object2.hasOwnProperty(key)) {
            if (object2[key] !== object1[key]) {
                return false;
            }
        }
    }
    return true;
}

module.exports = anagrams;
