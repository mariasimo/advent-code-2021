import {
  Position,
  Command,
  Coordinate,
  CoordinateOptions,
  PositionWithAim,
} from './types';

export const followCommands = (
  commands: string[],
  position: Position,
): Position => {
  const destination = parseCommands(commands).reduce(
    (newPosition, command) => {
      if (command.coordinate === CoordinateOptions.down) {
        newPosition.depth = newPosition.depth + command.amount;
      }
      if (command.coordinate === CoordinateOptions.up) {
        newPosition.depth = newPosition.depth - command.amount;
      }
      if (command.coordinate === CoordinateOptions.forward) {
        newPosition.distance = newPosition.distance + command.amount;
      }

      return newPosition;
    },
    { ...position },
  );

  return destination;
};

export const parseCommands = (commands: string[]): Command[] => {
  return commands.map((command) => ({
    coordinate: command.split(' ')[0] as Coordinate,
    amount: +command.split(' ')[1],
  }));
};

export const getPositionProduct = (position: Position) => {
  return position.distance * position.depth;
};

export const followCommandsWithAim = (
  commands: string[],
  position: Position,
): Position => {
  let aim = 0;

  const destination = parseCommands(commands).reduce(
    (newPosition, command) => {
      if (command.coordinate === CoordinateOptions.down) {
        aim = aim + command.amount;
      }
      if (command.coordinate === CoordinateOptions.up) {
        aim = aim - command.amount;
      }
      if (command.coordinate === CoordinateOptions.forward) {
        newPosition.distance = newPosition.distance + command.amount;
        newPosition.depth = newPosition.depth + aim * command.amount;
      }

      return newPosition;
    },
    { ...position },
  );

  return destination;
};
