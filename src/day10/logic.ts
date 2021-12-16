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

export const getIncorrectChar = (line: string[]) => {
  const isClosingChar = (char: string) => Object.values(pairs).includes(char);
  const isPair = (openChar: string, closeChar: string) =>
    pairs[openChar] === closeChar;

  let incorrectChar: string = '';

  const findIncorrectCharInLine = (line: string[]) => {
    for (const index in line) {
      if (isClosingChar(line[index])) {
        if (!isPair(line[+index - 1], line[index])) {
          incorrectChar = line[index];
        } else {
          line.splice(+index - 1, 2);
          findIncorrectCharInLine(line);
        }
      }
      if (incorrectChar) {
        break;
      }
    }
  };

  findIncorrectCharInLine(line);
  return incorrectChar;
};

export const calculateIncorrectCharsScore = (lines: string[][]) => {
  const incorrectChars = lines
    .map((line) => getIncorrectChar(line))
    .filter(Boolean);

  const score = incorrectChars.reduce((total, char) => total + scores[char], 0);
  return score;
};
