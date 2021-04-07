/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let firstPos = 0;
  let lastPos = array.length - 1;
  let middlePos = Math.floor((firstPos + lastPos) / 2);

  while (array[middlePos] !== value) {
    if (array[middlePos] > value) {
      lastPos = middlePos - 1;
    } else {
      firstPos = middlePos + 1;
    }

    middlePos = Math.floor((firstPos + lastPos) / 2);
  }

  return middlePos;
}

module.exports = findIndex;
