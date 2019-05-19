function steps(n, row = 0, stair = '') {
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

    steps(n, row, stair);
}