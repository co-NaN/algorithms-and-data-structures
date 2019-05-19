//naive solution, using string conversion
function reverseInt(n) {
    let negative = false;
    if (Math.sign(n) === -1) {
        n = n * -1;
        negative = true;
    }
    let digits = n.toString().split('');
    let reversed = '';
    for (let digit of digits) {
        reversed = digit + reversed;
    }
    return negative ? -1 * parseInt(reversed) : parseInt(reversed);
}