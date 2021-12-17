import { readInputAsArray } from '../utils';
import { createAdjacencyList, findPaths, parseInput, testPath } from './logic';

const input = readInputAsArray({ dayNumber: 12, isExample: true });
const parsedInput = parseInput(input);

const adjacencyList = createAdjacencyList(parsedInput);

describe('Day12:Passage Pathing', () => {
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
    describe('CreateAdjacencyList', () => {
      test('Should return an object with every node as property, and an array of its adjacent nodes as value', () => {
        expect(createAdjacencyList(parsedInput)).toHaveProperty('start');
      });
      test('Should return an object with every node as property, and an array of its adjacent nodes as value', () => {
        expect(createAdjacencyList(parsedInput)).toHaveProperty('end');
      });
      test('Should return an object with every node as property, and an array of its adjacent nodes as value', () => {
        expect(createAdjacencyList(parsedInput).end).toStrictEqual(['A', 'b']);
      });
    });
    describe('XXX', () => {
      test('XXX', () => {
        expect(findPaths(adjacencyList).length).toBe(10);
      });
    });
  });
});
