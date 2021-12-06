import { readInputAsArray } from '../utils';
import {
  followCommands,
  parseCommands,
  getPositionProduct,
  followCommandsWithAim,
} from './logic';
import { Position, PositionWithAim } from './types';

const exampleCommands = readInputAsArray({ dayNumber: 2, isExample: true });

const position: Position = {
  distance: 0,
  depth: 0,
};

describe('Day:Dive!', () => {
  describe('Generic', () => {
    test('Should parse commands', () => {
      expect(parseCommands(['forward 8', 'up 3', 'down 4'])).toStrictEqual([
        { coordinate: 'forward', amount: 8 },
        { coordinate: 'up', amount: 3 },
        { coordinate: 'down', amount: 4 },
      ]);
    });
    describe('New Position product', () => {
      test('Calculate product of new position', () => {
        const newPosition = { distance: 15, depth: 10 };
        expect(getPositionProduct(newPosition)).toBe(150);
      });
    });
  });
  describe('Part 1', () => {
    describe('Follow commands', () => {
      test('Should return new position correctly after following commands', () => {
        expect(followCommands(exampleCommands, position)).toStrictEqual({
          distance: 15,
          depth: 10,
        });
      });
    });
  });
  describe('Part 2', () => {
    describe('Follow a bit more complex commands', () => {
      test('Should return new position correctly after following commands', () => {
        expect(followCommandsWithAim(exampleCommands, position)).toStrictEqual({
          distance: 15,
          depth: 60,
        });
      });
    });
  });
});
