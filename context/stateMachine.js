import { createMachine } from 'xstate';

export const introVals = {
  start: 'start',
  kitchen: 'snack-time',
};

export const firstLevel = {
  apple: 'eat-an-apple',
  kidsringing: 'eat-some-candy',
};

export const secondLevel = {
  ignore: 'ignore-the-kids',
  answer: 'answer-the-door',
};

export const states = [introVals, firstLevel];

const storyMachine = createMachine({
  id: 'spookydev',
  initial: 'start',
  states: {
    [introVals.start]: {
      meta: {
        story:
          'Once upon a time there was a developer who was working very late at night. Very late at night... on Halloween.',
      },
      on: {
        [introVals.kitchen]: introVals.kitchen,
      },
    },
    [introVals.kitchen]: {
      meta: {
        story: `The developer decided to take a break to get a snack. She went to the kitchen, and couldn't decide what to eat.`,
      },
      on: {
        [firstLevel.apple]: firstLevel.apple,
        [firstLevel.kidsringing]: firstLevel.kidsringing,
      },
    },
    [firstLevel.apple]: {
      meta: {
        story:
          'She took a bite of the apple, and paused. She felt funny. Turns out it was poisoned and her work was never finished. Her last words were, "I wish I committed early and often in my repositories."',
      },
      on: {
        restart: introVals.start,
      },
    },
    [firstLevel.kidsringing]: {
      meta: {
        story:
          'She munched on the candy, enjoying the delightful thought of getting a cavity someday. But then, the doorbell rang. "Trick or Treat!" echoed outside.',
      },
      on: {
        [secondLevel.ignore]: secondLevel.ignore,
        [secondLevel.answer]: secondLevel.answer,
      },
    },
    [secondLevel.ignore]: {
      meta: {
        story:
          '"I do not have time for children. I have bugs to solve, and a world to save." She walked upstairs, angry at the inconvenience of people existing.',
      },
    },
    [secondLevel.answer]: {
      meta: {
        story:
          'She opened the front door, but there was nobody there. It was spooky, but probably good since she ate the candy.',
      },
    },
  },
});

export default storyMachine;
