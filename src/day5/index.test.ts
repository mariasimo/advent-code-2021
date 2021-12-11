import { readInputAsArray } from '../utils';
import { generateDiagram, parseToLines } from './logic';

const input = readInputAsArray({ dayNumber: 5, isExample: true });

describe('Day 5: Hydrothermal Venture', () => {
  describe('Generic', () => {
    describe('Parse Input', () => {
      test('Return an array', () => {
        expect(parseToLines(input)).toEqual(expect.any(Array));
      });
      test('Create array of lines', () => {
        expect(parseToLines(input)[0]).toEqual([
          [0, 9],
          [5, 9],
        ]);
      });
    });
    describe('Create diagram', () => {
      test('Return an array', () => {
        expect(generateDiagram(9, 9)).toEqual(expect.any(Array));
      });
      test('Generate 2d array for register lines', () => {
        expect(generateDiagram(3, 3)[0]).toEqual(['.', '.', '.']);
      });
    });
  });
});
