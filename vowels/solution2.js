function vowels(str) {
    str = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;

    for (let char of str) {
        for (let vowel of vowels) {
            if (char === vowel) {
                vowelCount++;
            }
        }
    }

    return vowelCount;
}