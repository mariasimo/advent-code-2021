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
