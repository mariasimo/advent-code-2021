import { MeasurementResult } from "./types";

export const checkDepthChange = (
  previousMeasure: number,
  newMeasure: number
): string | null => {
  const difference = newMeasure - previousMeasure;
  if (!difference) return MeasurementResult.noChange;

  return difference >= 0
    ? MeasurementResult.increased
    : MeasurementResult.decreased;
};

export const countTimesDepthIncrease = (
  measurementsInput: number[]
): number => {
  return measurementsInput
    .map((m, index, arr) => checkDepthChange(+m, +arr[index + 1]))
    .filter((m) => m === "increased").length;
};

export const mapArrayInSum = (measurementsInput: number[]): number[] => {
  return measurementsInput.reduce((acc: number[], m, index, arr) => {
    const sum = arr.slice(index, index + 3).reduce((acc, cu) => acc + cu);

    if (arr[index + 2]) {
      acc.push(sum);
    }
    return acc;
  }, []);
};
