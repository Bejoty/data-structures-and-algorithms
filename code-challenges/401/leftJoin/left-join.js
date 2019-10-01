'use strict';

/**
 * This function takes two hashmaps with keys in the same domain, and returns the
 * left join of the maps (mapA being the left map).
 * @param mapA
 * @param mapB
 * @returns {[]} A two dimensional array representing the left join, with each
 * entry containing the common key, left value, and right value.
 */
const leftJoin = (mapA, mapB) => {
  const join = [];
  if (!mapA || !mapB) {
    return join;
  }

  mapA.forEach((value, key) => {
    const entry = [];
    entry[0] = key;
    entry[1] = value;
    entry[2] = mapB.get(key);
    join.push(entry);
  });

  return join;
};

module.exports = leftJoin;
