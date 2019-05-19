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