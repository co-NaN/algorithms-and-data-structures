// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function stepsRecursive(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }
    if (stair.length === n) {
        console.log(stair);
        return steps(n, ++row);
    }
    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }

    stepsRecursive(n, row, stair);
}

function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';
        for (let col = 0; col < n; col++) {
            if (col <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
}

function steps3(n) {
    let pounds = '#';
    let spaces = '';
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            spaces += ' ';
        }
        console.log(pounds + spaces);
        spaces = '';
        pounds += '#';
    }
}

// initial, very slow solution
function steps2(n) {
    let spaces = '';
    let symbols = '';

    for (let i = 0; i < n; i++) {
        spaces += ' ';
        symbols += '#';
    }

    for (let i = 0; i < n; i++) {
        console.log(symbols.slice(0, i + 1) + spaces.slice(i + 1));
    }
}

steps(4);

module.exports = steps;
