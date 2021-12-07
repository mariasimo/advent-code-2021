export enum BitOptions {
  zero = '0',
  one = '1',
}
export enum RateOptions {
  gamma = 'gamma',
  epsilon = 'epsilon',
}

export type Bit = `${BitOptions}`;
export type Rate = keyof typeof RateOptions;
export type Counter = { '0': number; '1': number };
export type RateCalculationMethod = {
  [K in Rate]: (counter: Counter) => Bit;
};
