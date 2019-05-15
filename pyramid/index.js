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

// original solution
function pyramidIterative(n) {
    const mid = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';
        for (let col = 0; col <= 2 * n - 1; col++) {
            if (mid - row <= col && mid + row >= col) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

// initial recursive solution
function pyramidRecursive(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }

    // start a new row
    if (stair.length === n) {
        console.log(stair.slice(1).split('').reverse().join('') + stair);
        return pyramidRecursive(n, ++row, '');
    }

    // add to current row
    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }

    return pyramidRecursive(n, row, stair);
}

pyramidRecursive(4);

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
