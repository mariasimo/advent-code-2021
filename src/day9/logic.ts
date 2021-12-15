export const parseInput = (input: string[]) => {
  return input.map((line) => line.split('').map((d) => +d));
};

// 2199943210;
// 3987894921;
// 9856789892;
// 8767896789;
// 9899965678; rowIndex = 4

const findAdjacents = (
  input: number[][],
  rowIndex: number,
  numIndex: number,
): number[] => {
  const limits = {
    top: 0,
    bottom: input.length - 1,
    left: 0,
    right: input[0].length - 1,
  };

  const adjacents = [];

  if (rowIndex > limits.top) adjacents.push(input[rowIndex - 1][numIndex]);
  if (rowIndex < limits.bottom) adjacents.push(input[rowIndex + 1][numIndex]);
  if (numIndex > limits.left) adjacents.push(input[rowIndex][numIndex - 1]);
  if (numIndex < limits.right) adjacents.push(input[rowIndex][numIndex + 1]);

  return adjacents;
};

export const findLowPoints = (input: number[][]): number[] => {
  return input.reduce((lowPoints, row, rowIndex) => {
    const lowPointsInRow = row.filter((num, numIndex) => {
      const adjacents = findAdjacents(input, rowIndex, numIndex);

      return num === Math.min(num, ...adjacents) && !adjacents.includes(num);
    });

    lowPoints.push(...lowPointsInRow);
    return lowPoints;
  }, []);
};

export const getRiskLevel = (lowPoint: number): number => lowPoint + 1;

export const getRiskLevelTotal = (input: number[][]): number => {
  const lowPoints = findLowPoints(input);
  const riskLevels = lowPoints.map((p) => getRiskLevel(p));

  return riskLevels.reduce((total, r) => total + r, 0);
};
