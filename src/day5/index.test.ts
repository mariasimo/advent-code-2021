import { readInputAsArray } from '../utils';
import { parseToLines } from './logic';

const input = readInputAsArray({ dayNumber: 5, isExample: true });

describe('Day 5: Hydrothermal Venture', () => {
  describe('Generic', () => {
    describe('Parse Input', () => {
      test('Create array of lines', () => {
        expect(parseToLines(input)).toBe(true);
      });
    });
  });
});
