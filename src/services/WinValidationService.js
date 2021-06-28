'use strict';
/**
 * Check whether the last placed stone on the board is a winning position.
 *
 * @param {number} row The row id of last selected cell
 * @param {number} col The col id of last selected cell
 * @param {Array<Array<number>>} currentField  The current board of the game.
 * @return {number} whether the curreent player has won the game or not.
 */
function checkWin(row, col, currentField) {
  return (checkHorizontal(row, col, currentField) ||
        checkVertical(row, col, currentField) ||
        checkDiagonal(row, col, currentField));
}
exports.checkWin = checkWin;


/**
 * Check whether the last placed stone on the board is a winning position in
 * horizontal direction.
 *
 * @param {number} row The row id of last selected cell
 * @param {number} col The col id of last selected cell
 * @param {Array<Array<number>>} currentField  The current board of the game.
 * @return {number} whether the curreent player has won the game or not.
 */
function checkHorizontal(row, col, currentField) {
  // horizontal means the cols are increasing with each iteration, while the
  // row is constant.
  return check(row, col, currentField, (row, i)=>row, (col, i)=> col + i);
}
/**
 * Check whether the last placed stone on the board is a winning position.
 *
 * @param {number} row The row id of last selected cell
 * @param {number} col The col id of last selected cell
 * @param {Array<Array<number>>} currentField  The current board of the game.
 * @return {number} whether the curreent player has won the game or not.
 */
function checkVertical(row, col, currentField) {
  // vertical means the rows are increasing with each iteration, while the
  // col is constant.
  return check(row, col, currentField, (row, i)=>row+i, (col, i)=> col);
}

/**
 * Check whether the last placed stone on the board is a winning position.
 *
 * @param {number} row The row id of last selected cell
 * @param {number} col The col id of last selected cell
 * @param {Array<Array<number>>} currentField  The current board of the game.
 * @return {number} whether the curreent player has won the game or not.
 */
function checkDiagonal(row, col, currentField) {
  // horizontal means the cols and rows are increasing with each iteration.
  return check(row, col, currentField, (row, i)=>row+i, (col, i)=> col + i);
}

/**
 * Calculates the next field for a given iteration and start position.
 * @typedef {function(number, number): number} NextFieldCalculator
 */

/**
 * Generic implementation to check whether a direction contains 4 in a row.
 * The implementation takes the position of the last stone and checks to each
 * direction if there are 4 or more in a row considering that position. To
 * allow different directions (horizontal, vertical and diagonal) using the
 * same implementation the nextField (row and col combination) is calculated
 * by given functions.
 *
 * @param {number} row The row id of last selected cell
 * @param {number} col The col id of last selected cell
 * @param {Array<Array<number>>} currentField  The current board of the game.
 * @param {NextFieldCalculator} rowCalculation a function that returns the row
 *      of a given step and the initial value.
 * @param {NextFieldCalculator} colCalculation a function that returns the col
 *      of a given step and the initial value.
 * @return {number} whether the curreent player has won the game or not.
 */
function check(row, col, currentField, rowCalculation, colCalculation) {
  let numbers = 0;
  const currentValue = getValueOfField(currentField, row, col);
  for (let i = -3; i < 4; i++) {
    // search left for 4 winnings
    const fieldValue = getValueOfField(currentField,
        rowCalculation(row, i),
        colCalculation(col, i));
    if (fieldValue === currentValue) {
      numbers++;
    } else {
      numbers = 0;
    }
    if (numbers >= 4) {
      return true;
    }
  }
  return false;
}

/**
 * Returns the value on the field. Considers ArrayOutOfBound and returns
 * undefined in case the given row and col are not within the field.
 *
 * @param {Array<Array<number>>} currentField  The current board of the game.
 * @param {number} row the row of the cell to return.
 * @param {number} col the col of the cell to return.
 * @return {number} the value of the given cell or undefined,
 * when not within the field.
 */
function getValueOfField(currentField, row, col) {
  if (row < 0 ||
      col < 0 ||
      row >= currentField.length ||
      col >= currentField[row].length) {
    // ArrayOutOfBound
    return undefined;
  } else {
    return currentField[row][col];
  }
}

