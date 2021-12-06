import { convertToNumber, readInputAsArray } from "../utils";
import { countTimesDepthIncrease, mapArrayInSum } from "./utils";

const input: number[] = readInputAsArray({ dayNumber: 1 }).map((item) =>
  convertToNumber(item)
);

const outputPart1 = countTimesDepthIncrease(input);
const outputPart2 = countTimesDepthIncrease(mapArrayInSum(input));

console.log(`DAY 1:`);
console.log(`Part 1 Solution -> ${outputPart1}`);
console.log(`Part 2 Solution -> ${outputPart2}`);

export { outputPart1, outputPart2 };
