import { logResults, readInputAsArray } from '../utils';
import {
  followCommands,
  followCommandsWithAim,
  getPositionProduct,
} from './logic';
import { Position } from './types';

const commands = readInputAsArray({ dayNumber: 2 });

const position: Position = {
  distance: 0,
  depth: 0,
};

const destinationPart1 = followCommands(commands, position);
const destinationPart2 = followCommandsWithAim(commands, position);
const outputPart1 = getPositionProduct(destinationPart1);
const outputPart2 = getPositionProduct(destinationPart2);

logResults(1, [outputPart1, outputPart2]);
export { outputPart1, outputPart2 };
