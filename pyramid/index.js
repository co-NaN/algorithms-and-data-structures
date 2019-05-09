// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// initial, very convoluted solution
function pyramid(n) {
    let spaces = '';
    let pounds = '#';
    let row = '';
    let rowLength = n + (n - 1);
    let lo = Math.floor(rowLength / 2);
    let hi = lo;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < rowLength; j++) {
            if (j === lo) {
                row += spaces + pounds;
                spaces = '';
                j = hi;
            } else {
                spaces += ' ';
            }
        }
        row += spaces;
        console.log(row);
        row = '';
        pounds += '##';
        spaces = '';
        ++hi;
        --lo;
    }
}

module.exports = pyramid;
