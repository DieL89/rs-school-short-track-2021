/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strN = n.toString();
  const arrN = [];

  for (let i = 0; i < strN.length; i++) {
    arrN.push(+(strN.slice(0, i) + strN.slice(i + 1, strN.length + 1)));
  }

  return Math.max(...arrN);
}

module.exports = deleteDigit;
