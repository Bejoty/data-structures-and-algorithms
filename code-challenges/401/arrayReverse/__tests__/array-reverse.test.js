'use strict';

const reverseArray = require('../array-reverse');

describe('#array-reverse.js', () => {
  test('normal cases', () => {
    expect(reverseArray([1, 2])).toEqual([2, 1]);
    expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    expect(reverseArray([1, -2, 3, -4, 5])).toEqual([5, -4, 3, -2, 1]);
    expect(reverseArray([89, 2354, 3546, 23, 10, -923, 823, -12]))
      .toEqual([-12, 823, -923, 10, 23, 3546, 2354, 89]);
  });

  test('single element array', () => {
    expect(reverseArray([1])).toEqual([1]);
  });

  test('zero element array', () => {
    expect(reverseArray([])).toEqual([]);
  });

  test('null and undefined return the same', () => {
    expect(reverseArray(null)).toEqual(null);
    expect(reverseArray(undefined)).toEqual(undefined);
  });
});
