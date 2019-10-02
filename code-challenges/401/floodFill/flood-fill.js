'use strict';

const Queue = require('../util/queue');

/**
 * Performs a "flood fill" on an image represented by a 2-D array.
 *
 * @param {Array<Array>} image - The image
 * @param sr - The starting pixel's row index
 * @param sc - The starting pixel's column index
 * @param newColor - The color to flood fill
 */
const floodFill = (image, sr, sc, newColor) => {
  if (!image || !sr || !sc || !newColor) {
    return image;
  }
  // Can also validate input type, and correct range

  const targetColor = image[sr][sc];
  if (newColor === targetColor) {
    return image;
  }

  const newImage = [...image];

  const queue = new Queue();
  queue.enqueue([sr, sc]);

  while(!queue.isEmpty()) {
    const [r, c] = queue.dequeue();
    newImage[r][c] = newColor;

    getTangentPixels(r, c).forEach(pixel => {
      const [row, col] = pixel;
      if (isInBounds(image, row, col) && image[row][col] === targetColor) {
        queue.enqueue([row, col]);
      }
    });
  }

  return newImage;
};

/**
 * Takes a row and column and returns an array of the four tangent coordinate
 * pairs, regardless of context and bound.
 *
 * @param row
 * @param col
 * @returns {Array<Array>}
 */
const getTangentPixels = (row, col) => {
  return [
    [row - 1, col],
    [row + 1, col],
    [row, col - 1],
    [row, col + 1],
  ];
};

/**
 * Returns true if the given pixel coordinates are within the bounds of the image.
 *
 * @param image
 * @param row
 * @param col
 * @returns {boolean}
 */
const isInBounds = (image, row, col) => {
  return (
    0 <= row
    && row < image.length
    && 0 <= col
    && col < image[0].length
  );
};

module.exports = floodFill;
