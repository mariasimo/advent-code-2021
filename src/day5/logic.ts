import { Line, Point } from './types';

export const basePoint: Point = [0, 0];
export const baseLine: Line = [basePoint, basePoint];

export const parseToLines = (input: string[]): Line[] => {
  const lines = input.map((item) => {
    return <Line>baseLine.map((_, index) => {
      const pointStrings = item.split('->')[index];
      const point = pointStrings.split(',').map((el) => +el);
      return point;
    });
  });

  return lines;
};

export const generateDiagram = (
  xLength: number,
  yLength: number,
): string[][] => {
  const grid = [...Array(xLength)].map(
    (_) => <string[]>[...Array(yLength).fill('.')],
  );
  return grid;
};
