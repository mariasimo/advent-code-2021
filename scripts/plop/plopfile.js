const { join } = require('path');
const projectSrc = join(__dirname, '../../src');

const validateDayInput = ([dayInput]) =>
  typeof +dayInput === 'number' || 'The day needs to be a number';

module.exports = function runPlop(plop) {
  plop.setGenerator('day', {
    description: 'Create new day boilerplate',
    prompts: [
      {
        type: 'input',
        name: 'day',
        message: 'add current day',
        validate: validateDayInput,
      },
      {
        type: 'input',
        name: 'title',
        message: 'add title of exercise',
      },
    ],
    actions: () => [
      {
        type: 'add',
        path: join(projectSrc, 'day{{day}}/index.ts'),
        templateFile: 'templates/day/index.ts.hbs',
      },
      {
        type: 'add',
        path: join(projectSrc, 'day{{day}}/logic.ts'),
        templateFile: 'templates/day/logic.ts.hbs',
      },
      {
        type: 'add',
        path: join(projectSrc, 'day{{day}}/index.test.ts'),
        templateFile: 'templates/day/index.test.ts.hbs',
      },
      {
        type: 'add',
        path: join(projectSrc, 'day{{day}}/types.ts'),
        templateFile: 'templates/day/types.ts.hbs',
      },
      {
        type: 'add',
        path: join(projectSrc, 'day{{day}}/part1-input'),
        templateFile: 'templates/day/part1-input.hbs',
      },
      {
        type: 'add',
        path: join(projectSrc, 'day{{day}}/part1-input-example'),
        templateFile: 'templates/day/part1-input-example.hbs',
      },
      {
        type: 'add',
        path: join(projectSrc, 'day{{day}}/part2-input'),
        templateFile: 'templates/day/part2-input.hbs',
      },
      {
        type: 'add',
        path: join(projectSrc, 'day{{day}}/part2-input-example'),
        templateFile: 'templates/day/part2-input-example.hbs',
      },
    ],
  });
};
