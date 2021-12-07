import { logResults, readInputAsArray } from '../utils/index';
import { getPowerCompsumtion } from './logic';

const input: string[] = readInputAsArray({ dayNumber: 3 });

const outputPart1 = getPowerCompsumtion(input);
const outputPart2 = 0;

logResults(3, [outputPart1, outputPart2]);

export { outputPart1, outputPart2 };
