/**
 * @param {Array<*>} full
 * @returns {function(Array<*>): boolean}
 */
export const isSubsetOf = full => subset =>
  subset.every(item => full.includes(item));
