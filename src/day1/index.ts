import { readInputAsArray } from "../utils/index";
import { countTimesDepthIncrease, mapArrayInSum } from "./utils";

const input = readInputAsArray(1);
const output = countTimesDepthIncrease(input);

console.log(mapArrayInSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log(`Part 1 Solution -> ${output}`);
