import { binaryToDecimalOldSchool } from './logic';

describe('Day: Binary Diagnostic', () => {
  describe('Part 1', () => {
    describe('BinaryToDecimal', () => {
      test('Should convert binary to decimal', () => {
        expect(binaryToDecimalOldSchool('10110')).toBe(22);
      });
      test('Should convert binary to decimal', () => {
        expect(binaryToDecimalOldSchool('01001')).toBe(9);
      });
    });
  });
});
