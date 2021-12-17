import { AdjacencyList } from './types';

// DFS Graph Algorithms https://codeburst.io/implementing-dfs-and-bfs-using-javascript-5034f3cee9a1

export const parseInput = (input: string[]) => {
  return input.map((connection) => connection.split('-'));
};

export const createAdjacencyList = (input: string[][]): AdjacencyList => {
  const adjacencyList: AdjacencyList = {};

  input.forEach((path) =>
    path.forEach((cave) => {
      if (Object.keys(adjacencyList).includes(cave)) return;

      const adjacents = input
        .filter((path) => path.includes(cave))
        .map((path) => path.find((c) => c !== cave) ?? '');

      adjacencyList[cave] = adjacents;
    }),
  );

  return adjacencyList;
};

export const findPaths = (adjacencyList: AdjacencyList) => {
  const paths: string[][] = [];

  function findPath(node: string, visited: string[], paths: string[][]) {
    visited.push(node);

    if (node === 'end') {
      paths.push(visited);
    }

    for (const neighbour of adjacencyList[node]) {
      if (
        neighbour !== neighbour.toLowerCase() ||
        !visited.includes(neighbour)
      ) {
        findPath(neighbour, [...visited], paths);
      }
    }
  }

  findPath('start', [], paths);

  return paths;
};
