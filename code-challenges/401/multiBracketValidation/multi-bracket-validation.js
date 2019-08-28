'use strict';

const { Stack } = require("../stacksAndQueues/stacks-and-queues");
/**
 * Validates a string of brackets.
 * @param {string} input - The input string
 * @returns {boolean} - Returns true if the input string is valid
 */
const multiBracketValidation = input => {
  const stack = new Stack();

  for (let i = 0; i < input.length; i++) {
    const character = input[i];

    if (character === '(' || character === '[' || character === '{') {
      stack.push(character);
    } else if (character === ')' || character === ']' || character === '}') {
      const match = stack.pop();
      if (bracketMap[match] !== character) {
        return false;
      }
    }
  }

  if (!stack.isEmpty()) {
    return false;
  }

  return true;
};

const bracketMap = {
  '(': ')',
  '[': ']',
  '{': '}'
};

module.exports = multiBracketValidation;
