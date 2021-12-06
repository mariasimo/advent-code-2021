import { readInputAsArray } from "../utils/index";
import { countTimesDepthIncrease } from "./utils";

const input = readInputAsArray(1);
const output = countTimesDepthIncrease(input);

console.log(`Part 1 Solution -> ${output}`);
