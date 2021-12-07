import { Bit, BitOptions, Counter, Rate, RateCalculationMethod } from './types';

export const binaryToDecimal = (binary: string): number => {
  return parseInt(binary, 2);
};

export const binaryToDecimalOldSchool = (binary: string): number => {
  const t = binary
    .split('')
    .reverse()
    .reduce((total, digit, index) => {
      if (+digit) {
        return total + 2 ** index;
      }

      return total;
    }, 0);

  return t;
};

export const createRow = (input: string[], position: number): Bit[] => {
  return input.map((item) => <Bit>item[position]);
};

export const countTypeOfBitsInRow = (row: Bit[]): Counter => {
  const initialCounter: Counter = { '0': 0, '1': 0 };

  return row.reduce((acc: Counter, cu) => {
    if (cu === BitOptions.zero) {
      acc[BitOptions.zero] += 1;
    }
    if (cu === BitOptions.one) {
      acc[BitOptions.one] += 1;
    }

    return acc;
  }, initialCounter);
};

const getRateCalculation = (): RateCalculationMethod => {
  const getMostCommonBit = (counter: Counter) =>
    counter[0] > counter[1] ? '0' : '1';

  const getLessCommonBit = (counter: Counter) =>
    counter[0] < counter[1] ? '0' : '1';

  return {
    gamma: getMostCommonBit,
    epsilon: getLessCommonBit,
  };
};

export const calcRate = (input: string[], rate: Rate): number => {
  const numberOfRows = [...Array(input[0].length).keys()];

  const binary = numberOfRows
    .map((position) => {
      const row = createRow(input, position);
      const counter = countTypeOfBitsInRow(row);
      const rateCalculation = getRateCalculation();
      const calculateRate = rateCalculation[rate];

      return calculateRate(counter);
    })
    .join('');

  return binaryToDecimal(binary);
};

export const getPowerCompsumtion = (input: string[]): number => {
  const gammaRate = calcRate(input, 'gamma');
  const epsilonRate = calcRate(input, 'epsilon');

  return gammaRate * epsilonRate;
};
