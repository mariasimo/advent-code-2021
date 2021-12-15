import { readInputAsArray } from '../utils';
import {
  parseInput,
  findLowPoints,
  getRiskLevel,
  getRiskLevelTotal,
} from './logic';

const input = readInputAsArray({ dayNumber: 9, isExample: true });
const parsedInput = parseInput(input);

describe('Day9:Smoking Basin', () => {
  describe('Generic', () => {
    describe('Parse input', () => {
      test('Should return an array', () => {
        expect(parseInput(input)).toEqual(expect.any(Array));
      });
      test('Should return a 2d array', () => {
        expect(parseInput(input)[0]).toEqual(expect.any(Array));
      });
      test('Should return a 2d array fill with numbers', () => {
        expect(parseInput(input)[0][0]).toEqual(expect.any(Number));
      });
    });
  });
  describe('Part 1', () => {
    describe('Find low points', () => {
      test('Should return an array with numbers of input which are lower than any adjacent (top, bottom, left or right)', () => {
        expect(findLowPoints(parsedInput)).toStrictEqual([1, 0, 5, 5]);
      });
    });
    describe('Get risk level', () => {
      test('Given a low point, should return its risk level', () => {
        expect(getRiskLevel(5)).toBe(6);
      });
    });
    describe('Get risk level total', () => {
      test('Find low points and return the sum of its risk levels', () => {
        expect(getRiskLevelTotal(parsedInput)).toBe(15);
      });
    });
  });
});
