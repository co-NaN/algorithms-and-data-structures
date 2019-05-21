// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];
    for (let i = 0; i < n; i++) {
        results.push([]);
    }
    let num = 1;
    let startCol = 0, startRow = 0;
    let endCol = n - 1, endRow = n - 1;

    while (startCol <= endCol && startRow <= endRow) {
        // create top row
        for (let col = startCol; col <= endCol; col++) {
            results[startRow][col] = num++;
        }
        startRow++;
        // create right side (column)
        for (let row = startRow; row <= endRow; row++) {
            results[row][endCol] = num++;
        }
        endCol--;
        // create bottom row
        for (let col = endCol; col >= startCol; col--) {
            results[endRow][col] = num++;
        }
        endRow--;
        // create left side (column)
        for (let row = endRow; row >= startRow; row--) {
            results[row][startCol] = num++;
        }
        startCol++;
    }
    return results;
}