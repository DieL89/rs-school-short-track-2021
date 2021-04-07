/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arrStr = str.slice('');
  let encodedLine = '';
  let repeats = 1;

  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === arrStr[i + 1]) {
      repeats++;
    } else if (repeats > 1) {
      encodedLine += repeats + arrStr[i];
      repeats = 1;
    } else {
      encodedLine += arrStr[i];
    }
  }

  return encodedLine;
}

module.exports = encodeLine;
