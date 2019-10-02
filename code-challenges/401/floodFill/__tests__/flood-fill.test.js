'use strict';

const floodFill = require('../flood-fill');

describe('#floodFill', () => {
  const example = {
    image: [[1, 1, 1], [1, 1, 0], [1, 0, 1]],
    sr: 1,
    sc: 1,
    newColor: 2,
  };

  const expectedFill = [[2, 2, 2], [2, 2, 0], [2, 0, 1]];

  test('the image will not be affected if inputs are undefined', () => {
    expect(floodFill(null, example.sr, example.sc, example.newColor)).toBeNull();
    expect(floodFill(example.image, null, example.sc, example.newColor)).toEqual(example.image);
    expect(floodFill(example.image, example.sr, null, example.newColor)).toEqual(example.image);
    expect(floodFill(example.image, example.sr, example.sc, null)).toEqual(example.image);
  });

  test('the image is not affected if the target pixel is already newColor', () => {
    const sameColor = example.image[example.sr][example.sc];
    expect(floodFill(example.image, example.sr, example.sc, sameColor)).toEqual(example.image);
  });

  test('successfully fill the example image', () => {
    expect(floodFill(example.image, example.sr, example.sc, example.newColor)).toEqual(expectedFill);
  });
});
