export type Position = { distance: number; depth: number };
export enum CoordinateOptions {
  forward = 'forward',
  down = 'down',
  up = 'up',
}
export type Coordinate = keyof typeof CoordinateOptions;
export type Command = { coordinate: Coordinate; amount: number };
export type PositionWithAim = Position & { aim: number };
