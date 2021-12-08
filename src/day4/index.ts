import { logResults, readInputAsArray } from '../utils';
import { parseInput, getBingoScore } from './logic';

const input = readInputAsArray({ dayNumber: 4 });
const { randomNumbers, boards } = parseInput(input);

const outputPart1 = getBingoScore(boards, randomNumbers);
const outputPart2 = 0;

logResults(4, [outputPart1, outputPart2]);

export { outputPart1, outputPart2 };
