import { readFileSync } from "fs";

export const readInput = (dayNumber: string | number): string => {
  const path = `./src/day${dayNumber}/input`;
  const input = readFileSync(path, "utf8");
  return input;
};

export const readInputAsArray = (dayNumber: string | number): string[] => {
  const input = readInput(dayNumber);
  return input.split("\n");
};
