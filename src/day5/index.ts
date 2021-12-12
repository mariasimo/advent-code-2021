import { logResults, readInputAsArray } from '../utils';
import {
  countOverlappingLines,
  parseToLines,
  registerLinesInDiagram,
} from './logic';
const input = readInputAsArray({ dayNumber: 5 });

const lines = parseToLines(input);
const registeredLines = registerLinesInDiagram(lines);

const outputPart1 = countOverlappingLines(registeredLines);
const outputPart2 = 0;

logResults(5, [outputPart1, outputPart2]);

export { outputPart1, outputPart2 };
