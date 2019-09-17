'use strict';

/**
 * Returns the first repeated words in the input string, if any.
 * @param {string} input - The input string
 * @returns {string|null} The first repeated word, or null if there are no repeats
 */
const findRepeatedWord = input => {
  if (!input) return null;

  const wordsSeen = new Set();

  // Strip any surrounding punctuation
  const strippedInput = input.replace(/\W*$/, '').replace(/^\W*/, '');
  const words = strippedInput.split(/\W*\s+\W*/);

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (wordsSeen.has(word)) {
      return word;
    }
    wordsSeen.add(word);
  }

  // No duplicate words found
  return null;
};

module.exports = findRepeatedWord;
