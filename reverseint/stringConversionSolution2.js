//naive solution no. 2, somewhat more concise
function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');
    return Math.sign(n) * parseInt(reversed);
}