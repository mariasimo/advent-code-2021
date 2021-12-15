import { readInputAsArray } from '../utils';
import { parseInput, countUniqueLengthDigits } from './logic';

const input = readInputAsArray({ dayNumber: 8, isExample: true });
const outputValueList = parseInput(input)
  .map((entry) => entry.outputValue)
  .flat();

describe('Day8: Seven Segment Search', () => {
  describe('Generic', () => {
    describe('Parse input', () => {
      test('Should return an array with objects containing signalPatterns property', () => {
        expect(parseInput(input)[0]).toHaveProperty('signalPatterns');
      });
      test('Should return an array with objects containing outputValue property', () => {
        expect(parseInput(input)[0]).toHaveProperty('outputValue');
      });
    });
  });
  describe('Part 1', () => {
    describe('Count unique length digits', () => {
      test('Should return the number of unique length digits in the output value strings', () => {
        expect(countUniqueLengthDigits(outputValueList)).toBe(26);
      });
    });
  });
});
