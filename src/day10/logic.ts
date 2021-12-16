export const parseInput = (input: string[]) => {
  return input.map((line) => line.split(''));
};

const pairs: { [openChar: string]: string } = {
  '(': ')',
  '[': ']',
  '{': '}',
  '<': '>',
};

const scores: { [openChar: string]: number } = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
};

const isClosingChar = (char: string) => Object.values(pairs).includes(char);

const isPair = (openChar: string, closeChar: string) =>
  pairs[openChar] === closeChar;

export const filterInmediatePairs = (line: string[]) => {
  const removePairs: string[] = [];

  line.forEach((char) => {
    if (
      isClosingChar(char) &&
      isPair(removePairs[removePairs.length - 1], char)
    ) {
      removePairs.pop();
    } else {
      removePairs.push(char);
    }
  });

  return removePairs;
};

export const getIncorrectChar = (line: string[]) => {
  const filteredLine = filterInmediatePairs(line);

  const incorrectChar = filteredLine.find((char) =>
    Object.values(pairs).includes(char),
  );

  return incorrectChar;
};

export const calculateIncorrectCharsScore = (lines: string[][]) => {
  const incorrectChars = lines
    .map((line) => getIncorrectChar(line))
    .filter(Boolean);

  const score = incorrectChars.reduce(
    (total, char) => total + scores[char as string],
    0,
  );
  return score;
};

export const findCompletionString = (line: string[]) => {
  const filteredLine = filterInmediatePairs(line);

  return filteredLine
    .map((i: string) => pairs[i])
    .reverse()
    .join('');
};
