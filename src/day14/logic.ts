import { Rule } from './types';

export const parseInput = (input: string[]) => {
  const template = input.splice(0, 1)[0];
  const rules = input
    .filter((r) => r)
    .map((r) => {
      const [pair, insertion] = r.split('->');
      return { pair: pair.trim(), insertion: insertion.trim() };
    });

  return { template, rules };
};

export const completeStep = (polymer: string, rules: Rule[]) => {
  const foundPairs: string[] = polymer
    .split('')
    .map((s, i) => (polymer[i + 1] ? s + polymer[i + 1] : s));

  const findRule = (pair: string) => rules.find((r) => r.pair === pair);

  const newPolymer = foundPairs
    .map((pair) => {
      const insertion = findRule(pair)?.insertion;

      if (insertion) {
        return pair[0] + insertion;
      }

      return pair;
    })
    .join('');

  return newPolymer;
};

export const growPolymer = (
  initialPolymer: string,
  rules: Rule[],
  steps: number,
) => {
  let counter = steps;
  let finalPolymer = initialPolymer;

  do {
    finalPolymer = completeStep(finalPolymer, rules);
    counter--;
  } while (counter > 0);

  return finalPolymer;
};

export const getPolymerElementsDifference = (
  initialPolymer: string,
  rules: Rule[],
  steps: number,
) => {
  const polymer = growPolymer(initialPolymer, rules, steps);

  const elementsCount = polymer
    .split('')
    .reduce((output: { [element: string]: number }, element) => {
      if (output[element]) {
        output[element] += 1;
      } else {
        output[element] = 1;
      }

      return output;
    }, {});

  const elementsCountValues = Object.values(elementsCount).sort(
    (a, b) => b - a,
  );

  return (
    elementsCountValues[0] - elementsCountValues[elementsCountValues.length - 1]
  );
};

type Inventory = { [pair: string]: number };

export const countPolymerElements = (
  template: string,
  rules: Rule[],
  steps: number,
) => {
  const total = 40;
  let rest = '';

  const initialInventory = template
    .split('')
    .reduce((i: Inventory, letter, index, self) => {
      const nextLetter = self[index + 1];

      const pair = nextLetter && letter + nextLetter;
      if (!nextLetter) {
        rest = letter;
      } else {
        i[pair] = i[pair] ? i[pair] + 1 : 1;
      }

      return i;
    }, {});

  const findRule = (pair: string) => rules.find((r) => r.pair === pair);

  const trackInventory = (inventory: Inventory): Inventory => {
    return Object.keys(inventory).reduce((updated: Inventory, pair) => {
      const insertion = findRule(pair)?.insertion;
      const [n1, n2] = pair.split('');
      const pair1 = n1 + insertion;
      const pair2 = insertion + n2;

      if (inventory[pair] === 1) {
        updated[pair1] = updated[pair1] ? updated[pair1] + 1 : 1;
        updated[pair2] = updated[pair2] ? updated[pair2] + 1 : 1;
      } else {
        for (let i = 0; i < inventory[pair]; i++) {
          updated[pair1] = updated[pair1] ? updated[pair1] + 1 : 1;
          updated[pair2] = updated[pair2] ? updated[pair2] + 1 : 1;
        }
      }

      return updated;
    }, {});
  };

  const trackPairs = (step: number, inventory: Inventory): any => {
    if (step === total) {
      return inventory;
    }
    console.log(step, inventory);

    const updatedStep = step + 1;
    const updatedInventory = trackInventory(inventory);

    return trackPairs(updatedStep, updatedInventory);
  };

  const countInventory = (inventory: Inventory) => {
    const string =
      Object.keys(inventory)
        .map((pair) => pair[0].repeat(inventory[pair]))
        .join('') + rest;

    return string.split('').reduce((inventory: Inventory, element) => {
      if (inventory[element]) {
        inventory[element] += 1;
      }
      if (element && !inventory[element]) {
        inventory[element] = 1;
      }

      return inventory;
    }, {});
  };

  const inventory = trackPairs(0, initialInventory);
  const inventoryCount = countInventory(inventory);

  console.log(inventoryCount);
};
