import chalk from "chalk";
import { readFileSync } from "fs";

type ReadInputProps = {
  dayNumber: string | number;
  partNumber?: string | number;
  isExample?: boolean;
};

export const readInput = ({
  dayNumber,
  partNumber = 1,
  isExample,
}: ReadInputProps): string => {
  const path = isExample
    ? `./src/day${dayNumber}/part${partNumber}-input-example`
    : `./src/day${dayNumber}/part${partNumber}-input`;

  console.log(path);

  const input = readFileSync(path, "utf8");
  return input;
};

export const readInputAsArray = ({
  dayNumber,
  partNumber = 1,
  isExample,
}: ReadInputProps): string[] => {
  const input = readInput({ dayNumber, partNumber, isExample });
  return input.split("\n");
};

export const convertToNumber = (string: string): number => {
  return +string;
};

export const logResults = (day: number, results: number[]): void => {
  const title = chalk.bold.hex("#ffc413");
  const text = chalk.hex("#ffc413");

  console.log(title(`\n⭐️ DAY ${day}:`));
  results.forEach((result, index) => {
    console.log(text(`   Part ${index + 1} Solution: ${result}`));
  });
};