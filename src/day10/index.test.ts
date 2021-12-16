import { readInputAsArray } from '../utils';
import {
  parseInput,
  getIncorrectChar,
  calculateIncorrectCharsScore,
} from './logic';

const input = readInputAsArray({ dayNumber: 10, isExample: true });
const parsedInput = parseInput(input);

describe('Day10:Syntax Scoring', () => {
  describe('Generic', () => {
    describe('Parse input', () => {
      test('Should return an array', () => {
        expect(parseInput(input)).toEqual(expect.any(Array));
      });
      test('Should return a 2d array', () => {
        expect(parseInput(input)[0]).toEqual(expect.any(Array));
      });
      test('Should return a 2d array fill with numbers', () => {
        expect(parseInput(input)[0][0]).toEqual(expect.any(String));
      });
    });
  });
  describe('Part 1', () => {
    describe('Get incorrect character', () => {
      test("Given a line, hould return the first character which doesn't match", () => {
        expect(getIncorrectChar(parsedInput[2])).toBe('}');
      });
    });
    describe('Calculate incorrect characters score', () => {
      test('Given an array of lines, get incorrect characters at corrupted lines, and calculate the sum of its scores', () => {
        expect(calculateIncorrectCharsScore(parsedInput)).toBe(26397);
      });
    });
  });
});
