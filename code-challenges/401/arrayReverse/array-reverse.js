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

const testArrays = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4],
  [1, 2],
  [1],
  [],
  null,
  undefined,
  [89, 2354, 3546, 23, 10, -923, 823, -12]
];

testArrays.forEach(inputArray => {
  console.log(inputArray);
  console.log('-->', reverseArray(inputArray));
});
