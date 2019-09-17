'use strict';

const findRepeatedWord = require('../repeated-word.js');

describe('#findRepeatedWord', () => {

  test('Example cases pass as expected', () => {
    const example1 = 'Once upon a time, there was a brave princess who...';
    const example2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    const example3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

    expect(findRepeatedWord(example1)).toEqual('a');
    expect(findRepeatedWord(example2)).toEqual('it');
    expect(findRepeatedWord(example3)).toEqual('summer');
  });

  test('An empty string returns null', () => {
    expect(findRepeatedWord('')).toBeNull();
  });

  test('An string with no duplicate words returns null', () => {
    expect(findRepeatedWord('This sentence has no repeated words.')).toBeNull();
  });

  test('Words touching punctuation should be correctly matched', () => {
    expect(findRepeatedWord('Capture words, even when words are surrounded by punctuation.')).toEqual('words');
    expect(findRepeatedWord('Quoted "words" are still words to be matched.')).toEqual('words');
  });

  test('Duplicated words are correctly matched regardless of capitalization.', () => {
    expect(findRepeatedWord('Words are words despite capitalization.')).toEqual('words');
    expect(findRepeatedWord('Words should match WORDS.')).toEqual('words');
  });

});
