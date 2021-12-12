import { Line, Point, Diagram } from './types';

const OVERLAP_FACTOR = 2;

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

export const generateDiagram = (
  xLength: number = 10,
  yLength: number = 10,
): Diagram => {
  const grid = [...Array(xLength)].map(
    (_) => <null[]>[...Array(yLength).fill(null)],
  );
  return grid;
};

export const filterDiagonalLines = (lines: Line[]) => {
  return lines.filter(
    ([startPoint, endPoint]) =>
      startPoint[0] === endPoint[0] || startPoint[1] === endPoint[1],
  );
};

const incrementPoint = (diagram: Diagram, x: number, y: number) => {
  let currentValue = diagram[y][x];
  const newValue = !currentValue ? 1 : currentValue + 1;

  diagram[y][x] = newValue;

  return diagram;
};

export const findLargestValue = (lines: Line[], axis: 'x' | 'y') => {
  const axisIndexValues = { x: 0, y: 1 };
  const axisIndex = axisIndexValues[axis];

  const xAxisValues = lines.map(([startPoint, endPoint]) => [
    startPoint[axisIndex],
    endPoint[axisIndex],
  ]);

  const numbersList = xAxisValues.flat(2);

  return Math.max(...numbersList);
};

export const registerLinesInDiagram = (lines: Line[]) => {
  let largestNumOnXAxis = findLargestValue(lines, 'x');
  let largestNumOnYAxis = findLargestValue(lines, 'y');

  let diagram = generateDiagram(largestNumOnXAxis + 1, largestNumOnYAxis + 1);

  const filteredLines = filterDiagonalLines(lines);

  for (const line of filteredLines) {
    let [[startX, startY], [endX, endY]] = line;

    if (startX < endX) {
      for (let x = startX; x <= endX; x++) {
        incrementPoint(diagram, x, startY);
      }
    } else if (startX > endX) {
      for (let x = startX; x >= endX; x--) {
        incrementPoint(diagram, x, startY);
      }
    }

    if (startY < endY) {
      for (let y = startY; y <= endY; y++) {
        incrementPoint(diagram, startX, y);
      }
    } else if (startY > endY) {
      for (let y = startY; y >= endY; y--) {
        incrementPoint(diagram, startX, y);
      }
    }
  }

  return diagram;
};

export const countOverlappingLines = (diagram: Diagram) => {
  const filteredDiagram = diagram.flat().filter(Boolean);

  return filteredDiagram.reduce((total: number, cu) => {
    const pointValue = cu && cu >= OVERLAP_FACTOR ? 1 : 0;
    return total + pointValue;
  }, 0);
};
