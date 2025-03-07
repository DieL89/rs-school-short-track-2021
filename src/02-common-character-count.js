/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const arrS1 = s1.split('');
  let copyS2 = s2;

  for (let i = 0; i < arrS1.length; i++) {
    if (copyS2.indexOf(arrS1[i]) >= 0) {
      result++;
      copyS2 = copyS2.replace(arrS1[i], '');
    }
  }

  return result;
}

module.exports = getCommonCharacterCount;
