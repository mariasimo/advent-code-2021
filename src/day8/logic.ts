const DIGITS_BY_SEGMENTS_NUMBER = {
  '0': 6,
  '1': 2,
  '2': 5,
  '3': 5,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 3,
  '8': 7,
  '9': 6,
};

export const parseInput = (
  input: string[],
): { signalPatterns: string[]; outputValue: string[] }[] => {
  return input.map((lines) => {
    const [signalPatterns, outputValue] = lines
      .split(' | ')
      .map((line) => line.split(' '));
    return { signalPatterns, outputValue };
  });
};

export const countUniqueLengthDigits = (outputValueList: string[]) => {
  const digitLengths = Object.values(DIGITS_BY_SEGMENTS_NUMBER);

  const uniqueDigitLengths = digitLengths.filter(
    (x) => digitLengths.filter((y) => y === x).length === 1,
  );

  return outputValueList.reduce((total, outputValue) => {
    uniqueDigitLengths.includes(outputValue.length) ? total++ : total;
    return total;
  }, 0);
};
