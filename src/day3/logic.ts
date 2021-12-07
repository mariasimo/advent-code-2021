export const binaryToDecimal = (binary: string): number => {
  return parseInt(binary, 2);
};
export const binaryToDecimalOldSchool = (binary: string): number => {
  console.log({ binary });
  const t = binary
    .split('')
    .reverse()
    .reduce((total, digit, index) => {
      if (+digit) {
        return total + 2 ** index;
      }

      return total;
    }, 0);

  return t;
};
