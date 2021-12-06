import { convertToNumber, readInputAsArray, logResults } from '../utils';
import { countTimesDepthIncrease, mapArrayInSum } from './logic';

const input: number[] = readInputAsArray({ dayNumber: 1 }).map((item) =>
  convertToNumber(item),
);

const outputPart1 = countTimesDepthIncrease(input);
const outputPart2 = countTimesDepthIncrease(mapArrayInSum(input));

logResults(2, [outputPart1, outputPart2]);

export { outputPart1, outputPart2 };
