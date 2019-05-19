function vowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;

    for (let char of str.toLowerCase()) {
        for (let vowel of vowels) {
            if (char === vowel) {
                vowelCount++;
            }
        }
    }

    return vowelCount;
}