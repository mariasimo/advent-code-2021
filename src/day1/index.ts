import { readInputAsArray } from "../utils/index.js";

enum MeasurementResult {
  increased = "increased",
  decreased = "decreased",
}

const input = readInputAsArray(1);

const checkDepthChange = (
  previousMeasure: number,
  newMesaure: number
): MeasurementResult => {
  return newMesaure - previousMeasure > 0
    ? MeasurementResult.increased
    : MeasurementResult.decreased;
};

const countTimesDepthIncrease = (measurementsInput: string[]): number => {
  return measurementsInput
    .map((m, index, arr) => checkDepthChange(+m, +arr[index + 1]))
    .filter((m) => m === "increased").length;
};

console.log(countTimesDepthIncrease(input));

// refactor
// tests
