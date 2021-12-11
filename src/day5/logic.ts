import { Line, Point } from './types';

export const parseToLines = (input: string[]): Line[] => {
  const basePoint: Point = [0, 0];
  const baseLine: Line = [basePoint, basePoint];

  const lines = input.map((item) => {
    return <Line>baseLine.map((_, index) => {
      const pointStrings = item.split('->')[index];
      const point = pointStrings.split(',').map((el) => +el);
      return point;
    });
  });

  return lines;
};
