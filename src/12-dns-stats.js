/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const stats = {};

  for (let i = 0; i < domains.length; i++) {
    const domainLevels = domains[i].split('.').reverse();
    let dns = '';

    for (let j = 0; j < domainLevels.length; j++) {
      dns += `.${domainLevels[j]}`;

      if (dns in stats) {
        stats[dns]++;
      } else {
        stats[dns] = 1;
      }
    }
  }

  return stats;
}

module.exports = getDNSStats;
