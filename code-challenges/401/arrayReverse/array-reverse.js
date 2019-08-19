'use strict';

/**
 * Reverses an array.
 * @param {any} array
 * @returns {any} If input is an array of at least two elements, the reversed array. Else, returns the input.
 */
const reverseArray = array => {
  if (!Array.isArray(array) || array === undefined || array === null) {
    return array;
  }

  for (let i = 0; i < array.length / 2; i++) {
    let tmp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = tmp;
  }

  // Redundant return; original array is also modified
  return array;
};

module.exports = reverseArray;
