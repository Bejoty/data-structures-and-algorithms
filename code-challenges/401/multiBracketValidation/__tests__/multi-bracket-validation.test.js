'use strict';

const { Stack } = require('../../stacksAndQueues/stacks-and-queues');

const multiBracketValidation = require('../multi-bracket-validation');

let stack;

beforeEach(() => {
  stack = new Stack();
});

describe('#multiBracketValidation', () => {

  it('validates an empty string as true', () => {
    expect(multiBracketValidation('')).toBeTruthy();
  });

  it('validates a string without brackets as true', () => {
    expect(multiBracketValidation('BANANANA')).toBeTruthy();
  });

  it('validates a single pair of brackets as true', () => {
    expect(multiBracketValidation('()')).toBeTruthy();
    expect(multiBracketValidation('[]')).toBeTruthy();
    expect(multiBracketValidation('{}')).toBeTruthy();
  });

  it('validates multiple pairs of brackets as true', () => {
    expect(multiBracketValidation('()[]{}')).toBeTruthy();
  });

  it('validates a single bracket as false', () => {
    expect(multiBracketValidation('(')).toBeFalsy();
    expect(multiBracketValidation('[')).toBeFalsy();
    expect(multiBracketValidation('{')).toBeFalsy();
  });

  it('validates a pair of incorrectly ordered brackets as false', () => {
    expect(multiBracketValidation(')(')).toBeFalsy();
    expect(multiBracketValidation('][')).toBeFalsy();
    expect(multiBracketValidation('}{')).toBeFalsy();
  });

  it('correctly validates nested brackets', () => {
    expect(multiBracketValidation('{[()]}')).toBeTruthy();
    expect(multiBracketValidation('[(){[]}()]')).toBeTruthy();
    expect(multiBracketValidation('([)]')).toBeFalsy();
  });

});
