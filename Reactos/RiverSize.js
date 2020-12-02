/* 
You are given a two-dimensional array (a matrix) of potentially unequal height and width that contains only values of 0 and 1. Each 0 represents land, and each 1 represents part of a river. A river consists of any number of 1s that are either horizontally or vertically adjacent, but not diagonally adjacent. The number of adjacent 1s forming a river determine it's size.

Write a function that returns an array of the sizes of all rivers represented in the input matrix. The sizes do not need to be in any particular order.

Examples
const matrix = [
  [1, 0, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 0, 1]
]

riverSizes(matrix) //should return [1, 1, 5]
*/

function riverSizes(matrix) {
  let sizes = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) sizes.push(visitRiver(matrix, i, j));
    }
  }
  return sizes;
}

function visitRiver(matrix, i, j) {
  if (
    i < 0 ||
    j < 0 ||
    i >= matrix.length ||
    j >= matrix[0].length ||
    matrix[i][j] === 0
  ) {
    return 0;
  } else {
    matrix[i][j] = 0;
    return (
      1 +
      visitRiver(matrix, i - 1, j) +
      visitRiver(matrix, i + 1, j) +
      visitRiver(matrix, i, j - 1) +
      visitRiver(matrix, i, j + 1)
    );
  }
}
