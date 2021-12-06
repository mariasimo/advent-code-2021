import { MeasurementResult } from "./types";

export const checkDepthChange = (
  previousMeasure: number,
  newMesaure: number
): MeasurementResult => {
  return newMesaure - previousMeasure > 0
    ? MeasurementResult.increased
    : MeasurementResult.decreased;
};

export const countTimesDepthIncrease = (
  measurementsInput: string[]
): number => {
  return measurementsInput
    .map((m, index, arr) => checkDepthChange(+m, +arr[index + 1]))
    .filter((m) => m === "increased").length;
};
