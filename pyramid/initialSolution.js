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