import { readFileSync } from "fs";

export const readInput = (dayNumber) => {
  const path = `./src/day${dayNumber}/input`;
  const input = readFileSync(path, "utf8");
  return input;
};

export const readInputAsArray = (dayNumber) => {
  const input = readInput(dayNumber);
  return input.split("\n");
};
