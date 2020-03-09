const spiralMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const expectedOutput = [1, 2, 3, 6, 9, 8, 7, 4, 5];

function spiralOrder(matrix) {
  let res = [];

  // If matrix is empty array
  if (matrix.length < 0) {
    return res;
  }

  let rowStart = 0;
  let rowEnds = matrix.length - 1;

  let columnStart = 0;
  let columnEnds = matrix[0].length - 1;

  while (rowStart <= rowEnds && columnStart <= columnEnds) {
    // Traversing the first row
    for (let j = columnStart; j <= columnEnds; j++) {
      res = matrix[rowStart][j];
    }
    columnStart++;

    // for (let i = rowStart; i < rowEnds; i++) {
    //   res.push(matrix[i][rowEnds]);
    // }
  }

  return res;
}

console.log(spiralOrder(spiralMatrix));
