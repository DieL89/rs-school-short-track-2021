/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const minefield = [];

  for (let i = 0; i < matrix.length; i++) {
    const minefieldRow = [];

    for (let j = 0; j < matrix[i].length; j++) {
      let mines = 0;

      if (i !== 0 && j !== 0 && matrix[i - 1][j - 1] === true) mines++;
      if (i !== 0 && matrix[i - 1][j] === true) mines++;
      if (i !== 0 && j !== (matrix[i].length - 1) && matrix[i - 1][j + 1] === true) mines++;
      if (j !== 0 && matrix[i][j - 1] === true) mines++;
      if (j !== (matrix[i].length - 1) && matrix[i][j + 1] === true) mines++;
      if (i !== (matrix.length - 1) && j !== 0 && matrix[i + 1][j - 1] === true) mines++;
      if (i !== (matrix.length - 1) && matrix[i + 1][j] === true) mines++;
      if (i !== (matrix.length - 1)
          && j !== (matrix[i].length - 1)
          && matrix[i + 1][j + 1] === true) {
        mines++;
      }

      minefieldRow.push(mines);
    }

    minefield.push(minefieldRow);
  }

  return minefield;
}

module.exports = minesweeper;
