'use strict';

const leftJoin = require('../left-join');

describe('#leftJoin', () => {
  test('returns an empty array if either input is undefined', () => {
    const mapA = new Map();
    const mapB = new Map();
    mapA.set('dog', 'Bryar');
    mapB.set('cat', 'Oliver');
    expect(leftJoin(null, mapB)).toEqual([]);
    expect(leftJoin(null, null)).toEqual([]);
    expect(leftJoin(mapA, null)).toEqual([]);
  });

  test('returns an empty array if mapA is empty', () => {
    const mapA = new Map();
    const mapB = new Map();
    mapB.set('dog', 'Milo');
    expect(leftJoin(mapA, mapB)).toEqual([]);
  });

  test('successfully returns the left join of expected map input', () => {
    const mapA = new Map();
    const mapB = new Map();
    mapA.set('dog', 'Kali');
    mapB.set('dog', 'Ginger');
    expect(leftJoin(mapA, mapB)).toEqual([['dog', 'Kali', 'Ginger']]);
    mapA.set('cat', 'Oliver');
    mapB.set('cat', 'Pudders');
    expect(leftJoin(mapA, mapB)).toEqual([['dog', 'Kali', 'Ginger'], ['cat', 'Oliver', 'Pudders']]);
    mapA.set('snake', 'Joseph');
    expect(leftJoin(mapA, mapB)).toEqual([
      ['dog', 'Kali', 'Ginger'],
      ['cat', 'Oliver', 'Pudders'],
      ['snake', 'Joseph', undefined],
    ]);
  });
});
