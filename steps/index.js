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

function steps(n) {
    let symbols = '#';
    let spaces = '';
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            spaces += ' ';
        }
        console.log(symbols + spaces);
        spaces = '';
        symbols += '#';
    }
}

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
